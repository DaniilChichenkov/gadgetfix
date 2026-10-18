import { create } from "zustand";

const useDrawerOpenStore = create<{
  isOpen: boolean;
  setDrawerState: (state: boolean) => void;
}>((set) => ({
  isOpen: false,

  setDrawerState: (newState: boolean) => set(() => ({ isOpen: newState })),
}));

export default useDrawerOpenStore;
