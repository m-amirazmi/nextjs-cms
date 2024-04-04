"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { InputSettingTypeProps } from "@/types/editor.types";
import { ChangeEvent, useState } from "react";

export default function CheckboxInput({
  id,
  label,
  defaultValue,
  message,
  smallnote,
  border,
}: InputSettingTypeProps<"checkbox">) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <div
      className={cn(
        "flex flex-col items-start w-full",
        border && "border p-4 rounded"
      )}
    >
      <div className="flex flex-row gap-x-2">
        <Checkbox id={id} name={id} checked={value} onClick={handleChange} />
        <div className={cn("grid", smallnote && "gap-1.5")}>
          <Label htmlFor={id} className={cn(message && "text-destructive")}>
            {label}
          </Label>
          <small>{smallnote}</small>
        </div>
      </div>
      {message && <small className="text-destructive">{message}</small>}
    </div>
  );
}
