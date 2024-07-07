import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "@pages/main";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
);
