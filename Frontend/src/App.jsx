import "./App.css";
import LeftSidebar from "./components/left_sidebar";
import Header from "./components/header";
import Pager from "./components/pager";
import RightSidebar from "./components/right_sidebar";

function App() {
  return (
    <div className="bg-[var(--bg-primary)] h-screen w-lvw grid grid-cols-[minmax(200px,20vw)_minmax(0,1fr)_minmax(200px,25vw)] grid-rows-[60px_calc(100vh-60px)]">
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <Pager />
    </div>
  );
}

export default App;
