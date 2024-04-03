import { SchemaSettings } from "@/types/editor.types";
import CheckboxInput from "./checkbox-input";
import ColorPicker from "./color-picker";
import ImagePicker from "./image-picker";
import NumberInput from "./number-input";
import RadioInput from "./radio-input";
import RangeInput from "./range-input";
import RichtextInput from "./richtext-input";
import SelectInput from "./select-input";
import TextInput from "./text-input";
import TextareaInput from "./textarea-input";
import UrlInput from "./url-input";
import VideoInput from "./video-input";

interface InputSettingsProps {
  settings: SchemaSettings[];
}

interface InputSettingsObj {
  [key: string]: React.FC<any>;
}

const inputSettings: InputSettingsObj = {
  text: TextInput,
  textarea: TextareaInput,
  checkbox: CheckboxInput,
  color: ColorPicker,
  image: ImagePicker,
  number: NumberInput,
  radio: RadioInput,
  range: RangeInput,
  richtext: RichtextInput,
  select: SelectInput,
  url: UrlInput,
  video: VideoInput,
};

export default function InputSettings({ settings }: InputSettingsProps) {
  return settings.map((i, k) => {
    const Component = inputSettings[i.type];
    return <Component key={k} {...i} />;
  });
}
