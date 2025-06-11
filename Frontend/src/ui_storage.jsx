import { create } from "zustand";

const useUIStore = create((set) => ({
  currentUserPage: "ExplorePage",
  setCurrentUserPage: (page) => set({ currentUserPage: page }),
}));

export default useUIStore;
