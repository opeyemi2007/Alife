export default function Loading() {
  return (
    <div className="p-6 animate-pulse">
      <div className="h-6 w-3/4 bg-gray-300 rounded mb-6" />

      <div className="space-y-4">
        {Array(5).fill(0).map((_, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div className="flex flex-col gap-1">
              <div className="h-4 bg-gray-300 w-40 rounded" />
              <div className="h-3 bg-gray-200 w-32 rounded" />
            </div>
            <div className="h-8 bg-gray-300 w-24 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
