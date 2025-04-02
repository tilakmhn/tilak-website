import About from "@/components/about-section";
import Navbar from "@/components/navigation-menu/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-[183px] max-w-[385px] mx-auto flex w-full">
        <About />
      </main>
    </>
  );
}
