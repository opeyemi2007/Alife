export default function BlogSkeleton() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-100 animate-pulse rounded-xl overflow-hidden shadow-md"
        >
          <div className="w-full h-48 bg-gray-300" />
          <div className="p-5 space-y-3">
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-3 bg-gray-300 rounded w-full" />
            <div className="h-3 bg-gray-300 rounded w-5/6" />
            <div className="h-3 bg-gray-200 rounded w-2/3" />
            <div className="h-4 bg-red-200 rounded w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
