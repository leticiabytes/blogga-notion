import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Posts } from "@/components/posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto p-10">
      <Header />
      <Posts />
      <Footer />
    </main>
  );
}
