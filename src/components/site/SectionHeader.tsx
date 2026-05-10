import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg">{description}</p>
      )}
    </div>
  );
}
