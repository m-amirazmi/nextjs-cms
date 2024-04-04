import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { InputSettingTypeProps } from "@/types/editor.types";

export default function RadioInput({
  border,
  id,
  label,
  options,
  type,
  defaultValue,
  message,
  smallnote,
}: InputSettingTypeProps<"radio">) {
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
      <RadioGroup name={id} defaultValue={defaultValue}>
        {options.map(({ label, value }) => (
          <div key={label} className="flex items-center space-x-2">
            <RadioGroupItem value={value} id={value} />
            <Label htmlFor={value}>{label}</Label>
          </div>
        ))}
      </RadioGroup>
      <div className="flex flex-col gap-y-1">
        <small>{smallnote}</small>
        {message && <small className="text-destructive">{message}</small>}
      </div>
    </div>
  );
}
