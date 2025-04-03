import { Button } from "../ui/button";
import CTAButtonsGroup from "./cta-buttons-group";
import HeroHeadline from "./hero-headline";
import Profile from "./profile";
import Summary from "./summary";

const About = () => {
  return (
    <section id="about" className="flex flex-col gap-10">
      <Profile />
      <HeroHeadline />
      <CTAButtonsGroup />
      <Summary />
    </section>
  );
};

export default About;
