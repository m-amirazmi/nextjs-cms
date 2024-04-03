import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { TextInputProps } from "@/types/editor.types";

export default function TextInput({
  id,
  label,
  type,
  message,
  placeholder,
  smallnote,
  defaultValue,
  border = true,
}: TextInputProps) {
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
      />
      <div className="flex flex-col gap-y-1">
        <small>{smallnote}</small>
        {message && <small className="text-destructive">{message}</small>}
      </div>
    </div>
  );
}
