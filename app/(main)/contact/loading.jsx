// app/contact/loading.jsx

export default function Loading() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white animate-pulse">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left side skeleton */}
        <div>
          <div className="h-10 w-1/2 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 w-full bg-gray-200 rounded mb-8"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded mb-8"></div>

          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 w-1/2 bg-gray-100 rounded" />
            ))}
          </div>

          <div className="mt-8 h-6 w-32 bg-gray-200 rounded"></div>
        </div>

        {/* Right side form skeleton */}
        <div className="space-y-6">
          <div className="h-4 w-1/4 bg-gray-300 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />

          <div className="h-4 w-1/4 bg-gray-300 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />

          <div className="h-4 w-1/4 bg-gray-300 rounded" />
          <div className="h-32 w-full bg-gray-200 rounded" />

          <div className="h-10 w-40 bg-red-300 rounded" />
        </div>
      </div>
    </section>
  );
}
