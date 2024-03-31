import { SectionsSchemabarProps } from "@/lib/types";
import InputSettings from "../input-settings";
import { Button } from "../ui/button";

export default function SectionsSchemabar({
  handleSubmit,
  schema,
}: SectionsSchemabarProps) {
  return (
    <div className="w-[300px] h-full bg-background border-r border-l p-4">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-y-2">
          <InputSettings settings={schema} />
        </div>
        <Button size="sm" className="w-full mt-6">
          Save
        </Button>
      </form>
    </div>
  );
}
