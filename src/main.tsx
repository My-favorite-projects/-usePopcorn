import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./Components/ComponentsPage/LandingPage/LandingPage";
import "./main.css";
import CardDetails from "./Components/ComponentsPage/CardDetails/CardDetails";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage />
    {/* <CardDetails /> */}
  </StrictMode>
);
