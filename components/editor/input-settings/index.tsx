import TextInput from "./text-input";

interface InputSettingsProps {
  name: string;
}

interface InputSettingsObj {
  [key: string]: React.ReactNode;
}

const inputSettings: InputSettingsObj = {
  text: TextInput,
};

export default function InputSettings({ name }: InputSettingsProps) {
  return <div>InputSettings</div>;
}
