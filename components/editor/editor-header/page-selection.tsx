"use client";

import { createPage } from "@/actions/content.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown, Plus } from "lucide-react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

interface PageSelectionProps {
  currentPage: string;
  pages: { path: string; title: string }[];
  parentPath: string;
}

interface PageState {
  title: string;
  path: string;
  name: string;
}

// Todo: Set error if page name,title and path already exists

export default function PageSelection({
  currentPage,
  pages,
  parentPath,
}: PageSelectionProps) {
  const [page, setPage] = useState<PageState>({
    title: "",
    path: "",
    name: "",
  });

  const [hostpath, setHostpath] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    if (!window) return;
    const host = window.location.hostname;
    const protocol = window.location.protocol;
    const port = window.location.port;
    let withPort = "";
    if (port) withPort = ":" + port;
    setHostpath(protocol + "//" + host + withPort + "/");
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof PageState;
    const inputValue = e.target.value;
    const copyInputState = { ...page };
    copyInputState[inputName] = inputValue;

    if (inputName === "title") {
      const trimName = inputValue.toLowerCase().trim().replaceAll(" ", "-");
      copyInputState.path = trimName;
      copyInputState.name = trimName;
    } else if (inputName === "path" && copyInputState.path) {
      copyInputState.name = copyInputState.path;
      if (copyInputState.path.includes("/")) {
        copyInputState.name = copyInputState.name.replaceAll("/", "_");
      }
    }
    setPage(copyInputState);
  };

  const handleSubmit = async () => {
    await createPage({
      pagename: page.name,
      pagepath: page.path,
      pagetitle: page.title,
      redirectUrl: pathname + "/" + page.path,
    });
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full" asChild>
          <Button
            variant="outline"
            className="w-full flex items-center gap-x-1 justify-between"
          >
            <span>Page: {currentPage}</span>
            <span>
              <ChevronDown size={18} />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Pages</DropdownMenuLabel>
          {pages.map((i) => (
            <DropdownMenuItem key={i.path} asChild className="cursor-pointer">
              <Link href={parentPath + i.path}>{i.title}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <div>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="w-48 flex items-center justify-start gap-x-1 px-1.5"
              >
                <Plus size={18} />
                <span>Create New Page</span>
              </Button>
            </DialogTrigger>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent className="max-w-[90%] rounded-lg sm:max-w-[420px]">
        <DialogHeader>
          <DialogTitle>Create New Page</DialogTitle>
          <DialogDescription>
            Create a new page here. Insert the detail below.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-y-2 w-full">
          <Label htmlFor="title">Page Title</Label>
          <Input
            name="title"
            type="text"
            placeholder="Enter the page title..."
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <Label htmlFor="path">Page Path</Label>
          <Input
            name="path"
            type="text"
            placeholder="Enter the page path..."
            onChange={handleChange}
            value={page.path}
          />
          <small className="col-start-2 col-span-5 text-muted-foreground flex flex-col">
            <span>The page url will be:</span>
            <span className="flex flex-col">
              <span>
                {hostpath}
                <span className="font-bold">{page.path}</span>
              </span>
              <span>
                {hostpath}editor/
                <span className="font-bold">{page.path}</span>
              </span>
            </span>
          </small>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <Label htmlFor="name">Page Name</Label>
          <Input
            name="name"
            type="text"
            placeholder="Enter the page name..."
            onChange={handleChange}
            value={page.name}
          />
          <small className="col-start-2 col-span-5 text-muted-foreground flex flex-col">
            <span>Will be used for JSON filename:</span>
            <span className="flex flex-col">
              <span>
                <span className="font-bold">{page.name}</span>
                .draft.json
              </span>
              <span>
                <span className="font-bold">{page.name}</span>.publish.json
              </span>
            </span>
          </small>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
