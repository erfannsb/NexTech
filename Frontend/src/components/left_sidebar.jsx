import useUIStore from "../ui_storage";
import { Bookmark, LifeBuoy, Settings, Sparkles } from "lucide-react";
export default function LeftSidebar() {
  const setCurrentPage = useUIStore((state) => state.setCurrentUserPage);

  const handleItemClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="sidebar col-start-1 col-end-2 row-start-2 row-end-3 ">
      <ul className="flex flex-col py-4 px-6 text-lg">
        <li
          onClick={() => handleItemClick("ExplorePage")}
          className="flex mb-5"
        >
          <Sparkles className="mr-2" /> Explore
        </li>
        <li
          onClick={() => handleItemClick("ProductPage")}
          className="flex mb-5"
        >
          <Bookmark className="mr-2" /> Wish List
        </li>
        <li onClick={() => handleItemClick("page3")} className="flex mb-5">
          <LifeBuoy className="mr-2" /> Help
        </li>
        <li onClick={() => handleItemClick("page4")} className="flex">
          <Settings className="mr-2" /> Settings
        </li>
      </ul>
    </div>
  );
}
