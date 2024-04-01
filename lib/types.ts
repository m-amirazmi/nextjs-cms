import { ChangeEvent, FormEvent } from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface DynamicPageProps {
  params: { slug: string };
}

export interface DynamicPageObject {
  [key: string]: React.FC;
}

export interface SectionsProps {
  content: {
    [key: string]: any;
  };
  sections: string[];
}

export interface StringToComponent {
  [key: string]: React.FC<any>;
}

// SECTION SCHEMA TYPES
export type SectionSchemaType =
  | "text"
  | "textarea"
  | "range"
  | "checkbox"
  | "number"
  | "radio"
  | "select";

export interface BaseSectionSchemaSetting {
  id: string;
  label: string;
  placeholder?: string;
  smallnote?: string;
  message?: string;
}

type BaseSettingMap = {
  [key in SectionSchemaType]: BaseSectionSchemaSetting & { type: key };
};

export interface SelectionOptionSectionSchemaSetting {
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
    defaultValue?: boolean;
  };
  radio: {
    options: SelectionOptionSectionSchemaSetting[];
    defaultValue?: string;
  };
  select: {
    options: SelectionOptionSectionSchemaSetting[];
    defaultValue?: string;
  };
};

type MergedSetting<T extends SectionSchemaType> = BaseSettingMap[T] &
  OptionalSettingsMap[T];

export type SectionSchemaSetting = {
  [Key in SectionSchemaType]: MergedSetting<Key>;
}[SectionSchemaType];

export interface SectionSchema {
  name: string;
  settings: SectionSchemaSetting[];
}

// SECTION COMPONENT PROPS

export interface TitleDescriptionProps {
  title: string;
  description: string;
}

export interface SectionSchemaWithId extends SectionSchema {
  id: string;
}

export interface TextInputProps {
  id: string;
  label: string;
  placeholder: string;
  defaultValue: string;
  smallnote: string;
}

export interface TextAreaInputProps {
  id: string;
  label: string;
  placeholder: string;
  defaultValue: string;
  smallnote: string;
}
