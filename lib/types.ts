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

export interface Section {
  [key: string]: React.FC<any>;
}

export interface HeroProps {
  title: string;
}

export interface TitleDescriptionProps {
  title: string;
  description: string;
}

export interface SectionsDropdownProps {
  handleCloseDropdown: () => void;
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
    default?: number;
    unit?: string;
  };
  text: {
    default?: string;
  };
  textarea: {
    default?: string;
  };
  checkbox: {
    default?: boolean;
  };
  number: {
    default?: boolean;
  };
  radio: {
    options: SelectionOptionSectionSchemaSetting[];
    default?: string;
  };
  select: {
    options: SelectionOptionSectionSchemaSetting[];
    default?: string;
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

// export interface RangeSectionSchemaSetting extends BaseSectionSchemaSetting {
//   type: "range";
//   min: number;
//   max: number;
//   step?: number;
//   default?: number;
//   unit?: string;
// }

// export interface TextSectionSchemaSetting extends BaseSectionSchemaSetting {
//   type: "text";
//   default?: string;
// }
// export interface TextAreaSectionSchemaSetting extends BaseSectionSchemaSetting {
//   type: "textarea";
//   default?: string;
// }
// export interface CheckboxSectionSchemaSetting extends BaseSectionSchemaSetting {
//   type: "checkbox";
//   default?: boolean;
// }
// export interface NumberSectionSchemaSetting extends BaseSectionSchemaSetting {
//   type: "number";
//   default?: number;
// }

// export interface RadioSectionSchemaSetting extends BaseSectionSchemaSetting {
//   type: "radio";
//   options: SelectionOptionSectionSchemaSetting[];
//   default?: string;
// }
// export interface SelectSectionSchemaSetting extends BaseSectionSchemaSetting {
//   type: "select";
//   options: SelectionOptionSectionSchemaSetting[];
//   default?: string;
// }

// export type SectionSchemaSetting =
//   | RangeSectionSchemaSetting
//   | TextSectionSchemaSetting
//   | TextAreaSectionSchemaSetting
//   | CheckboxSectionSchemaSetting
//   | NumberSectionSchemaSetting
//   | RadioSectionSchemaSetting
//   | SelectSectionSchemaSetting;
