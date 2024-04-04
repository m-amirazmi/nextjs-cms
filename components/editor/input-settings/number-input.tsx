import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { InputSettingTypeProps } from "@/types/editor.types";

export default function NumberInput({
  border,
  id,
  label,
  type,
  defaultValue,
  message,
  placeholder,
  smallnote,
  step = 1,
}: InputSettingTypeProps<"number">) {
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
      <Input
        name={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        step={step}
      />
      <div className="flex flex-col gap-y-1">
        <small>{smallnote}</small>
        {message && <small className="text-destructive">{message}</small>}
      </div>
    </div>
  );
}
