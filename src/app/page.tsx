import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Posts } from "@/components/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto p-10">
      <Header />
      <Posts />
      <Footer />
    </main>
  );
}
