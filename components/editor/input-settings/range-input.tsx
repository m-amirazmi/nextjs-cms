"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { InputSettingTypeProps } from "@/types/editor.types";
import { ChangeEvent, useState } from "react";

export default function RangeInput({
  border,
  id,
  label,
  max,
  min,
  defaultValue = 0,
  message,
  smallnote,
  step,
  unit,
  type,
}: InputSettingTypeProps<"range">) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-y-2 w-full",
        border && "border p-4 rounded"
      )}
    >
      <Label htmlFor={id} className={cn(message && "text-destructive")}>
        {label}
      </Label>

      <div className="flex w-full gap-x-2">
        <div className="w-full">
          <div className="flex-1 relative">
            <Input
              max={max}
              min={min}
              step={step}
              type={type}
              onChange={handleChange}
              className="cursor-pointer absolute top-0 left-0 z-10 h-auto py-0 opacity-0"
            />
            <Slider
              value={[value]}
              onChange={handleChange}
              max={max}
              min={min}
              step={step}
              className="pt-2 pb-1"
            />
          </div>
          <div className="text-sm flex flex-row items-center justify-between">
            <span>
              {min}
              {unit}
            </span>
            <span className="border px-2 py-1 rounded font-semibold">
              {value}
              {unit}
            </span>
            <span>
              {max}
              {unit}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-1">
        <small>{smallnote}</small>
        {message && <small className="text-destructive">{message}</small>}
      </div>
    </div>
  );
}
