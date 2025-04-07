import CTAButtonsGroup from "./cta-buttons-group";
import Profile from "./profile";
import Summary from "./summary";

const About = () => {
  return (
    <section id="about" className="flex flex-col gap-10">
      <Profile />
      <Summary />
    </section>
  );
};

export default About;
