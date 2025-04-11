import { ProjectItem } from "@/constants/projects";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";

// TODO: Either use svg for each logo or fix images look using CSS.

const ProjectCard = ({ title, description, image, icons }: ProjectItem) => {
  return (
    <Card className="py-6 tablet:py-10 px-6 tablet:px-10 border-0 shadow-md hover:shadow-xl transition-shadow">
      <CardHeader className="relative aspect-square max-h-[200px]">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="object-contain"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 min-h-[100px]">
        <h4 className="heading-3 font-semibold">{title}</h4>
        <p className="heading-4">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-1">
        {icons.map(({ title, path }, idx) => (
          <div
            key={idx}
            className="relative aspect-[3/2] h-6 mobile:h-7 tablet:h-10"
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
