import { MDXRemote } from "next-mdx-remote/rsc";

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={content} />
    </div>
  );
} 