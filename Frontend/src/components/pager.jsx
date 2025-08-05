import { lazy, Suspense, useEffect, useState } from "react";
import useUIStore from "../ui_storage";
import Loading from "../pages/loading.jsx";
import { GlassCard } from "./cards.jsx";
import Chat from "./chat.jsx";

// Lazy load each page
const ExplorePage = lazy(() => import("../pages/explore"));
const ProductPage = lazy(() => import("../pages/product"));
const Test = lazy(() => import("../pages/loading.jsx"));
const WishList = lazy(() => import("../pages/wishlist.jsx"));
const Order = lazy(() => import("../pages/order.jsx"));
const Settings = lazy(() => import("../pages/settings.jsx"));
const Help = lazy(() => import("../pages/help.jsx"));
const AdminHome = lazy(() => import("../admin_pages/home.jsx"));
const ProductMangement = lazy(() => import("../admin_pages/productM.jsx"));
const Finance = lazy(() => import("../admin_pages/finanace.jsx"));
const OrderMangement = lazy(() => import("../admin_pages/orderM.jsx"));
const Discounts = lazy(() => import("../admin_pages/discount.jsx"));

const pages = {
  Explore: ExplorePage,
  Product: ProductPage,
  Test: Test,
  "Wish List": WishList,
  Order: Order,
  Settings: Settings,
  Help: Help,
  Admin_Home: AdminHome,
  "Admin_Inventory Management": ProductMangement,
  Admin_Finance: Finance,
  "Admin_Order Management": OrderMangement,
  Admin_Discounts: Discounts,
};

export default function Pager() {
  const activePage = useUIStore((state) => state.currentUserPage);
  const isLeftSidebarOpen = useUIStore((state) => state.leftSidebarOpen);
  const isRightSidebarOpen = useUIStore((state) => state.rightSidebarOpen);
  const bothSideBarClosed = !isLeftSidebarOpen && !isRightSidebarOpen;
  const isChatOpen = useUIStore((state) => state.isChatOpen);
  const ActivePage = pages[activePage] ?? (() => <div>Invalid page</div>);

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
      } row-start-2 row-end-3 p-4 overflow-y-auto
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
