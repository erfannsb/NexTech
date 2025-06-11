import useUIStore from "../ui_storage";

export default function LeftSidebar() {
  const setCurrentPage = useUIStore((state) => state.setCurrentUserPage);

  const handleItemClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="sidebar col-start-1 col-end-2 row-start-2 row-end-3 bg-red-400">
      <ul>
        <li onClick={() => handleItemClick("ExplorePage")}>Explore</li>
        <li onClick={() => handleItemClick("ProductPage")}>Product</li>
        <li onClick={() => handleItemClick("page3")}>Item 3</li>
      </ul>
    </div>
  );
}
