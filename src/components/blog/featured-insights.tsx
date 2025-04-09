import { BlogPost } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedInsight = ({ blog }: { blog: BlogPost }) => {
  return (
    <div
      key={blog.slug}
      className="flex flex-col tablet:flex-row gap-4 mobile:gap-6 tablet:gap-8 laptop:gap-10 justify-center items-center bg-gradient-to-b from-white/20 to-blue-600/5 p-3 mobile:p-4 tablet:p-6 laptop:p-8 rounded-b-2xl w-full"
    >
      <div className="rounded-2xl overflow-hidden w-full h-[350px] tablet:w-1/2 tablet:order-2">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={400}
          className="object-cover w-full h-full max-h-[350px]"
        />
      </div>
      <div className="flex flex-col gap-3 mobile:gap-4 tablet:gap-5 laptop:gap-6 rounded-b-2xl w-full tablet:order-1">
        <h4 className="heading-4 font-extrabold">{blog.title}</h4>
        <span className="heading-6">{blog.summary}</span>
        <Link
          href={`/blog/${blog.slug}`}
          className="bg-primary rounded-md max-w-fit text-background py-2 px-4 font-semibold heading-6 hover:bg-primary/90 transition-colors"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

const FeaturedInsights = ({ allBlogs }: { allBlogs: BlogPost[] }) => {
  return (
    <div className="flex flex-col gap-4 mobile:gap-6 tablet:gap-8 laptop:gap-10">
      <h3 className="heading-3 font-semibold">Featured Insights</h3>
      <div className="flex flex-col gap-8 mobile:gap-12 tablet:gap-16 laptop:gap-20">
        {allBlogs.map((blog) => (
          <FeaturedInsight key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedInsights;
