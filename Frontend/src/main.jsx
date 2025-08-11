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
    path: "/product/:id",
    Component: App,
  },
  { path: "/help", Component: App },
  { path: "/settings", Component: App },
  { path: "/wishlist", Component: App },
  { path: "/order", Component: App },
  {
    path: "/admin/dashboard",
    Component: AdminApp,
  },
  { path: "/admin/dashboard/home", Component: AdminApp },
  { path: "/admin/dashboard/inventory", Component: AdminApp },
  { path: "/admin/dashboard/orders", Component: AdminApp },
  { path: "/admin/dashboard/discounts", Component: AdminApp },
  { path: "/admin/dashboard/finance", Component: AdminApp },
  { path: "/admin/dashboard/settings", Component: AdminApp },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
