export interface BaseLayoutProps {
  children?: React.ReactNode;
}

export interface LayoutWithSlugParamsProps extends BaseLayoutProps {
  params: { slug: string };
}
