import Image from "next/image";
import { getTagColor } from "@/lib/utils";

interface PostHeaderProps {
  title: string;
  tags: string[];
  image: string;
  publishedAt: string;
}

export default function PostHeader({ title, tags, image, publishedAt }: PostHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => {
          const lastColor = index > 0 ? getTagColor(tags[index - 1]) : undefined;
          return (
            <span
              key={tag}
              className={`px-2 tablet:px-4 py-1 tablet:py-2 ${getTagColor(
                lastColor
              )} text-white rounded-full text-sm tablet:text-base font-semibold`}
            >
              {tag}
            </span>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={750}
          className="w-full h-auto rounded-lg object-contain"
        />
      </div>
      <p className="text-gray-500 font-medium">
        <span className="font-semibold mr-2 text-foreground">Tilak Joshi </span>
        {new Date(publishedAt).toLocaleDateString()}
      </p>
    </header>
  );
} 