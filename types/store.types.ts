interface DynamicSections {
  [key: string]: {
    [key: string]: string | number | boolean | undefined;
  };
}

export interface ContentState {
  sections: DynamicSections;
  orders: string[];
  setInitialSections: ({
    sections,
    orders,
  }: {
    sections: DynamicSections;
    orders: string[];
  }) => void;
}
