export default function Loading() {
  return (
    <div className="p-6 animate-pulse max-w-2xl mx-auto bg-white rounded-lg shadow">
      <div className="h-5 bg-gray-300 w-1/2 mb-4" />
      <div className="space-y-4">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded" />
        ))}
      </div>
      <div className="mt-6 h-8 bg-gray-300 w-1/4 rounded" />
    </div>
  );
}
