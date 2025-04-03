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

      <main className="pt-[calc(var(--nav-height)+40px)] mx-auto px-4 w-full max-w-screen-sm tablet:max-w-screen-md laptop:max-w-screen-lg flex flex-col gap-6 tablet:gap-8">
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
