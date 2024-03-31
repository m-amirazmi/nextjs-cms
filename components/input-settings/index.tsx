import { SectionSchemaSetting, StringToComponent } from "@/lib/types";
import Text from "./text";
import TextArea from "./textarea";

const inputTypes: StringToComponent = {
  text: Text,
  textarea: TextArea,
};

export default function InputSettings({
  settings,
}: {
  settings: SectionSchemaSetting[];
}) {
  if (!settings || settings.length === 0) return null;
  return settings.map((i) => {
    const Component = inputTypes[i.type];
    if (!Component) return null;
    return <Component key={i.id} defaultValue={i.defaultValue} {...i} />;
  });
}
