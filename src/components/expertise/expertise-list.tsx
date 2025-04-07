import { icons } from "lucide-react";
import { Icon } from "../ui/icon";

interface ExpertiseItem {
  id: string;
  title: string;
  icon: keyof typeof icons;
}

const expertiseItems: ExpertiseItem[] = [
  {
    id: "gen-ai-solutions",
    title: "Generative AI Solutions",
    icon: "Brain" as const,
  },
  {
    id: "data-pipelines",
    title: "Production-Grade Data Pipelines",
    icon: "Database" as const,
  },
  {
    id: "ml-platforms",
    title: "Enterprise ML Platform Architecture",
    icon: "Cpu" as const,
  },
  {
    id: "cloud-native",
    title: "Cloud-Native Solutions (AWS/GCP)",
    icon: "Cloud" as const,
  },
];

const ExpertiseList = () => {
  return (
    <div className="flex flex-col gap-4 tablet:gap-8 justify-center">
      {expertiseItems.map((item, idx) => (
        <div key={idx} className="flex items-center gap-5" id={item.id}>
          <Icon name={item.icon} className="shadow-md" />
          <h4 className="heading-4 font-semibold">{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseList;
