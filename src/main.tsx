import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./Components/ComponentsPage/LandingPage/LandingPage";
import CardDetails from "./Components/ComponentsPage/CardDetails/CardDetails";
import WatchListDrawer from "./Components/ComponentsElement/WatchList";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage />
    <CardDetails />
  </StrictMode>
);
