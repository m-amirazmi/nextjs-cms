import Header from "@/components/header";
import { LayoutProps } from "@/lib/types";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
}
