import useUIStore from "../ui_storage";
import { useState } from "react";
import {
  Bookmark,
  Box,
  Home,
  LifeBuoy,
  Settings,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
export default function AdminLeftSidebar() {
  const currentPage = useUIStore((state) => state.currentUserPage);
  const setCurrentPage = useUIStore((state) => state.setCurrentUserPage);
  const leftSidebarOpen = useUIStore((state) => state.leftSidebarOpen);

  const [showAd, setShowAd] = useState(true);
  const handleItemClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      className={`${
        leftSidebarOpen ? "block" : "hidden"
      } bg-[#0d0d0d] flex flex-col md:justify-between items-start py-4 px-4 md:border-r border-[#26262B] sidebar md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 max-md:absolute max-md:top-[60px] z-100 max-md:w-[100vw] max-md:border-b`}
    >
      {/* Menu */}
      <ul className="flex flex-col text-lg">
        {
          // Pages
          [
            "Home",
            "Product Management",
            "Order Management",
            "Finance",
            "Settings",
          ].map((page, i) => (
            <li
              key={i}
              onClick={() => handleItemClick(`Admin_${page}`)}
              className={`text-[#545356] px-3 py-2 flex items-center mb-2 rounded-md text-[15px] ${
                currentPage === `Admin_${page}`
                  ? "border-l-3 border-[#A3B5F9] bg-[linear-gradient(90deg,_rgba(80,104,198,0.63)_0%,_rgba(127,144,208,0)_60.58%)] text-[#A3B5F9] font-medium  "
                  : "hover:text-white/50"
              }`}
            >
              {i === 0 ? (
                <Home className="mr-2" size={20} />
              ) : i === 1 ? (
                <ShoppingBag className="mr-2" size={20} />
              ) : i === 2 ? (
                <LifeBuoy className="mr-2" size={20} />
              ) : i == 3 ? (
                <Settings className="mr-2" size={20} />
              ) : i == 4 ? (
                <Bookmark className="mr-2" size={20} />
              ) : i == 5 ? (
                <Box className="mr-2" size={20} />
              ) : (
                <></>
              )}
              {page}
            </li>
          ))
        }
      </ul>

      {/* Advertisement */}
      <div
        className={`card-variant-1 rounded-md px-3 py-2 ${
          showAd ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between ">
          <h3 className="font-bold">Advertisement</h3>
          <button className="cursor-pointer" onClick={() => setShowAd(false)}>
            <X size={15} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1 mb-5">
          Lorem ipsum dolor sit amet komm tanzen ich will nicht komm
          spatzirieren ich will nicht stoppen sie jetzt
        </p>

        <button
          className="text-md text-gray-500 hover:text-gray-300 cursor-pointer"
          onClick={() => setShowAd(false)}
        >
          Dismiss
        </button>
        <button className="text-md font-medium text-[#6274f7] ml-3 cursor-pointer">
          Explore
        </button>
      </div>
    </div>
  );
}
