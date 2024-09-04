import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.css";
import ContextApi from "./API/context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </StrictMode>
);
