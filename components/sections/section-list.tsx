import { ChevronRight, GripVertical } from "lucide-react";
import { Button } from "../ui/button";
import { heroSchema } from "./hero";
import { titleDescriptionSchema } from "./title-description";
import { SectionSchemaWithId } from "@/lib/types";

const sectionListSchema: { [key: string]: any } = {
  hero: heroSchema,
  titledescription: titleDescriptionSchema,
};

export default function SectionList({
  sections,
  handleSelectedSection,
}: {
  sections: any[];
  handleSelectedSection: (section: SectionSchemaWithId) => void;
}) {
  return sections.map((i) => {
    const getSectionName = i.split("__")[0];
    const schema = sectionListSchema[getSectionName];
    return (
      <Button
        id={i}
        variant="outline"
        key={i}
        className="p-2 w-full flex justify-start"
        onClick={() => {
          const section = { ...schema, id: i };
          handleSelectedSection(section);
        }}
      >
        <GripVertical size={16} />
        <span className="ml-4">{schema.name}</span>
        {schema.settings && schema.settings.length > 0 && (
          <div className="ml-auto">
            <ChevronRight size={16} />
          </div>
        )}
      </Button>
    );
  });
}
