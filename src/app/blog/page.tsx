import { FeaturedBlog, FeaturedInsights} from "@/components/blog";
import ContactCard from "@/components/contact-card";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog | Tilak Joshi",
  description:
    "Read our latest articles and stay updated with the newest trends",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featuredBlog, ...allBlogs] = posts;

  return (
    <div className="mt-[var(--margin-blog)] mobile:px-4 py-5 flex flex-col gap-6 tablet:gap-8">
      <div className="flex flex-col gap-10 mobile:gap-20 tablet:gap-25">
        <FeaturedBlog {...featuredBlog} />
        <FeaturedInsights allBlogs={allBlogs} />
      </div>
      <ContactCard/>
    </div>
  );
}
