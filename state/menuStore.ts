"use client";

import { create } from "zustand";

interface MobileMenu {
    isOpen: boolean;
    toggleMenu: () => void;
}

const useStore = create<MobileMenu>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useStore;
