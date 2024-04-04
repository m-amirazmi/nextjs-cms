"use client";

import { Content, DynamicSections } from "@/types/store.types";

interface DynamicPageProps {
  content: Content;
}

export default function DynamicPage({ content }: DynamicPageProps) {
  return <div>Dynamic Page</div>;
}
