import { Button } from "../ui/button";
import CTAButtonsGroup from "./cta-buttons-group";
import HeroHeadline from "./hero-headline";
import Introduction from "./profile";
import Summary from "./summary";

const About = () => {
  return (
    <div id="about-section" className="flex flex-col gap-10">
      <Introduction />
      <HeroHeadline />
      <CTAButtonsGroup />
      <Summary />
    </div>
  );
};

export default About;
