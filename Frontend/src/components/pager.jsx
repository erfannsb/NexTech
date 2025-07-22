import { lazy, Suspense } from "react";
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

const pages = {
  Explore: ExplorePage,
  Product: ProductPage,
  Test: Test,
  "Wish List": WishList,
  Order: Order,
  Settings: Settings,
  Help: Help,
};

export default function Pager() {
  const activePage = useUIStore((state) => state.currentUserPage);
  const isLeftSidebarOpen = useUIStore((state) => state.leftSidebarOpen);
  const isRightSidebarOpen = useUIStore((state) => state.rightSidebarOpen);
  const bothSideBarClosed = !isLeftSidebarOpen && !isRightSidebarOpen;
  const isChatOpen = useUIStore((state) => state.isChatOpen);
  const ActivePage = pages[activePage] ?? (() => <div>Invalid page</div>);

  return (
    <div
      className={` ${isLeftSidebarOpen ? "col-start-2 " : "col-start-1"} ${
        isRightSidebarOpen ? "col-end-3" : "col-end-4"
      } row-start-2 row-end-3 p-4 overflow-y-auto
      ${bothSideBarClosed ? "w-full px-[10%]" : ""}
      `}
    >
      <GlassCard
        children={<Chat />}
        className={`fixed bottom-1 right-3 ${isChatOpen ? "block" : "hidden"}`}
      />
      <Suspense fallback={<Loading />}>
        <ActivePage />
      </Suspense>
    </div>
  );
}
