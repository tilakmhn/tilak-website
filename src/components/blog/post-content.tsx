import { MDXRemote } from "next-mdx-remote/rsc";

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose prose-base max-w-none prose-headings:font-bold prose-p:text-gray-600 prose-strong:text-gray-900 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-table:border prose-table:border-gray-200 prose-td:p-2 prose-th:p-2 prose-th:bg-gray-50 prose-th:font-semibold prose-th:text-gray-900 prose-td:border prose-td:border-gray-200 prose-th:border prose-th:border-gray-200 prose-code:text-sm">
      <MDXRemote source={content} />
    </div>
  );
} 