import ExpertiseList from "./expertise-list";
import TechStack from "./tech-stack";

const Expertise = () => {
  return (
    <section id="expertise" className="flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <h2 className="heading-2 font-bold">Expertise</h2>
        <TechStack />
      </div>
      <ExpertiseList />
    </section>
  );
};

export default Expertise;
