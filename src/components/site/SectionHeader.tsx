import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  animated = true,
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  animated?: boolean;
  /** "dark" = seção roxa (texto claro) · "light" = seção cinza (texto roxo) */
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <div
      className={`${animated ? "section-reveal " : ""}${
        align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"
      }`}
    >
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest ${
            align === "center" ? "justify-center" : ""
          } ${light ? "text-background" : "text-brand"}`}
        >
          <span
            className={`h-2 w-2 rounded-full ${light ? "bg-background" : "bg-brand"}`}
          />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={`font-display text-5xl uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl ${
          light ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed ${
            light ? "text-ink/75" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
