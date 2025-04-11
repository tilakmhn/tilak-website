import { Card, CardHeader, CardContent } from "../ui/card";
import Image from "next/image";
import { experienceData } from "@/constants/experience";

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col gap-10">
      <h2 className="heading-2 font-semibold pb-4">Experience</h2>
      <div className="grid grid-cols-1 mobile:grid-cols-2 gap-6 mobile:gap-8 tablet:gap-10">
        {experienceData.map((data, idx) => (
          <Card
            className="w-full gap-2 border-0 h-full p-4 shadow-md hover:shadow-xl transition-shadow"
            key={idx}
          >
            <CardHeader className="w-full pb-6 pt-2">
              <div className="relative p-0 overflow-hidden min-h-[100px] max-h-[175px] flex items-start">
                <Image
                  src={data.imageSrc}
                  alt={data.companyName}
                  title={data.companyName}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-left max-w-full"
                />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <h4 className="heading-3 font-semibold pb-2">{data.title}</h4>
              <p className="heading-4 font-normal">{data.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
