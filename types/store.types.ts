export interface DynamicSections {
  [key: string]: {
    [key: string]: string | number | boolean | undefined;
  };
}

export interface Content {
  title: string;
  path: string;
  sections: DynamicSections;
  orders: string[];
}

export interface ContentState extends Content {
  setInitialSections: ({
    sections,
    orders,
  }: {
    sections: DynamicSections;
    orders: string[];
  }) => void;
}
