import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function DesignToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <div className="flex min-h-screen flex-col mx-auto p-10">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}
