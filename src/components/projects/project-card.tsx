import { ProjectItem } from "@/constants/projects";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";

// TODO: Either use svg for each logo or fix images look using CSS.

const ProjectCard = ({ title, description, image, icons }: ProjectItem) => {
  return (
    <Card className="py-3 border-0 shadow-md hover:shadow-xl transition-shadow">
      <CardHeader className="relative aspect-video p-0 overflow-hidden">
        <Image src={image} alt={title} fill className="object-contain" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <h4 className="heading-4 font-semibold">{title}</h4>
        <p className="heading-5">{description}</p>
      </CardContent>
      <CardFooter className="px-8 py-4 flex flex-wrap justify-end gap-2">
        {icons.map(({ title, path }, idx) => (
          <div
            key={idx}
            className="relative h-7 w-7 mobile:h-9 mobile:w-9 p-4"
            title={title}
          >
            <Image src={path} alt={title} fill className="object-contain" />
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
