import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

type LogoProps = {
  className?: string;
  size?: "default" | "mobile" | "header" | "footer";
};

const sizeClasses = {
  default: "h-24 md:h-28 w-auto",
  mobile: "w-[180px] md:w-[220px] h-auto object-contain",
  header: "w-[240px] lg:w-[280px] h-auto object-contain",
  footer: "w-[320px] md:w-[400px] lg:w-[460px] h-auto object-contain object-left",
};

export function Logo({ className, size = "default" }: LogoProps) {
  return (
    <img
      src={logoImg}
      alt="PrimeWrap — Wrap • Refine • Transform"
      width={320}
      height={96}
      className={cn("object-contain", sizeClasses[size], className)}
    />
  );
}
