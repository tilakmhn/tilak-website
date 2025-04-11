import About from "@/components/about";
import ContactCard from "@/components/contact-card";
import Experience from "@/components/experience";
import Expertise from "@/components/expertise";
import HSeparator from "@/components/h-separator";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="mt-[var(--margin-home)] flex flex-col gap-10 mobile:gap-20 tablet:gap-25 items-center mb-25">
      <About />
      <HSeparator />
      <Experience />
      <HSeparator />
      <Expertise />
      <HSeparator />
      <Projects />
      <HSeparator />
      <ContactCard />
    </div>
  );
}
