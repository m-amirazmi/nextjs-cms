export type InputSettingType =
  | "text"
  | "textarea"
  | "range"
  | "checkbox"
  | "number"
  | "radio"
  | "select"
  | "color"
  | "image"
  | "url"
  | "video"
  | "richtext";

export interface BaseInputSetting {
  id: string;
  label: string;
  placeholder?: string;
  smallnote?: string;
  message?: string;
}

type BaseSettingMap = {
  [key in InputSettingType]: BaseInputSetting & { type: key };
};

export interface InputSettingWithOption {
  value: string | number;
  label: string;
}

type OptionalSettingsMap = {
  range: {
    min: number;
    max: number;
    step?: number;
    defaultValue?: number;
    unit?: string;
  };
  text: {
    defaultValue?: string;
  };
  textarea: {
    defaultValue?: string;
  };
  checkbox: {
    defaultValue?: boolean;
  };
  number: {
    defaultValue?: number;
  };
  radio: {
    options: InputSettingWithOption[];
    defaultValue?: string;
  };
  select: {
    options: InputSettingWithOption[];
    defaultValue?: string;
  };
  color: {
    defaultValue?: string;
  };
  image: {
    defaultValue?: string;
  };
  url: {
    defaultValue?: string;
  };
  video: {
    defaultValue?: string;
  };
  richtext: {
    defaultValue?: string;
  };
};

type MergedSetting<T extends InputSettingType> = BaseSettingMap[T] &
  OptionalSettingsMap[T];

export type SchemaSettings = {
  [Key in InputSettingType]: MergedSetting<Key>;
}[InputSettingType];

export interface SectionSchema {
  name: string;
  settings: SchemaSettings[];
}

export type TextInputProps = MergedSetting<"text"> & { border: boolean };
