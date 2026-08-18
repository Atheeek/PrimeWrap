import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type FormRuntimeEnv = {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  RESEND_TO_EMAIL?: string;
};

const MAX_FILES = 5;
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/quote") return await handleQuoteRequest(request, env);

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};

async function handleQuoteRequest(request: Request, env: unknown): Promise<Response> {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed." }, 405, { allow: "POST" });
  }

  const runtimeEnv = getRuntimeEnv(env);
  if (!runtimeEnv.RESEND_API_KEY || !runtimeEnv.RESEND_FROM_EMAIL || !runtimeEnv.RESEND_TO_EMAIL) {
    console.error("Quote form is missing required Resend environment variables.");
    return json(
      { message: "The quote form is being configured. Please call or WhatsApp us instead." },
      503,
    );
  }

  try {
    const formData = await request.formData();
    // A hidden field that real visitors never see. Treat bot posts as success so they do not retry.
    if (String(formData.get("website") ?? "").trim()) return json({ ok: true });

    const name = readText(formData, "name", 120);
    const phone = readText(formData, "phone", 50);
    const email = readText(formData, "email", 160);
    const message = readText(formData, "message", 2_500);
    const services = readText(formData, "services", 500) || "Not specified";
    const preferredContact = readText(formData, "preferred_contact", 40) || "Not specified";
    const source = readText(formData, "source", 80) || "Website";

    if (!name || !phone || !isEmail(email)) {
      return json(
        { message: "Please add your name, phone number and a valid email address." },
        400,
      );
    }

    const files = formData
      .getAll("photos")
      .filter((value): value is File => typeof value !== "string" && value instanceof File);

    if (files.length > MAX_FILES)
      return json({ message: `Please upload no more than ${MAX_FILES} photos.` }, 400);
    if (files.some((file) => !ACCEPTED_IMAGE_TYPES.has(file.type) || file.size > MAX_FILE_SIZE)) {
      return json({ message: "Photos must be JPG, PNG or WebP files up to 5 MB each." }, 400);
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${runtimeEnv.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: runtimeEnv.RESEND_FROM_EMAIL,
        to: [runtimeEnv.RESEND_TO_EMAIL],
        reply_to: email,
        subject: `New PrimeWrap enquiry — ${name}`,
        html: buildQuoteEmail({ name, phone, email, message, services, preferredContact, source }),
        attachments: await Promise.all(files.map(fileToAttachment)),
      }),
    });

    if (!emailResponse.ok) {
      console.error("Resend could not deliver a quote form request.", await emailResponse.text());
      return json(
        {
          message:
            "We could not send your request just now. Please try again or contact us directly.",
        },
        502,
      );
    }

    return json({ ok: true });
  } catch (error) {
    console.error("Quote form request failed.", error);
    return json(
      {
        message:
          "We could not send your request just now. Please try again or contact us directly.",
      },
      500,
    );
  }
}

function getRuntimeEnv(env: unknown): FormRuntimeEnv {
  const runtime = (env ?? {}) as FormRuntimeEnv;
  const node = typeof process !== "undefined" ? process.env : {};
  return {
    RESEND_API_KEY: runtime.RESEND_API_KEY ?? node.RESEND_API_KEY,
    RESEND_FROM_EMAIL: runtime.RESEND_FROM_EMAIL ?? node.RESEND_FROM_EMAIL,
    RESEND_TO_EMAIL: runtime.RESEND_TO_EMAIL ?? node.RESEND_TO_EMAIL,
  };
}

function readText(formData: FormData, field: string, limit: number) {
  return String(formData.get(field) ?? "")
    .trim()
    .slice(0, limit);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

function buildQuoteEmail(values: {
  name: string;
  phone: string;
  email: string;
  message: string;
  services: string;
  preferredContact: string;
  source: string;
}) {
  const rows = [
    ["Name", values.name],
    ["Phone", values.phone],
    ["Email", values.email],
    ["Preferred contact", values.preferredContact],
    ["Services", values.services],
    ["Source", values.source],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;color:#65718a;font-weight:600">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#142346">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<main style="font-family:Arial,sans-serif;max-width:640px;margin:auto;padding:24px"><h1 style="color:#142346">New PrimeWrap enquiry</h1><table style="border-collapse:collapse;width:100%;background:#f7f5f0">${rows}</table><h2 style="color:#142346;margin-top:28px">Project notes</h2><p style="white-space:pre-wrap;color:#33415c;line-height:1.6">${escapeHtml(values.message || "No message provided.")}</p></main>`;
}

async function fileToAttachment(file: File) {
  return { filename: file.name, content: toBase64(new Uint8Array(await file.arrayBuffer())) };
}

function toBase64(bytes: Uint8Array) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let output = "";
  for (let index = 0; index < bytes.length; index += 3) {
    const combined =
      (bytes[index] << 16) | ((bytes[index + 1] ?? 0) << 8) | (bytes[index + 2] ?? 0);
    output += alphabet[(combined >> 18) & 63];
    output += alphabet[(combined >> 12) & 63];
    output += index + 1 < bytes.length ? alphabet[(combined >> 6) & 63] : "=";
    output += index + 2 < bytes.length ? alphabet[combined & 63] : "=";
  }
  return output;
}

function json(payload: unknown, status = 200, headers: HeadersInit = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...headers,
    },
  });
}
