"use client";

import { SectionSchemaWithId } from "@/lib/types";
import { useEditorStore } from "@/store/editor-store";
import { FormEvent, useState } from "react";
import SectionList from "../sections/section-list";
import AddSection from "./add-section";
import SectionsSchemabar from "./sections-schemabar";

export default function SectionsSidebar() {
  const sections = useEditorStore((state) => state.sections);

  const [selectedSection, setSelectedSection] =
    useState<SectionSchemaWithId | null>(null);

  const handleSelectedSection = (section: SectionSchemaWithId) => {
    setSelectedSection(section);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSelectedSection(null);
  };

  return (
    <div className="basis-[300px] flex-grow-0 flex-shrink-0 h-[calc(100vh-64px)] sticky top-16 bg-background border-r z-10">
      <div className="h-full w-full p-4 flex flex-col gap-y-2">
        <SectionList
          sections={sections}
          handleSelectedSection={handleSelectedSection}
        />
        <AddSection />
      </div>
      {selectedSection &&
        selectedSection.settings &&
        selectedSection.settings.length > 0 && (
          <SectionsSchemabar
            handleSubmit={handleSubmit}
            schema={selectedSection.settings}
          />
        )}
    </div>
  );
}
