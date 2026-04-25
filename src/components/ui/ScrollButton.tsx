"use client";

import { scrollToSection } from "@/lib/scroll";

type ScrollButtonVariant = "primary" | "secondary";

type ScrollButtonProps = {
  href: `#${string}`;
  children: React.ReactNode;
  variant?: ScrollButtonVariant;
  className?: string;
  mobileOffset?: number;
  desktopOffset?: number;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.985]";

const variantClasses: Record<ScrollButtonVariant, string> = {
  primary:
    "group relative overflow-hidden border border-orange-300/20 bg-gradient-to-b from-[#FB923C] to-[#EA580C] text-white shadow-[0_10px_30px_rgba(249,115,22,0.22)] hover:shadow-[0_16px_36px_rgba(249,115,22,0.28)]",
  secondary:
    "border border-white/15 bg-white/[0.06] text-slate-100 backdrop-blur-md hover:border-white/25 hover:bg-white/[0.1] hover:shadow-[0_10px_30px_rgba(2,6,23,0.35)]",
};

export function ScrollButton({
  href,
  children,
  variant = "primary",
  className = "",
  mobileOffset,
  desktopOffset,
}: ScrollButtonProps) {
  const id = href.replace("#", "");

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(id, { mobileOffset, desktopOffset });
      }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {variant === "primary" && (
        <>
          <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.16)_45%,transparent_70%)] transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
          <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
        </>
      )}

      <span className="relative z-10">{children}</span>
    </a>
  );
}
