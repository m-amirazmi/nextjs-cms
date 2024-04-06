import PageSelection from "@/components/editor/editor-header/page-selection";
import React from "react";

export default function EditorLayoutComponents() {
  return (
    <div className="flex flex-col gap-y-4 w-full justify-center items-center">
      <h2 className="text-xl">Header Components</h2>
      <div className="flex flex-col items-center gap-y-2 max-w-[500px] w-full">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-lg">Page Creation Dropdown</h3>
          <PageSelection
            currentPage="Home"
            parentPath="/editor/"
            pages={[
              {
                path: "home",
                title: "Home",
              },
              {
                path: "about",
                title: "About",
              },
              {
                path: "contact",
                title: "Contact Us",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
