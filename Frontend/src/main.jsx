import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AdminApp from "./AdminApp.jsx";
import Form from "./pages/form.jsx";
import ProtectedAdminRoute from "./admin_pages/admin.jsx";
import SupportChat from "./admin_pages/chat_support.jsx";

const AdminAppProtected = () => (
  <ProtectedAdminRoute>
    <AdminApp />
  </ProtectedAdminRoute>
);

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
  { path: "/form/:type", Component: Form },
  {
    path: "/admin/dashboard",
    Component: AdminApp,
  },
  { path: "/admin/dashboard/home", Component: AdminAppProtected },
  { path: "/admin/dashboard/inventory", Component: AdminAppProtected },
  { path: "/admin/dashboard/orders", Component: AdminAppProtected },
  { path: "/admin/dashboard/discounts", Component: AdminAppProtected },
  { path: "/admin/dashboard/finance", Component: AdminAppProtected },
  { path: "/admin/dashboard/settings", Component: AdminAppProtected },
  { path: "/chat", Component: SupportChat },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
