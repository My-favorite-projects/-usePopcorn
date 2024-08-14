import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./Components/ComponentsPage/LandingPage/LandingPage";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
