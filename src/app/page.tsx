import About from "@/components/about";
import ContactCard from "@/components/contact-card";
import Experience from "@/components/experience";
import Expertise from "@/components/expertise";
import HSeparator from "@/components/h-separator";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <About />
      <HSeparator />
      <Experience />
      <HSeparator />
      <Expertise />
      <HSeparator />
      <Projects />
      <HSeparator />
      <ContactCard />
    </>
  );
}
