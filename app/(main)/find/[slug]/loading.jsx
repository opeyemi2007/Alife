export default function Loading() {
  return (
    <section className="px-6 py-16 md:px-20 min-h-screen bg-white animate-pulse">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-64 bg-gray-200 rounded-xl mb-8" />

        <div className="h-8 bg-gray-200 w-3/4 rounded mb-4"></div>
        <div className="h-5 bg-gray-100 w-1/2 rounded mb-2"></div>
        <div className="h-5 bg-gray-100 w-1/3 rounded mb-6"></div>

        <div className="space-y-4">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
          <div className="h-4 bg-gray-100 rounded w-3/4"></div>
        </div>

        <div className="mt-10 h-4 w-32 bg-gray-200 rounded"></div>
      </div>
    </section>
  );
}
