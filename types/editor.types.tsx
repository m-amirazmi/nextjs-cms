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
  smallnote?: string;
  message?: string;
}

type BaseSettingMap = {
  [key in InputSettingType]: BaseInputSetting & { type: key };
};

export interface InputSettingWithOption {
  value: string;
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
    placeholder?: string;
  };
  textarea: {
    defaultValue?: string;
    placeholder?: string;
  };
  checkbox: {
    defaultValue?: boolean;
  };
  number: {
    defaultValue?: number;
    placeholder?: string;
    step?: number;
  };
  radio: {
    options: InputSettingWithOption[];
    defaultValue?: string;
  };
  select: {
    options: InputSettingWithOption[];
    defaultValue?: string;
    placeholder?: string;
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

export interface BaseInputSettingProps {
  border: boolean;
}

export type InputSettingTypeProps<T extends InputSettingType> =
  MergedSetting<T> & BaseInputSettingProps;
