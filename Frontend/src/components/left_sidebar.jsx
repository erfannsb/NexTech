import useUIStore from "../ui_storage";
import { useState } from "react";
import { Bookmark, LifeBuoy, Settings, Sparkles, X } from "lucide-react";
export default function LeftSidebar() {
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
      } flex flex-col justify-between items-start py-4 px-4 border-r border-[#26262B] sidebar col-start-1 col-end-2 row-start-2 row-end-3 `}
    >
      {/* Menu */}
      <ul className="flex flex-col text-lg">
        {
          // Pages
          ["Explore", "Product", "Help", "Settings"].map((page, i) => (
            <li
              key={i}
              onClick={() => handleItemClick(page)}
              className={`text-[#545356] px-3 py-2 flex items-center mb-2 rounded-md text-md ${
                currentPage === page
                  ? "border-l-3 border-[#A3B5F9] bg-[linear-gradient(90deg,_rgba(80,104,198,0.63)_0%,_rgba(127,144,208,0)_60.58%)] text-[#A3B5F9] font-medium  "
                  : "hover:text-white/50"
              }`}
            >
              {i === 0 ? (
                <Sparkles className="mr-2" size={20} />
              ) : i === 1 ? (
                <Bookmark className="mr-2" size={20} />
              ) : i === 2 ? (
                <LifeBuoy className="mr-2" size={20} />
              ) : (
                <Settings className="mr-2" size={20} />
              )}{" "}
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
