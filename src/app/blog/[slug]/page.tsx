/**
 * Blog post page component that displays a single blog post based on the slug parameter.
 * This is a dynamic route that uses the [slug] parameter to fetch and display the corresponding blog post.
 */

import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { PostHeader } from "@/components/blog/post-header";
import { PostContent } from "@/components/blog/post-content";
import Link from "next/link";
import { MoveLeftIcon } from "lucide-react";
import ContactCard from "@/components/contact-card";
import { RelatedPosts } from "@/components/blog/related-posts";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    return {
      title: post.title + " | Blog",
      description: post.summary,
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  let post;
  try {
    const { slug } = await params;
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  // Get all posts and filter out the current post
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="mobile:px-4 py-5 flex flex-col gap-10 mobile:gap-20 tablet:gap-25">
      <article className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/blog"
            className="bg-primary rounded-md max-w-fit text-background py-2 px-4 font-medium heading-6 hover:bg-primary/90 transition-colors"
          >
            <MoveLeftIcon className="w-6 h-6 inline-block mr-2" />
            Back to Blog
          </Link>
        </div>
        <PostHeader
          title={post.title}
          tags={post.tags}
          image={post.image}
          publishedAt={post.publishedAt}
        />
        <PostContent content={post.content} />
      </article>

      <RelatedPosts posts={relatedPosts} />

      <ContactCard />
    </div>
  );
}
