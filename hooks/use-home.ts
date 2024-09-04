import { create } from "zustand";

interface HomeType {
  nav: boolean;
  openNav(): void;
  closeNav(): void;
}

export const useHome = create<HomeType>((set) => ({
  nav: false,
  openNav: () => set({ nav: true }),
  closeNav: () => set({ nav: false }),
}));
