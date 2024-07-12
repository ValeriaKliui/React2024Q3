import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "@pages/MainPage";
import { ErrorBoundary } from "@components/ErrorBoundary";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "@pages/ErrorPage";
import { DetailPage } from "@pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [{ path: "detail/:name", element: <DetailPage /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
