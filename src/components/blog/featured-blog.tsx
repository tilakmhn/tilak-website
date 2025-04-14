import { BlogPost } from '@/lib/mdx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FeaturedBlog = (featuredBlog: BlogPost) => {
  return (
    <>{/* Featured Blog */}
    <div className="flex flex-col tablet:flex-row gap-4 mobile:gap-6 tablet:gap-8 laptop:gap-10 justify-center items-center bg-gradient-to-b from-white/20 to-blue-600/5 p-3 mobile:p-4 tablet:p-6 laptop:p-8 rounded-b-2xl">
      <div className="rounded-2xl overflow-hidden w-full h-[60vh] mobile:h-[65vh] tablet:h-[70vh] laptop:h-[75vh] tablet:order-2">
        <Image
          src={featuredBlog.image}
          alt={featuredBlog.title}
          width={1600}
          height={900}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="flex flex-col gap-3 mobile:gap-4 tablet:gap-5 laptop:gap-6 w-full tablet:order-1">
        <h4 className="heading-4 font-extrabold">{featuredBlog.title}</h4>
        <span className="heading-6">{featuredBlog.summary}</span>
        <Link
          href={`/blog/${featuredBlog.slug}`}
          className="bg-primary rounded-md max-w-fit text-background py-2 px-4 font-semibold heading-6 hover:bg-primary/90 transition-colors"
        >
          Read more
        </Link>
      </div>
    </div>
    
    
    </>
  )
}

export default FeaturedBlog;
