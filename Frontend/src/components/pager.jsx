import { lazy, Suspense, useEffect, useState } from "react";
import useUIStore from "../ui_storage";
import Loading from "../pages/loading.jsx";
import { GlassCard } from "./cards.jsx";
import Chat from "./chat.jsx";
import { useLocation } from "react-router";

// Lazy load each page
const ExplorePage = lazy(() => import("../pages/explore"));
const ProductPage = lazy(() => import("../pages/product"));
const Test = lazy(() => import("../pages/loading.jsx"));
const WishList = lazy(() => import("../pages/wishlist.jsx"));
const Order = lazy(() => import("../pages/order.jsx"));
const Settings = lazy(() => import("../pages/settings.jsx"));
const Help = lazy(() => import("../pages/help.jsx"));
const Form = lazy(() => import("../pages/form.jsx"));
const AdminHome = lazy(() => import("../admin_pages/home.jsx"));
const ProductMangement = lazy(() => import("../admin_pages/productM.jsx"));
const Finance = lazy(() => import("../admin_pages/finanace.jsx"));
const OrderMangement = lazy(() => import("../admin_pages/orderM.jsx"));
const Discounts = lazy(() => import("../admin_pages/discount.jsx"));
const AdminSettings = lazy(() => import("../admin_pages/setttings.jsx"));
const ChatSupport = lazy(() => import("../admin_pages/chat_support.jsx"));
const pagesByRoute = {
  "/": ExplorePage,
  "/help": Help,
  "/settings": Settings,
  "/wishlist": WishList,
  "/order": Order,
  "/product/:id": ProductPage,
  // Admin routes
  "/admin/dashboard/home": AdminHome,
  "/admin/dashboard/inventory": ProductMangement,
  "/admin/dashboard/finance": Finance,
  "/admin/dashboard/orders": OrderMangement,
  "/admin/dashboard/discounts": Discounts,
  "/admin/dashboard/settings": AdminSettings,
};

export default function Pager() {
  const location = useLocation();
  const isLeftSidebarOpen = useUIStore((state) => state.leftSidebarOpen);
  const isRightSidebarOpen = useUIStore((state) => state.rightSidebarOpen);
  const bothSideBarClosed = !isLeftSidebarOpen && !isRightSidebarOpen;
  const isChatOpen = useUIStore((state) => state.isChatOpen);
  // Match route: exact or product/:id pattern
  const isProductRoute = location.pathname.startsWith("/product/");
  const ActivePage = isProductRoute
    ? ProductPage
    : pagesByRoute[location.pathname] ?? (() => <div>Not Found</div>);

  const [screenIsSmall, setScreenIsSmall] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setScreenIsSmall(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={` ${
        isLeftSidebarOpen && !screenIsSmall ? "col-start-2 " : "col-start-1"
      } ${
        isRightSidebarOpen ? "col-end-3" : "col-end-4"
      } row-start-2 p-4 row-end-3 overflow-y-auto
      ${bothSideBarClosed ? "w-full md:px-[10%] max-md:px-[3%]" : ""}`}
    >
      {/* Chat floating component */}
      <GlassCard
        children={<Chat />}
        className={`z-[1000] fixed bottom-1 right-3 ${
          isChatOpen ? "block" : "hidden"
        }`}
      />
      {/* Active Page component */}
      <Suspense fallback={<Loading />}>
        <ActivePage />
      </Suspense>
    </div>
  );
}
