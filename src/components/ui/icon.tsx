import { icons} from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
  className?: string;
}

export const Icon = ({ name, className, ...props }: IconProps) => {
  const LucideIcon = icons[name] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;

  return <LucideIcon className={cn("h-5 w-5", className)} {...props} />;
};
