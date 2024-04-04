"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { InputSettingTypeProps } from "@/types/editor.types";
import { useState } from "react";

export default function SelectInput({
  border,
  id,
  label,
  options,
  defaultValue,
  message,
  smallnote,
  placeholder,
}: InputSettingTypeProps<"select">) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (val: string) => {};

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
      {options.length > 3 ? (
        <Select
          name={id}
          defaultValue={defaultValue}
          onValueChange={handleChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Tabs defaultValue={value} className="w-full">
          <TabsList className="w-full">
            {options.map(({ label, value }) => (
              <TabsTrigger
                key={value}
                className="w-full"
                value={value}
                onClick={() => handleChange(value)}
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}
      <div className="flex flex-col gap-y-1">
        <small>{smallnote}</small>
        {message && <small className="text-destructive">{message}</small>}
      </div>
    </div>
  );
}
