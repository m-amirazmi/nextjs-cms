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
