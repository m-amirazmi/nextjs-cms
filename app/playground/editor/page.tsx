import InputSettings from "@/components/editor/input-settings";
import TextInput from "@/components/editor/input-settings/text-input";

export default function PlaygroundEditor() {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl">Input Settings</h2>
      <div className="flex flex-col gap-y-2">
        <InputSettings settings={inputSettings} />
      </div>
    </div>
  );
}

const inputSettings = [
  {
    type: "text",
  },
  {
    type: "textarea",
  },
  {
    type: "checkbox",
  },
  {
    type: "number",
  },
  {
    type: "radio",
  },
  {
    type: "range",
  },
  {
    type: "select",
  },
  {
    type: "color",
  },
  {
    type: "image",
  },
  {
    type: "url",
  },
  {
    type: "video",
  },
  {
    type: "richtext",
  },
];
