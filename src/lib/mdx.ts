import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogPost = {
  slug: string
  title: string
  publishedAt: string
  summary: string
  tags: string[]
  content: string
  image: string
}

// Define the content directory path
const contentDirectory = path.join(process.cwd(), 'src/content')

/**
 * Retrieves all blog posts from the content directory
 * @returns Promise<BlogPost[]> - Array of all blog posts sorted by publication date
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(contentDirectory)
  
  const allPostsData = await Promise.all(
    // Map over all file names and read the content of each file
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      // Parse the file contents using gray-matter
      const { data, content } = matter(fileContents)
      
      return {
        slug,
        title: data.title,
        publishedAt: data.publishedAt,
        summary: data.summary,
        tags: data.tags.split(',').map((tag: string) => tag.trim()),
        content,
        image: data.image || '/blogs/default.jpg'
      }
    })
  )

  // Sort the posts by publication date
  return allPostsData.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

/**
 * Retrieves a single blog post by its slug
 * @param slug - The unique identifier of the post
 * @returns Promise<BlogPost> - The requested blog post
 */
export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // Parse the file contents using gray-matter
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    publishedAt: data.publishedAt,
    summary: data.summary,
    tags: data.tags.split(',').map((tag: string) => tag.trim()),
    content,
     image: data.image || '/blogs/default.jpg'
  }
} 