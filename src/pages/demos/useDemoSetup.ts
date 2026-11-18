import { useEffect } from "react";

/** Ajusta título e fundo da página do site de demonstração. As fontes são importadas em cada demo. */
export function useDemoSetup(title: string, background: string) {
  useEffect(() => {
    document.title = title;
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = background;
  }, [title, background]);
}
