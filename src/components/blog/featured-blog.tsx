import { Blog } from "@/constants/blogs";
import Image from "next/image";
import React from "react";

const FeaturedBlog = (featuredBlog: Blog) => {
  return (
    <div className="flex flex-col gap-4 mobile:gap-6 tablet:gap-8 laptop:gap-10 justify-center items-center bg-gradient-to-b from-white/20 to-blue-600/5 p-3 mobile:p-4 tablet:p-6 laptop:p-8 rounded-b-2xl">
      <div className="rounded-2xl overflow-hidden w-full h-[60vh] mobile:h-[65vh] tablet:h-[70vh] laptop:h-[75vh]">
        <Image
          src={featuredBlog.image}
          alt={featuredBlog.title}
          width={1600}
          height={900}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="flex flex-col gap-3 mobile:gap-4 tablet:gap-5 laptop:gap-6 w-full">
        <h4 className="heading-4 font-extrabold">{featuredBlog.title}</h4>
        <span className="heading-6">{featuredBlog.description}</span>
        <button className="bg-primary rounded-md max-w-fit text-background py-2 px-4 font-medium heading-6 hover:bg-primary/90 transition-colors">
          Read more
        </button>
      </div>
    </div>
  );
};

export default FeaturedBlog;
