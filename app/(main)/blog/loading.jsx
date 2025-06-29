'use client'
import BlogSkeleton from '../../components/blogskeleton/BlogSkeleton'

export default function Loading() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-4">Loading Blogs...</h1>
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
        Hang tight, we’re fetching the latest blog posts for you.
      </p>
      <BlogSkeleton />
    </section>
  );
}
