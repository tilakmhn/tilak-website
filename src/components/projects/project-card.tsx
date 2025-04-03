import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export interface ProjectItem {
  title: string;
  image: string;
  description: string;
  icons: string[];
}

const ProjectCard = ({ title, description, image, icons }: ProjectItem) => {
  return (
    <Card className="shadow-md border-0">
      <CardHeader>
        <Avatar>
          <AvatarImage src={image} className="object-contain" />
          <AvatarFallback>IJ</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <h3 className="heading-3 font-semibold">{title}</h3>
        <h4 className="heading-4">{description}</h4>
      </CardContent>
      <CardFooter className="flex justify-end items-center">
        {icons.map((icon, idx) => (
          <span key={idx}>{icon}</span>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
