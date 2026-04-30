import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/reset.css";
import "./css/root.css";
import "./css/tokens.css";
import "./css/components.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
