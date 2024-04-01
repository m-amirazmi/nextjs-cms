import { SectionSchema } from "@/lib/types";
import { create } from "zustand";

export interface EditorStore {
  sections: string[];
  content: {
    [key: string]: {
      [key: string]: string | number | boolean | undefined;
    };
  };
  addNewSection: (sectionName: string) => void;
  updateSection: ({
    name,
    value,
    sectionId,
  }: {
    name: string;
    value?: string | number | boolean;
    sectionId: string;
  }) => any;
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
  updateSection: ({ name, sectionId, value }) => {
    return set((state) => {
      const copyContent = { ...state.content };
      copyContent[sectionId][name] = value;
      return { content: copyContent };
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
