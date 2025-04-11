import Image from "next/image";

interface PostHeaderProps {
  title: string;
  tags: string[];
  image: string;
  publishedAt: string;
}

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 tablet:px-4 py-1 tablet:py-2 bg-gray-100 text-gray-800 rounded-full text-sm tablet:text-base"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default function PostHeader({
  title,
  tags,
  image,
  publishedAt,
}: PostHeaderProps) {
  const author = "Tilak Joshi";
  return (
    <header className="flex flex-col gap-6 mobile:gap-8 tablet:gap-10">
      <div className="flex flex-wrap gap-2 mb-4">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={750}
          className="w-full h-auto rounded-lg object-contain"
        />
      </div>
      <div className="flex flex-col gap-7">
        <p className="font-bold text-xl leading-7 tracking-normal">
          <span className="mr-2">{author + ' .'}</span>
          {new Date(publishedAt).toLocaleDateString()}
        </p>
        <h1 className="font-extrabold text-pretty text-2xl mobile:text-3xl tablet:text-5xl leading-12 tracking-[-0.0012em]">
          {title}
        </h1>
        <Tags tags={tags} />
      </div>
    </header>
  );
}
