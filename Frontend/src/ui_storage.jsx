import { create } from "zustand";

const useUIStore = create((set) => ({
  leftSidebarOpen: false,
  setLeftSidebarOpen: (open) => set({ leftSidebarOpen: open }),
  rightSidebarOpen: false,
  setRightSidebarOpen: (open) => set({ rightSidebarOpen: open }),
  isChatOpen: false,
  setChatOpen: (open) => set({ isChatOpen: open }),
}));

export default useUIStore;
