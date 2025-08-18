import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUIStore = create(
  persist(
    (set) => ({
      leftSidebarOpen: false,
      setLeftSidebarOpen: (open) => set({ leftSidebarOpen: open }),

      rightSidebarOpen: false,
      setRightSidebarOpen: (open) => set({ rightSidebarOpen: open }),

      isChatOpen: false,
      setChatOpen: (open) => set({ isChatOpen: open }),

      active_user: null,
      setActiveUser: (user) => set({ active_user: user }),

      active_shop: null,
      setActiveShop: (shop) => set({ active_shop: shop }),

      shop_orders: null,
      setShopOrders: (orders) => set({ shop_orders: orders }),

      shop_products: null,
      setShopProducts: (products) => set({ shop_products: products }),
    }),
    {
      name: "ui-storage", // key in localStorage
      partialize: (state) => ({
        // only persist these fields 👇
        active_user: state.active_user,
        active_shop: state.active_shop,
        shop_orders: state.shop_orders,
        shop_products: state.shop_products,
      }),
    }
  )
);

export default useUIStore;
