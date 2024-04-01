"use client";

import { setContent } from "@/actions/content.action";
import { Button } from "../ui/button";
import { useEditorStore } from "@/store/editor-store";

const list = [
  {
    name: "hero",
    title: "Hero section",
  },
  {
    name: "titledescription",
    title: "Title and description",
  },
];

export interface SectionsDropdownProps {
  handleCloseDropdown: () => void;
}

export default function SectionsDropdown({
  handleCloseDropdown,
}: SectionsDropdownProps) {
  const addNewSection = useEditorStore((state) => state.addNewSection);

  const handleSetContent = (name: string) => {
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("page", "homepage");
    // await setContent(formData);
    addNewSection(name);
    handleCloseDropdown();
  };

  return (
    <div className="bg-background ml-2 w-60 absolute left-full top-0 rounded-md p-2 shadow border">
      <ul>
        {list.map((i) => (
          <li key={i.name}>
            <Button
              variant="ghost"
              size="sm"
              className="w-full items-center flex justify-start"
              onClick={() => handleSetContent(i.name)}
            >
              {i.title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
