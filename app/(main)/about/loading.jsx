// app/about/loading.jsx

export default function Loading() {
  return (
    <div className="animate-pulse bg-white min-h-screen">
      {/* Hero */}
      <section className="h-64 w-full bg-gray-200 mb-12" />

      {/* Mission and Vision */}
      <section className="px-6 md:px-20 mb-16">
        <div className="h-8 bg-gray-300 w-1/3 rounded mb-4" />
        <div className="h-4 bg-gray-100 w-full rounded mb-2" />
        <div className="h-4 bg-gray-100 w-5/6 rounded mb-2" />
        <div className="h-4 bg-gray-100 w-2/3 rounded" />
      </section>

      {/* Achievement Cards */}
      <section className="px-6 md:px-20 mb-16">
        <div className="h-8 bg-gray-300 w-1/4 rounded mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-100 h-32 rounded-xl" />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 md:px-20">
        <div className="h-8 bg-gray-300 w-1/3 rounded mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </section>
    </div>
  );
}
