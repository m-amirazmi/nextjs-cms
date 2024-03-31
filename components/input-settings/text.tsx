import { SectionSchemaSetting } from "@/lib/types";
import { Input } from "../ui/input";

export default function Text({
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
      <Input
        name={id}
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue as string}
      />
      <span className="text-xs">{smallnote}</span>
    </div>
  );
}
