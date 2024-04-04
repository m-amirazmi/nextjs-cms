import InputSettings from "@/components/editor/input-settings";
import { SchemaSettings } from "@/types/editor.types";

export default function PlaygroundEditor() {
  return (
    <div className="flex flex-col gap-y-4 w-full justify-center items-center">
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
    label: "Checkbox Input With Default Value, Error Message, Small Note",
    smallnote: "This will required you to do something",
    message: "Please tick this before continue",
    defaultValue: true,
  },
  {
    type: "checkbox",
    id: "checkboxinput",
    label: "Checkbox Input With Default Value, Small Note",
    smallnote: "This will required you to do something",
    defaultValue: true,
  },
  {
    type: "checkbox",
    id: "checkboxinput",
    label: "Checkbox Input With Default Value",
    defaultValue: true,
  },
  {
    type: "checkbox",
    id: "checkboxinput",
    label: "Checkbox Input",
  },
  {
    type: "number",
    id: "numberinput",
    label: "Number Input - Step, Default, Error, Placeholder, Note",
    defaultValue: 2.28,
    step: 0.001,
    message: "Please enter the number",
    placeholder: "Insert the number",
    smallnote: "This will be use for number",
  },
  {
    type: "number",
    id: "numberinput",
    label: "Number Input - Step, Default, Placeholder, Note",
    defaultValue: 2.28,
    step: 0.001,
    placeholder: "Insert the number",
    smallnote: "This will be use for number",
  },
  {
    type: "number",
    id: "numberinput",
    label: "Number Input - Step, Default, Placeholder",
    defaultValue: 2.28,
    step: 0.001,
    placeholder: "Insert the number",
  },
  {
    type: "number",
    id: "numberinput",
    label: "Number Input - Default, Placeholder",
    defaultValue: 2.28,
    placeholder: "Insert the number",
  },
  {
    type: "number",
    id: "numberinput",
    label: "Number Input",
    placeholder: "Insert the number",
  },
  {
    type: "number",
    id: "numberinput",
    label: "Number Input No Placeholder",
  },
  {
    type: "radio",
    id: "radioinput",
    label: "Radio Input",
    options: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" },
    ],
    defaultValue: "large",
    message: "Please select one",
    smallnote: "This will be use for the font size",
  },
  {
    type: "radio",
    id: "radioinput",
    label: "Radio Input 5 Options",
    options: [
      { label: "Extra Small", value: "extrasmall" },
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" },
      { label: "Extra Large", value: "extralarge" },
    ],
    defaultValue: "large",
    smallnote: "This will be use for the font size",
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
