export interface CustomPageProps {
  params: { slug: string[] };
}

export interface Page {
  path: string;
  title: string;
  name: string;
}

export interface GeneralContent {
  [key: string]: any;
  created_at: Date;
  updated_at: Date;
}
