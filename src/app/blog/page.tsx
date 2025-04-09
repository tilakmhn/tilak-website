import Image from "next/image";
import React from "react";
import blogs from "@/constants/blogs";
import FeaturedBlog from "@/components/blog/featured-blog";
import FeaturedInsights from "@/components/blog/featured-insights";
import ContactCard from "@/components/contact-card";

export const metadata = {
  title: "Blog | Tilak Joshi",
  description:
    "Read our latest articles and stay updated with the newest trends",
};

const BlogPage = () => {
  const [featuredBlog, ...allBlogs] = blogs;
  return (
    <div className="flex flex-col gap-10 mobile:gap-20 tablet:gap-25">
      <div className="flex flex-col gap-10 mobile:gap-20 tablet:gap-25">
        <FeaturedBlog {...featuredBlog} />
        <FeaturedInsights blogs={allBlogs} />
    </div>
    <ContactCard/>
    </div>
  );
};

export default BlogPage;
