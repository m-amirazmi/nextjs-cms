import { saveContent } from "@/actions/content.action";
import { SectionSchemaSetting } from "@/lib/types";
import { FormEvent } from "react";
import InputSettings from "../input-settings";
import { Button } from "../ui/button";
import { useEditorStore } from "@/store/editor-store";
import { usePathname } from "next/navigation";

interface SectionsSchemabarProps {
  schema: SectionSchemaSetting[];
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  sectionId: string;
}

export default function SectionsSchemabar({
  handleSubmit,
  schema,
  sectionId,
}: SectionsSchemabarProps) {
  const { content, sections } = useEditorStore((state) => state);

  const pathname = usePathname();

  const handleSave = () => {
    const mainPage = pathname.split("/editor/")[1];
    const saveObj = { content, sections };
    const saveObjJson = JSON.stringify(saveObj);
    const formData = new FormData();
    formData.set("data", saveObjJson);
    formData.set("page", mainPage);
    saveContent(formData);
  };

  return (
    <div className="w-[300px] h-full bg-background border-r border-l p-4">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-y-2">
          <InputSettings sectionId={sectionId} settings={schema} />
        </div>
        <Button size="sm" className="w-full mt-6" onClick={handleSave}>
          Save
        </Button>
      </form>
    </div>
  );
}
