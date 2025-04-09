import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { BlogPost } from "@/lib/mdx";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="flex flex-col tablet:flex-row gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="flex-1 pt-0 border-none">
            <CardHeader className="p-0">
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="heading-4 font-semibold mb-2">{post.title}</h3>
              <p className="heading-6 text-muted-foreground line-clamp-3">
                {post.summary}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary hover:text-primary/80 heading-6 font-semibold flex items-center"
              >
                Read more 
                <MoveRightIcon className="w-4 h-4 inline-block ml-2" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 