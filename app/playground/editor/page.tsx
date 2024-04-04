import InputSettings from "@/components/editor/input-settings";
import { SchemaSettings } from "@/types/editor.types";

export default function PlaygroundEditor() {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h2 className="text-xl">Input Settings</h2>
      <div className="flex flex-col gap-y-2 max-w-[500px] w-full">
        <InputSettings settings={inputSettings} />
      </div>
    </div>
  );
}
const inputSettings: SchemaSettings[] = [
  {
    type: "text",
    id: "textinput",
    label: "Text Input With Default Value, Small Note, Error Message",
    defaultValue: "Demo CMS",
    placeholder: "Insert the title here...",
    message: "This is error message",
    smallnote: "This will be used for the title",
  },
  {
    type: "text",
    id: "textinput",
    label: "Text Input With Default Value and Small Note",
    defaultValue: "Demo CMS",
    placeholder: "Insert the title here...",
    smallnote: "This will be used for the title",
  },
  {
    type: "text",
    id: "textinput",
    label: "Text Input With Default Value",
    defaultValue: "Demo CMS",
    placeholder: "Insert the title here...",
  },
  {
    type: "text",
    id: "textinput",
    label: "Text Input",
    placeholder: "Insert the title here...",
  },
  {
    type: "text",
    id: "textinput",
    label: "Text Input No Placeholder",
  },
  {
    type: "textarea",
    id: "textareainput",
    label: "TextArea Input With Default Value, Small Note, Error Message",
    defaultValue: "Demo CMS",
    placeholder: "Insert the title here...",
    message: "This is error message",
    smallnote: "This will be used for the title",
  },
  {
    type: "textarea",
    id: "textareainput",
    label: "TextArea Input With Default Value, Small Note",
    defaultValue: "Demo CMS",
    placeholder: "Insert the title here...",
    smallnote: "This will be used for the title",
  },
  {
    type: "textarea",
    id: "textareainput",
    label: "TextArea Input With Default Value",
    defaultValue: "Demo CMS",
    placeholder: "Insert the title here...",
  },
  {
    type: "textarea",
    id: "textareainput",
    label: "TextArea Input",
    placeholder: "Insert the title here...",
  },
  {
    type: "textarea",
    id: "textareainput",
    label: "TextArea Input No Placeholder",
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
