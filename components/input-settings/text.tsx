import { useEditorStore } from "@/store/editor-store";
import { ChangeEvent } from "react";
import { Input } from "../ui/input";

interface TextProps {
  id: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  smallnote?: string;
  sectionId: string;
}

export default function Text({
  id,
  label,
  placeholder,
  defaultValue,
  smallnote,
  sectionId,
}: TextProps) {
  const updateInput = useEditorStore((state) => state.updateSection);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateInput({
      name: id,
      sectionId,
      value: e.target.value,
    });
  };

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
        onChange={handleChange}
      />
      <span className="text-xs">{smallnote}</span>
    </div>
  );
}
