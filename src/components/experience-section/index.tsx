import { Card, CardHeader, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const cardData = [
  {
    imageSrc: "./companies/devdash.png",
    title: "ML/AI Solutions Architect",
    description:
      "Developed innovative Generative AI and conversational AI solutions for workflow automation and customer engagement",
  },
  {
    imageSrc: "./companies/jp-morgan.png",
    title: "Data Platform Modernization",
    description:
      "Leading enterprise data modernization across mainframe, on-premises, and AWS cloud ecosystems while maintaining strict financial compliance",
  },
  {
    imageSrc: "./companies/ocrolus.png",
    title: "Lead Software Engineer",
    description:
      "Led software architecture and product development from concept to successful launch",
  },
  {
    imageSrc: "./companies/hta.png",
    title: "Tech Lead",
    description:
      "Drafted the framework for the whole system, guided developers, ensured security and authorization for the HTA app",
  },
  {
    imageSrc: "./companies/priceline.png",
    title: "Senior Software Engineer",
    description:
      "Optimized critical hotel search platform for performance, scalability and resilience",
  },
  {
    imageSrc: "./companies/bank-of-america.png",
    title: "Software Engineer",
    description:
      "Developed authentication service using custom scoring models for risk assessment",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col gap-10">
      <h2 className="heading-2 font-bold">Experience</h2>
      <div className="grid grid-cols-1 mobile:grid-cols-2 gap-4 mobile:gap-6 tablet:gap-8">
        {cardData.map((data, idx) => (
          <Card className="w-full gap-2 b-0" key={idx}>
            <CardHeader className="w-full">
              <Avatar className="h-20 w-full">
                <AvatarImage src={data.imageSrc} className="object-contain" />
                <AvatarFallback>DDL</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <h3 className="heading-3 font-semibold">{data.title}</h3>
              <h4 className="heading-4 font-normal">{data.description}</h4>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
