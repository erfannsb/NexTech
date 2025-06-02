import { create } from 'zustand'

const useAppStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))

export default useAppStore