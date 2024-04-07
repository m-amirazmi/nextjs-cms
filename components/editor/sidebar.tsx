"use client";

import { getGeneralContent } from "@/actions/content.action";
import PageSelection from "./editor-header/page-selection";
import { Button } from "../ui/button";
import { Radio } from "lucide-react";
import Link from "next/link";
import { Page } from "@/types/editor-page.types";
import { usePathname } from "next/navigation";

export default function Sidebar({ pages }: { pages: Page[] }) {
  const pathname = usePathname();
  const removeEditor = pathname.replace("/editor/", "/");

  return (
    <aside className="sticky top-0 left-0 p-4">
      <div className="flex items-center gap-2 justify-stretch">
        <PageSelection pages={pages} parentPath="/editor" />
        <Button variant="outline" asChild>
          <Link href={removeEditor}>
            <Radio size={20} />
          </Link>
        </Button>
      </div>
      <div></div>
    </aside>
  );
}
