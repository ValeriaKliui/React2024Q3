import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "@pages/main";
import { ErrorBoundary } from "@components/ErrorBoundary";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="wrapper">
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </div>
  </StrictMode >,
);
