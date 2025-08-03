import "./App.css";
import Header from "./components/header";
import Pager from "./components/pager";
import AdminLeftSidebar from "./components/adminLeftSideBar";
import useUIStore from "./ui_storage";

export default function AdminApp() {
  const setCurrentPage = useUIStore((state) => state.setCurrentUserPage);

  setCurrentPage("Admin_Home");

  return (
    <div className="bg-[var(--bg-primary)] h-screen w-lvw grid grid-cols-[minmax(200px,20vw)_minmax(0,1fr)_minmax(200px,25vw)] grid-rows-[60px_calc(100vh-60px)]">
      <Header />
      <AdminLeftSidebar />
      <Pager />
    </div>
  );
}
