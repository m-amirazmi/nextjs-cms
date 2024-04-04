import { ContentState } from "@/types/store.types";
import { create } from "zustand";

export const useContentStore = create<ContentState>()((set) => ({
  sections: {},
  orders: [],
  setInitialSections({ sections, orders }) {
    return set(() => ({
      sections,
      orders,
    }));
  },
}));
