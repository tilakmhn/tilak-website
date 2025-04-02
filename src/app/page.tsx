import About from "@/components/about-section";
import Experience from "@/components/experience-section";
import HSeparator from "@/components/h-separator";
import Navbar from "@/components/navigation-menu/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-[183px] max-w-[385px] mx-auto flex flex-col w-full gap-20">
        <About />
        <HSeparator />
        <Experience />
        <HSeparator />
      </main>
    </>
  );
}
