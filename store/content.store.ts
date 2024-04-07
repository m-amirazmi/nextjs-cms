import { ContentState } from "@/types/store.types";
import { create } from "zustand";

export const useContentStore = create<ContentState>()((set) => ({
  sections: {},
  orders: [],
  path: "",
  title: "",
  setInitialSections({ sections, orders }) {
    return set(() => ({
      sections,
      orders,
    }));
  },
}));
