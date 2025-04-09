# Tilak Joshi - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS. The website showcases professional experience, projects, and includes a blog section.

- [Tilak Joshi - Personal Portfolio Website](#tilak-joshi---personal-portfolio-website)
  - [🚀 Features](#-features)
    - [Portfolio](#portfolio)
    - [Blog](#blog)
    - [Contact](#contact)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📁 Project Structure](#-project-structure)
  - [🚀 Getting Started](#-getting-started)
  - [📝 Scripts](#-scripts)
  - [📚 Blog Content](#-blog-content)


## 🚀 Features

### Portfolio
- Responsive design with mobile-first approach
- Modern UI components using Radix UI
- Professional experience timeline
- Project showcase with detailed descriptions
- Skills and expertise section
- Contact form for inquiries

### Blog
- MDX-based blog system
- Featured blog posts
- Blog post categorization with tags
- Responsive blog layout
- Blog post metadata support (title, date, summary, tags)

### Contact
- Contact form for direct communication
- Meeting scheduling functionality
- Professional contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: ShadCN UI
- **Content Management**: MDX
- **Type Safety**: TypeScript
- **Animation**: tw-animate-css
- **Content Processing**: gray-matter

## 📁 Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── page.tsx      # Home page
│   ├── blog/         # Blog pages
│   └── contact/      # Contact page
├── components/       # Reusable React components
│   ├── about/        # About section components
│   ├── blog/         # Blog-related components
│   ├── contact/      # Contact form components
│   ├── experience/   # Experience section components
│   ├── expertise/    # Skills section components
│   └── projects/     # Projects section components
├── content/         # MDX blog content files
├── constants/       # Application constants
├── hooks/          # Custom React hooks
└── lib/            # Utility functions and helpers
    └── mdx.ts      # MDX content processing utilities

public/
├── blogs/          # Blog post images
├── certificates/   # Certificate images
├── projects/       # Project images
├── companies/      # Company logos
├── technologies/   # Technology icons
└── logos/          # Website logos
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Blog Content

The blog system uses MDX files stored in the `src/content` directory. Each blog post should follow this structure:

```mdx
---
title: "Your Blog Post Title"
publishedAt: "2024-01-01"
summary: "A brief summary of your blog post"
tags: "tag1, tag2, tag3"
image: "/blogs/your-image.jpg"
---

Your blog post content here...
```
