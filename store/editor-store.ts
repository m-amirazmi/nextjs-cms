import { SectionSchema } from "@/lib/types";
import { create } from "zustand";

interface SectionContentText {}

interface EditorStore {
  sections: string[];
  content: {
    [key: string]: {
      [key: string]: string | number | boolean | undefined;
    };
  };
  addNewSection: (sectionName: string) => void;
}

export const useEditorStore = create<EditorStore>()((set) => ({
  sections: [],
  content: {},
  addNewSection: (sectionName) => {
    return set((state) => {
      let copySections = [...state.sections];
      const findExistingSameSection = copySections.filter((i) =>
        i.includes(sectionName)
      );
      const sectionId = `${sectionName}__${findExistingSameSection.length + 1}`;
      copySections.push(sectionId);

      let copyContent = { ...state.content };
      if (copyContent[sectionId]) copyContent = copyContent;
      else copyContent[sectionId] = {};

      return { sections: copySections, content: copyContent };
    });
  },
}));
