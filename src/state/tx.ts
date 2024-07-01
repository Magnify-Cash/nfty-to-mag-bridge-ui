import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ActiveTxStore {
  hash?: string;
  setHash: (hash: string) => void;
}

export const useActiveTxStore = create<ActiveTxStore>()(
  immer((set) => ({
    setHash: (hash) =>
      set((state) => {
        state.hash = hash;
      }),
  })),
);
