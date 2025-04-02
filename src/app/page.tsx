import About from "@/components/about-section";
import Navbar from "@/components/navigation-menu/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex w-full">
        <About />
      </main>
    </>
  );
}
