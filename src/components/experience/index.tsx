import { Card, CardHeader, CardContent } from "../ui/card";
import Image from "next/image";

const cardData = [
  {
    imageSrc: "/companies/devdash.png",
    title: "ML/AI Solutions Architect",
    description:
      "Developed innovative Generative AI and conversational AI solutions for workflow automation and customer engagement",
  },
  {
    imageSrc: "/companies/jp-morgan.png",
    title: "Data Platform Modernization",
    description:
      "Leading enterprise data modernization across mainframe, on-premises, and AWS cloud ecosystems while maintaining strict financial compliance",
  },
  {
    imageSrc: "/companies/ocrolus.png",
    title: "Lead Software Engineer",
    description:
      "Led software architecture and product development from concept to successful launch",
  },
  {
    imageSrc: "/companies/hta.png",
    title: "Tech Lead",
    description:
      "Drafted the framework for the whole system, guided developers, ensured security and authorization for the HTA app",
  },
  {
    imageSrc: "/companies/priceline.png",
    title: "Senior Software Engineer",
    description:
      "Optimized critical hotel search platform for performance, scalability and resilience",
  },
  {
    imageSrc: "/companies/bank-of-america.png",
    title: "Software Engineer",
    description:
      "Developed authentication service using custom scoring models for risk assessment",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col gap-10">
      <h2 className="heading-2 font-bold">Experience</h2>
      <div className="grid grid-cols-1 mobile:grid-cols-2 gap-4 tablet:gap-6">
        {cardData.map((data, idx) => (
          <Card
            className="w-full gap-2 border-0 h-full p-4 shadow-md hover:shadow-xl transition-shadow"
            key={idx}
          >
            <CardHeader className="w-full">
              <div className="relative h-20 w-full">
                <Image
                  src={data.imageSrc}
                  alt={data.title}
                  fill
                  className="object-contain"
                />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <h4 className="heading-4 font-semibold">{data.title}</h4>
              <p className="heading-5 font-normal">{data.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
