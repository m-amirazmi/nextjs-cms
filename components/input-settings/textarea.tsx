import { useEditorStore } from "@/store/editor-store";
import { Textarea } from "../ui/textarea";
import { ChangeEvent } from "react";

interface TextAreaProps {
  id: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  smallnote?: string;
  sectionId: string;
}

export default function TextArea({
  id,
  label,
  placeholder,
  defaultValue,
  smallnote,
  sectionId,
}: TextAreaProps) {
  const updateInput = useEditorStore((state) => state.updateSection);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
      <Textarea
        name={id}
        placeholder={placeholder}
        defaultValue={defaultValue as string}
        onChange={handleChange}
      />
      <span className="text-xs">{smallnote}</span>
    </div>
  );
}
