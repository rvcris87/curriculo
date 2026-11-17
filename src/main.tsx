import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BarbeariaModelo } from "./pages/modelos/BarbeariaModelo";

const pathname = window.location.pathname.replace(/\/+$/, "");

function resolvePage() {
  if (pathname === "/modelos/barbearia") return <BarbeariaModelo />;
  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{resolvePage()}</StrictMode>,
);
