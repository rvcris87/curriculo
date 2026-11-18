import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { CaixaCerto } from "./pages/demos/CaixaCerto";
import { CasaMiga } from "./pages/demos/CasaMiga";
import { DomBarbearia } from "./pages/demos/DomBarbearia";
import { LumiEstetica } from "./pages/demos/LumiEstetica";
import { OdontoMare } from "./pages/demos/OdontoMare";
import { PulsoAcademia } from "./pages/demos/PulsoAcademia";

const pathname = window.location.pathname.replace(/\/+$/, "");

const demos: Record<string, () => React.JSX.Element> = {
  "/demos/lumi-estetica": LumiEstetica,
  "/demos/casa-miga": CasaMiga,
  "/demos/odonto-mare": OdontoMare,
  "/demos/caixa-certo": CaixaCerto,
  "/demos/dom-barbearia": DomBarbearia,
  "/demos/pulso-academia": PulsoAcademia,
};

const Page = demos[pathname] ?? App;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
