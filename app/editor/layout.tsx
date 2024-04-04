import { createPage } from "@/actions/content.action";
import { Button } from "@/components/ui/button";
import { BaseLayoutProps } from "@/types/layout.types";

export default function EditorLayout({ children }: BaseLayoutProps) {
  const createAboutPage = async () => {
    "use server";
    const res = await createPage("about");
    console.log("page", res);
  };

  return (
    <div className="bg-muted flex flex-col gap-y-6">
      <form action={createAboutPage}>
        <Button>add new page</Button>
      </form>
      {children}
    </div>
  );
}
