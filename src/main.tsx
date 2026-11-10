import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Police Inter hébergée avec le site (aucun appel aux serveurs de Google).
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
