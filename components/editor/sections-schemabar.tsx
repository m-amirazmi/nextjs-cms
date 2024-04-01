import { SectionSchemaSetting } from "@/lib/types";
import { FormEvent } from "react";
import InputSettings from "../input-settings";
import { Button } from "../ui/button";

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
  return (
    <div className="w-[300px] h-full bg-background border-r border-l p-4">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-y-2">
          <InputSettings sectionId={sectionId} settings={schema} />
        </div>
        <Button size="sm" className="w-full mt-6">
          Save
        </Button>
      </form>
    </div>
  );
}
