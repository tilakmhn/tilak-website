import { getAllPosts } from '@/lib/mdx'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Blog | Tilak Joshi",
  description: "Read our latest articles and stay updated with the newest trends",
};

export default async function BlogPage() {
  const posts = await getAllPosts()
  const [featuredBlog, ...allBlogs] = posts

  return (
    <div className="flex flex-col gap-10 mobile:gap-20 tablet:gap-25">
      {/* Featured Blog */}
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
          <span className="heading-6">{featuredBlog.summary}</span>
          <Link
            href={`/blog/${featuredBlog.slug}`}
            className="bg-primary rounded-md max-w-fit text-background py-2 px-4 font-medium heading-6 hover:bg-primary/90 transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>

      {/* Featured Insights */}
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <h3 className="heading-3 font-semibold">Featured Insights</h3>
        {allBlogs.map((blog) => (
          <div
            key={blog.slug}
            className="flex flex-col gap-4 mobile:gap-6 tablet:gap-8 laptop:gap-10 justify-center items-center bg-gradient-to-b from-white/20 to-blue-600/5 p-3 mobile:p-4 tablet:p-6 laptop:p-8 rounded-b-2xl w-full"
          >
            <div className="rounded-2xl overflow-hidden w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1200}
                height={300}
                className="object-cover w-full h-full max-h-[300px]"
              />
            </div>
            <div className="flex flex-col gap-3 mobile:gap-4 tablet:gap-5 laptop:gap-6 rounded-b-2xl w-full">
              <h4 className="heading-4 font-extrabold">{blog.title}</h4>
              <span className="heading-6">{blog.summary}</span>
              <Link
                href={`/blog/${blog.slug}`}
                className="bg-primary rounded-md max-w-fit text-background py-2 px-4 font-medium heading-6 hover:bg-primary/90 transition-colors"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
