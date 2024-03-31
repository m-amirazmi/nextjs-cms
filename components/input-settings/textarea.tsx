import { SectionSchemaSetting } from "@/lib/types";
import { Textarea } from "../ui/textarea";

export default function TextArea({
  id,
  label,
  placeholder,
  defaultValue,
  smallnote,
}: SectionSchemaSetting) {
  return (
    <div>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <Textarea
        name={id}
        placeholder={placeholder}
        defaultValue={defaultValue as string}
      />
      <span className="text-xs">{smallnote}</span>
    </div>
  );
}
