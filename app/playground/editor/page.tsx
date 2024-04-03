import TextInput from "@/components/editor/input-settings/text-input";

export default function PlaygroundEditor() {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl">Input Settings</h2>
      <div className="flex flex-col gap-y-2">
        <TextInput />
        <p>TextArea Input</p>
        <p>Checkbox Input</p>
        <p>Number Input</p>
        <p>Radio Input</p>
        <p>Range Input</p>
        <p>Select Input</p>
        <p>Color Picker</p>
        <p>Image Picker</p>
        <p>URL Input</p>
        <p>Video</p>
        <p>RichText Input</p>
      </div>
    </div>
  );
}
