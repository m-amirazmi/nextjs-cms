"use client";

import { getContent } from "@/actions/content.action";
import { useContentStore } from "@/store/content.store";
import { CustomPageProps } from "@/types/editor-page.types";
import { useEffect } from "react";

/**
 * Steps on getting the page content
 * 1. Get the page name
 * 2. Get the content based on the page from JSON file
 * 3. Update the content store/state from JSON file
 * 4. Get the updated content store/state - page based
 * 5. Loop over the sections based on updated content
 *
 */

export default function CustomPage({ params }: CustomPageProps) {
  const { slug } = params;

  const { orders, sections, setInitialSections } = useContentStore(
    (state) => state
  );

  useEffect(() => {
    const fetchContent = async () => {
      const content = await getContent(slug, "prod");
      setInitialSections(content);
    };
    fetchContent();
  }, [slug, setInitialSections]);

  return slug;
}
