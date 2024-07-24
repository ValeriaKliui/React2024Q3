import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "@pages/ErrorPage";
import { DetailPage } from "@pages/DetailPage";
import { MainPage } from "@pages/MainPage";
import { GlobalStyles } from "./globalStyles";
import { ThemeProvider } from "@components/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "@store/store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [{ path: "detail/:name/", element: <DetailPage /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <GlobalStyles />
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);
