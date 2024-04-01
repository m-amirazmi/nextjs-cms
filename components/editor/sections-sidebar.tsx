"use client";

import { SectionSchemaWithId } from "@/lib/types";
import { useEditorLayoutStore, useEditorStore } from "@/store/editor-store";
import { ChangeEvent, FormEvent, useState } from "react";
import SectionList from "../sections/section-list";
import AddSection from "./add-section";
import SectionsSchemabar from "./sections-schemabar";
import { cn } from "@/lib/utils";

export default function SectionsSidebar() {
  const { sections, content, updateSection } = useEditorStore((state) => state);
  const { setSectionSchemaOpen, sectionSchemaOpen } = useEditorLayoutStore(
    (state) => state
  );

  const [selectedSection, setSelectedSection] =
    useState<SectionSchemaWithId | null>(null);

  const handleSelectedSection = (section: SectionSchemaWithId) => {
    setSelectedSection(section);
    section.settings.map((i) => {
      updateSection({
        name: i.id,
        sectionId: section.id,
        value: i.defaultValue,
      });
    });
    setSectionSchemaOpen(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSectionSchemaOpen(false);
  };

  return (
    <div
      className={cn(
        "flex flex-grow-0 flex-shrink-0 h-[calc(100vh-64px)] sticky top-16 bg-background border-r z-10",
        !sectionSchemaOpen ? "basis-[300px]" : "basis-[600px]"
      )}
    >
      <div className="h-full w-[300px] p-4 flex flex-col gap-y-2">
        <SectionList
          sections={sections}
          handleSelectedSection={handleSelectedSection}
        />
        <AddSection />
      </div>
      {sectionSchemaOpen &&
        selectedSection &&
        selectedSection.settings &&
        selectedSection.settings.length > 0 && (
          <SectionsSchemabar
            handleSubmit={handleSubmit}
            schema={selectedSection.settings}
            sectionId={selectedSection.id}
          />
        )}
    </div>
  );
}
