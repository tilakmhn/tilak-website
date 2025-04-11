import { ProjectItem } from "@/constants/projects";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";

// TODO: Either use svg for each logo or fix images look using CSS.

const ProjectCard = ({ title, description, image, icons }: ProjectItem) => {
  return (
    <Card className="py-3 border-0 shadow-md hover:shadow-xl transition-shadow">
      <CardHeader className="relative aspect-video p-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 min-h-[100px]">
        <h4 className="heading-3 font-semibold">{title}</h4>
        <p className="heading-4">{description}</p>
      </CardContent>
      <CardFooter className="px-8 py-2 flex flex-wrap justify-end gap-2">
        {icons.map(({ title, path }, idx) => (
          <div
            key={idx}
            className="relative h-7 w-7 mobile:h-9 mobile:w-9 p-4"
            title={title}
          >
            <Image
              src={path}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
