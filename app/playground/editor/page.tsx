import InputSettings from "@/components/editor/input-settings";
import TextInput from "@/components/editor/input-settings/text-input";
import { SchemaSettings } from "@/types/editor.types";

export default function PlaygroundEditor() {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl">Input Settings</h2>
      <div className="flex flex-col gap-y-6 min-w-[500px]">
        <InputSettings settings={inputSettings} />
      </div>
    </div>
  );
}
const inputSettings: SchemaSettings[] = [
  {
    type: "text",
    id: "textinput",
    label: "Text Input",
    defaultValue: "Demo CMS",
    placeholder: "Insert the title here...",
    message: "This is error message",
    smallnote: "This will be used for the title",
  },
  {
    type: "textarea",
    id: "textareainput",
    label: "TextArea Input",
  },
  {
    type: "checkbox",
    id: "checkboxinput",
    label: "Checkbox Input",
  },
  {
    type: "number",
    id: "numberinput",
    label: "Number Input",
  },
  {
    type: "radio",
    id: "radioinput",
    label: "Radio Input",
    options: [],
  },
  {
    type: "range",
    id: "rangeinput",
    label: "Range Input",
    max: 200,
    min: 0,
  },
  {
    type: "select",
    id: "selectinput",
    label: "Select Input",
    options: [],
  },
  {
    type: "color",
    id: "colorinput",
    label: "Color Input",
  },
  {
    type: "image",
    id: "imageinput",
    label: "Image Input",
  },
  {
    type: "url",
    id: "urlinput",
    label: "URL Input",
  },
  {
    type: "video",
    id: "videoinput",
    label: "Video Input",
  },
  {
    type: "richtext",
    id: "richtextinput",
    label: "Rich Text Input",
  },
];
