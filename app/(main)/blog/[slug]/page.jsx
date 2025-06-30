import blogData from '@/data/blogs.json'
import BlogDetail from './Blogdetails';

export async function generateMetadata({ params }) {
  const blog = blogData.find((b) => b.slug === params.slug);

  return {
    title: blog ? `ALIFE | ${blog.title}` : 'ALIFE | Blog',
    description: blog?.excerpt || 'Explore blog posts on ALIFE',
  };
}

export default function BlogPage({ params }) {
  return <BlogDetail params={params} />;
}
