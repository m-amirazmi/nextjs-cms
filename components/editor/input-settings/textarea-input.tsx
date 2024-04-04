import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { TextAreaInputProps } from "@/types/editor.types";

export default function TextareaInput({
  id,
  label,
  defaultValue,
  message,
  placeholder,
  smallnote,
  border,
}: TextAreaInputProps) {
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
      <Textarea
        name={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="h-32"
      />
      <div className="flex flex-col gap-y-1">
        <small>{smallnote}</small>
        {message && <small className="text-destructive">{message}</small>}
      </div>
    </div>
  );
}
