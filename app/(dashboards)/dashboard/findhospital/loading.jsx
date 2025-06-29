export default function Loading() {
  return (
    <div className="p-6 animate-pulse">
      <div className="h-6 bg-gray-300 w-3/4 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow">
            <div className="h-32 bg-gray-300 mb-4 rounded" />
            <div className="h-4 bg-gray-200 mb-2 w-2/3" />
            <div className="h-3 bg-gray-100 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
