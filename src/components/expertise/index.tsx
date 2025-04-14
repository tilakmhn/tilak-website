import ExpertiseList from "./expertise-list";
import TechStack from "./tech-stack";

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="flex flex-col w-full gap-6 mobile:gap-8 tablet:gap-10"
    >
      <h2 className="heading-2 font-semibold">Expertise</h2>

      <div className="flex flex-col mobile:flex-row gap-6 tablet:gap-8">
        <TechStack />
        <ExpertiseList />
      </div>
    </section>
  );
};

export default Expertise;
