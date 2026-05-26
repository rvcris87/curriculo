import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  animated = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  animated?: boolean;
}) {
  return (
    <div
      className={`${animated ? "section-reveal " : ""}${
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      {eyebrow && (
        <div className="font-mono text-[10px] tracking-widest uppercase text-brand font-semibold flex items-center justify-start gap-2 mb-3">
          <span className="text-white/30">//</span>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl font-display leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-sans max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
