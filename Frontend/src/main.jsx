import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AdminApp from "./AdminApp.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    // loader: loadRootData,
  },
  {
    path: "/admin/dashboard",
    Component: AdminApp,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
