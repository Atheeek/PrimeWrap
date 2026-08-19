import { useRef, useState } from "react";
import { Check, LoaderCircle, MessageCircle, PhoneCall, Upload, X } from "lucide-react";

const wrapOptions = ["Kitchen", "Doors", "Bathroom", "Furniture", "Walls", "UPVC"];
const MAX_FILES = 5;
const MAX_FILE_SIZE = 5 * 1024 * 1024;

type LeadFormProps = {
  source: "Homepage quote" | "Contact page";
  compact?: boolean;
};

export function LeadForm({ source, compact = false }: LeadFormProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [preferredContact, setPreferredContact] = useState("WhatsApp");
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };

  const addFiles = (incoming: FileList | File[]) => {
    const candidates = Array.from(incoming);
    const invalidFile = candidates.find(
      (file) =>
        !["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > MAX_FILE_SIZE,
    );

    if (invalidFile) {
      setError("Please use JPG, PNG or WebP images up to 5 MB each.");
      return;
    }

    const nextFiles = [...files, ...candidates].slice(0, MAX_FILES);
    if (files.length + candidates.length > MAX_FILES) {
      setError(`You can upload up to ${MAX_FILES} photos.`);
    } else {
      setError(null);
    }
    setFiles(nextFiles);
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      formData.set("services", selectedServices.join(", ") || "Not specified");
      formData.set("preferred_contact", preferredContact);
      formData.set("source", source);
      files.forEach((file) => formData.append("photos", file));

      const response = await fetch("/api/quote", { method: "POST", body: formData });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;
      if (!response.ok)
        throw new Error(result?.message ?? "We could not send your request. Please try again.");

      window.location.assign("/thank-you");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not send your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = compact
    ? "w-full border-b border-white/30 bg-transparent py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-orange"
    : "w-full border-b-2 border-navy/15 bg-transparent py-3 text-navy placeholder:text-navy/40 outline-none transition-colors focus:border-orange";

  return (
    <form
      onSubmit={submit}
      encType="multipart/form-data"
      className={
        compact
          ? "overflow-hidden rounded-md border border-white/10 bg-white shadow-[0_20px_60px_rgba(20,35,70,0.10)]"
          : "space-y-12"
      }
    >
      <input
        className="hidden"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <section className={compact ? "bg-navy p-6 sm:p-8" : ""}>
        <div
          className={compact ? "mb-6" : "mb-8 flex items-end gap-3 border-b border-navy/10 pb-4"}
        >
          {!compact && <span className="text-lg font-bold text-orange">01</span>}
          <div>
            <p
              className={
                compact
                  ? "text-[10px] font-bold uppercase tracking-[0.2em] text-orange"
                  : "text-[10px] font-bold uppercase tracking-[0.2em] text-orange"
              }
            >
              Your details
            </p>
            <h3
              className={
                compact ? "mt-1 text-xl font-bold text-white" : "mt-1 text-2xl font-bold text-navy"
              }
            >
              Let&apos;s start a conversation.
            </h3>
          </div>
        </div>

        <div className={compact ? "space-y-5" : "grid gap-x-10 gap-y-8 md:grid-cols-2"}>
          <label className={compact ? "block" : "block"}>
            <span
              className={
                compact
                  ? "mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/55"
                  : "mb-1 block text-[10px] font-bold uppercase tracking-wider text-navy/55"
              }
            >
              Full name *
            </span>
            <input
              className={fieldClass}
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span
              className={
                compact
                  ? "mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/55"
                  : "mb-1 block text-[10px] font-bold uppercase tracking-wider text-navy/55"
              }
            >
              Phone number *
            </span>
            <input
              className={fieldClass}
              name="phone"
              required
              type="tel"
              autoComplete="tel"
              placeholder="+971 521263146"
            />
          </label>
          <label className={compact ? "block" : "block md:col-span-2"}>
            <span
              className={
                compact
                  ? "mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/55"
                  : "mb-1 block text-[10px] font-bold uppercase tracking-wider text-navy/55"
              }
            >
              Email address *
            </span>
            <input
              className={fieldClass}
              name="email"
              required
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>
          {!compact && (
            <label className="block md:col-span-2">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-navy/55">
                Tell us about your project
              </span>
              <textarea
                className={`${fieldClass} min-h-24 resize-y`}
                name="message"
                rows={3}
                placeholder="What would you like to transform?"
              />
            </label>
          )}
        </div>
      </section>

      <section className={compact ? "space-y-7 p-6 sm:p-8" : "space-y-9"}>
        <div>
          <div
            className={compact ? "mb-4" : "mb-6 flex items-end gap-3 border-b border-navy/10 pb-4"}
          >
            {!compact && <span className="text-lg font-bold text-orange">02</span>}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange">
                Your project
              </p>
              <h3
                className={
                  compact ? "mt-1 text-lg font-bold text-navy" : "mt-1 text-2xl font-bold text-navy"
                }
              >
                What can we help with?
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {wrapOptions.map((option) => {
              const selected = selectedServices.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleService(option)}
                  className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-xs font-bold transition-colors ${selected ? "border-navy bg-navy text-white" : "border-navy/15 text-navy hover:border-orange hover:text-orange"}`}
                >
                  {selected && <Check className="h-3.5 w-3.5" />}
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div
            className={compact ? "mb-4" : "mb-6 flex items-end gap-3 border-b border-navy/10 pb-4"}
          >
            {!compact && <span className="text-lg font-bold text-orange">03</span>}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange">
                Preferred contact
              </p>
              <h3
                className={
                  compact ? "mt-1 text-lg font-bold text-navy" : "mt-1 text-2xl font-bold text-navy"
                }
              >
                How would you like to be contacted?
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "WhatsApp", Icon: MessageCircle },
              { label: "Phone call", Icon: PhoneCall },
            ].map(({ label, Icon }) => {
              const active = preferredContact === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setPreferredContact(label)}
                  className={`flex items-center justify-center gap-2 rounded border px-4 py-3 text-sm font-bold transition-colors ${active ? "border-orange bg-orange/10 text-navy" : "border-navy/15 text-navy/65 hover:border-orange/60"}`}
                >
                  <Icon className="h-4 w-4 text-orange" />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div
            className={compact ? "mb-4" : "mb-6 flex items-end gap-3 border-b border-navy/10 pb-4"}
          >
            {!compact && <span className="text-lg font-bold text-orange">04</span>}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange">
                Optional photos
              </p>
              <h3
                className={
                  compact ? "mt-1 text-lg font-bold text-navy" : "mt-1 text-2xl font-bold text-navy"
                }
              >
                Show us the space.
              </h3>
            </div>
          </div>
          <label
            onDragEnter={() => setIsDragging(true)}
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setIsDragging(false);
              addFiles(event.dataTransfer.files);
            }}
            className={`flex cursor-pointer items-center gap-2 rounded border border-dashed px-3 py-2 w-fit transition-colors ${isDragging ? "border-orange bg-orange/10" : "border-navy/20 bg-paper/60 hover:border-orange/70"}`}
          >
            <input
              ref={fileInputRef}
              className="sr-only"
              type="file"
              name="photos"
              accept="image/jpeg,image/png,image/webp"
              multiple
              onChange={(event) => {
                if (event.target.files) addFiles(event.target.files);
                event.target.value = "";
              }}
            />
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-navy shadow-sm">
              <Upload className="h-3 w-3" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold text-navy">
                Choose photos or drop them here
              </span>
              <span className="block text-[10px] text-navy/50">
                JPG, PNG or WebP · up to {MAX_FILES} photos, 5 MB each
              </span>
            </span>
          </label>
          {files.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Selected photos">
              {files.map((file, index) => (
                <li
                  key={`${file.name}-${index}`}
                  className="inline-flex max-w-full items-center gap-2 rounded-md bg-navy/5 py-1.5 pl-3 pr-1.5 text-xs text-navy"
                >
                  <span className="max-w-36 truncate">{file.name}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setFiles((current) => current.filter((_, fileIndex) => fileIndex !== index))
                    }
                    className="rounded-md p-1 hover:bg-white"
                    aria-label={`Remove ${file.name}`}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {error && (
          <p
            role="alert"
            className="rounded bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#b47936] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
          {isSubmitting ? "Sending your request…" : "Request your proposal"}
        </button>
      </section>
    </form>
  );
}
