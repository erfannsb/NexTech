import { create } from "zustand";

const useUIStore = create((set) => ({
  currentUserPage: "Explore",
  setCurrentUserPage: (page) => set({ currentUserPage: page }),
  leftSidebarOpen: true,
  setLeftSidebarOpen: (open) => set({ leftSidebarOpen: open }),
  rightSidebarOpen: true,
  setRightSidebarOpen: (open) => set({ rightSidebarOpen: open }),
}));

export default useUIStore;
