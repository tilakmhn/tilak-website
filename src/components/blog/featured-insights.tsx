import { Blog } from "@/constants/blogs";
import Image from "next/image";
import React from "react";

const FeaturedInsights = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
      <h3 className="heading-3 font-semibold">Featured Insights</h3>
      {blogs.map((blog, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-4 mobile:gap-6 tablet:gap-8 laptop:gap-10 justify-center items-center bg-gradient-to-b from-white/20 to-blue-600/5 p-3 mobile:p-4 tablet:p-6 laptop:p-8 rounded-b-2xl w-full"
        >
          <div className="rounded-2xl overflow-hidden w-full">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={300}
              className="object-cover w-full h-full max-h-[300px]"
              priority={idx === 0}
            />
          </div>
          <div className="flex flex-col gap-3 mobile:gap-4 tablet:gap-5 laptop:gap-6 rounded-b-2xl w-full">
            <h4 className="heading-4 font-extrabold">{blog.title}</h4>
            <span className="heading-6">{blog.description}</span>
            <button className="bg-primary rounded-md max-w-fit text-background py-2 px-4 font-medium heading-6 hover:bg-primary/90 transition-colors">
              Read more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedInsights;
