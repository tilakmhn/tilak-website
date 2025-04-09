import Profile from "./profile";
import Summary from "./summary";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-10 mobile:gap-12 tablet:gap-25"
    >
      <Profile />
      <Summary />
    </section>
  );
};

export default About;
