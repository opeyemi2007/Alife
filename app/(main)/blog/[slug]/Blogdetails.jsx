'use client'
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import blogData from '../../../../data/blogs.json'

export default function BlogDetail({ params }){

  const blog = blogData.find((b) => b.slug === params.slug);
  const slug = params.slug;

  const related = blogData.filter((b) => b.slug !== slug && b.category === blog?.category);

  if (!blog) {
    return (
    <div className="p-10 text-center text-gray-600">
      <h2 className="text-2xl font-semibold mb-2">Blog post not found</h2>
      <Link href="/blog" className="text-red-600 hover:underline">← Back to Blogs</Link>
    </div>)
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-sm text-gray-500 hover:underline">← Back to Blogs</Link>

        <h1 className="text-4xl font-bold text-red-600 mb-2 mt-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          By {blog.author} • {blog.date}
        </p>

        <div className="relative w-full h-80 rounded-xl overflow-hidden mb-10">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        <article
  className="prose max-w-none prose-red text-gray-800 mb-10"
  dangerouslySetInnerHTML={{ __html: blog.content }}
/>

        {/* Social Share */}
        <div className="mb-14">
          <h3 className="text-md font-semibold text-gray-600 mb-2">Share this post:</h3>
          <div className="flex gap-4 text-gray-600">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-red-600" />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${blog.title}`} target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-red-600" />
            </a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`} target="_blank" rel="noreferrer">
              <FaLinkedinIn className="hover:text-red-600" />
            </a>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Related Posts</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <Link href={`/blog/${item.slug}`} key={item.slug}>
                  <div className="border rounded-lg p-4 hover:shadow-lg transition-all">
                    <h4 className="text-lg font-semibold text-red-600 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">By {item.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
