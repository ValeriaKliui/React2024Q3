import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "@pages/main";
import { ErrorBoundary } from "@components/ErrorBoundary";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  </StrictMode>,
);
