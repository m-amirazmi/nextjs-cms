import { useEditorStore } from "@/store/editor-store";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ChangeEvent } from "react";

interface SelectProps {
  id: string;
  label: string;
  placeholder?: string;
  defaultValue?: string | number | boolean;
  smallnote?: string;
  sectionId: string;
  options: [{ label: string; value: string }];
}

export default function SelectInput({
  id,
  label,
  options,
  sectionId,
  defaultValue,
  placeholder,
  smallnote,
}: SelectProps) {
  const updateInput = useEditorStore((state) => state.updateSection);

  const handleChange = (e: string) => {
    updateInput({
      name: id,
      sectionId,
      value: e,
    });
  };

  return (
    <div>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((i) => (
              <SelectItem key={i.value} value={i.value}>
                {i.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <span className="text-xs">{smallnote}</span>
    </div>
  );
}
