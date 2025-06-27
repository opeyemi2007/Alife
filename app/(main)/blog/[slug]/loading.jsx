// app/blogs/[slug]/loading.jsx

export default function Loading() {
  return (
    <section className="px-6 py-16 md:px-20 min-h-screen bg-white animate-pulse">
      <div className="max-w-4xl mx-auto">
        <div className="w-full h-64 bg-gray-200 rounded-xl mb-8" />

        <div className="h-8 bg-gray-300 rounded w-2/3 mb-4"></div>
        <div className="h-5 bg-gray-200 rounded w-1/3 mb-6"></div>

        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-100 rounded w-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
