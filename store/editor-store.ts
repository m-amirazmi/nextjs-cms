import { EditorStore, SectionSchema } from "@/lib/types";
import { create } from "zustand";

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

interface EditorLayoutStore {
  sectionSchemaOpen: boolean;
  setSectionSchemaOpen: (condition: boolean) => void;
}

export const useEditorLayoutStore = create<EditorLayoutStore>()((set) => ({
  sectionSchemaOpen: false,
  setSectionSchemaOpen: (condition) => {
    return set((state) => ({ sectionSchemaOpen: condition }));
  },
}));
