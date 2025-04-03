import About from "@/components/about-section";
import ContactCard from "@/components/contact-card";
import Experience from "@/components/experience-section";
import Expertise from "@/components/expertise-section";
import Footer from "@/components/footer-section";
import HSeparator from "@/components/h-separator";
import Navbar from "@/components/navigation-menu/navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-[183px] max-w-[385px] mx-auto flex flex-col w-full gap-20 mb-5">
        <About />
        <HSeparator />
        <Experience />
        <HSeparator />
        <Expertise />
        <HSeparator />
        <Projects />
        <HSeparator />
        <ContactCard />
      </main>

      <Footer />
    </>
  );
}
