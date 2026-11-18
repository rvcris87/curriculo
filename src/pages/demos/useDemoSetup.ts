import { useEffect } from "react";

/** Carrega as fontes do site de demonstração e ajusta título/fundo da página. */
export function useDemoSetup(
  title: string,
  fontsHref: string,
  background: string,
) {
  useEffect(() => {
    document.title = title;
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = background;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontsHref;
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, [title, fontsHref, background]);
}
