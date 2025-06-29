// BlogsPage.jsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import allBlogs from '../../../data/blogs.json'

const categories = ['All', 'Health', 'Tips', 'Facts'];

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  console.log('datas',allBlogs)
  const filteredBlogs = allBlogs.filter((blog) => {
    const matchCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });



  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-4">Latest Blog Posts</h1>
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
        Explore our collection of articles on health, donation, wellness, and ALIFE’s impact.
      </p>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="relative w-full h-48">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{blog.excerpt}</p>
              <div className="text-xs text-gray-400 mb-2">
                By {blog.author} • {blog.date}
              </div>
              <Link
                href={blog.slug}
                className="text-red-600 text-sm font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No blog posts found.</p>
      )}
    </section>
  );
};

export default BlogsPage;
