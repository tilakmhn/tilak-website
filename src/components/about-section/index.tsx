import { Button } from "../ui/button";
import CTAButtonsGroup from "./cta-buttons-group";
import HeroHeadline from "./hero-headline";
import Introduction from "./profile";

const About = () => {
  return (
    <div
      id="about-section"
      className="pt-[183px] max-w-[385px] mx-auto flex flex-col gap-10"
    >
      <Introduction />
      <HeroHeadline />
      <CTAButtonsGroup />
    </div>
  );
};

export default About;
