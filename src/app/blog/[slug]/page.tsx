/**
 * Blog post page component that displays a single blog post based on the slug parameter.
 * This is a dynamic route that uses the [slug] parameter to fetch and display the corresponding blog post.
 */

import { getPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}


export async function generateMetadata({ params }: BlogPostProps) {
  try {
    const { slug } = await params; // Extract the slug from the route parameters
    const post = await getPostBySlug(slug); // Fetch the blog post data
    return {
      title: post.title + " | Blog", // Set the page title to the post title
      description: post.summary, // Set the page description to the post summary
    };
  } catch {
    return {
      title: "Post Not Found", // Fallback title if the post is not found
    };
  }
}


export default async function BlogPost({ params }: BlogPostProps) {
  let post;
  try {
    const { slug } = await params; // Extract the slug from the route parameters
    post = await getPostBySlug(slug); // Fetch the blog post data
  } catch {
    notFound(); // If the post is not found, show a 404 page
  }

  return (
    <article className="container mx-auto px-4 py-8">
      {/* Blog post header section containing title, tags, and featured image */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {/* Tags section displaying all post tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 tablet:px-4 py-1 tablet:py-2 bg-primary text-white rounded-full text-sm tablet:text-base font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Featured image section */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Image
            src={post.image}
            alt={post.title}
            width={1000}
            height={1000}
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Publication date */}
        <p className="text-gray-500 font-semibold">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </header>
      {/* Main content section using MDX for rich content rendering */}
      <div className="prose prose-lg max-w-none"> 
        <MDXRemote source={post.content} />
      </div>
      <div className="mt-8">
        <Link
          href="/blog"
          className="bg-primary rounded-md max-w-fit text-background py-2 px-4 font-medium heading-6 hover:bg-primary/90 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </article>
  );
}
