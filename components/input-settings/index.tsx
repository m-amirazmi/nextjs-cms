import { SectionSchemaSetting, StringToComponent } from "@/lib/types";
import Text from "./text";
import TextArea from "./textarea";

interface InputSettingsProps {
  settings: SectionSchemaSetting[];
  sectionId: string;
}

const inputTypes: StringToComponent = {
  text: Text,
  textarea: TextArea,
};

export default function InputSettings({
  settings,
  sectionId,
}: InputSettingsProps) {
  if (!settings || settings.length === 0) return null;
  return settings.map((i) => {
    const Component = inputTypes[i.type];
    if (!Component) return null;
    return (
      <Component
        key={i.id}
        defaultValue={i.defaultValue}
        sectionId={sectionId}
        {...i}
      />
    );
  });
}
