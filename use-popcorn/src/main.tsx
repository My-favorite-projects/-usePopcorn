import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./assets/ComponentsPage/LandingPage/LandingPage";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
