import "./App.css";
import LeftSidebar from "./components/left_sidebar";
import Header from "./components/header";
import Pager from "./components/pager";
import RightSidebar from "./components/right_sidebar";
import { MessageCircle } from "lucide-react";
import useUIStore from "./ui_storage";

function App() {
  const setChatOpen = useUIStore((state) => state.setChatOpen);
  const isChatOpen = useUIStore((state) => state.isChatOpen);

  return (
    <div className="bg-[var(--bg-primary)] h-screen w-lvw grid grid-cols-[minmax(200px,20vw)_minmax(0,1fr)_minmax(200px,25vw)] grid-rows-[60px_calc(100vh-60px)]">
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <Pager />
      {/* ChatBot */}
      <div
        onClick={() => {
          setChatOpen(true);
        }}
        className={`${
          isChatOpen ? "hidden" : "flex"
        } cursor-pointer  justify-center items-center fixed bottom-3 right-3 w-[50px] rounded-full h-[50px] bg-[var(--bg-secondary)] z-50`}
      >
        <MessageCircle />
      </div>
    </div>
  );
}

export default App;
