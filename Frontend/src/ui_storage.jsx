import { create } from "zustand";

const useUIStore = create((set) => ({
  leftSidebarOpen: false,
  setLeftSidebarOpen: (open) => set({ leftSidebarOpen: open }),
  rightSidebarOpen: false,
  setRightSidebarOpen: (open) => set({ rightSidebarOpen: open }),
  isChatOpen: false,
  setChatOpen: (open) => set({ isChatOpen: open }),
  active_user: null,
  setActiveUser: (user) => set({ active_user: user }),
}));

export default useUIStore;
