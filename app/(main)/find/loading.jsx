export default function Loading() {
  return (
    <section className="px-6 py-16 md:px-20 bg-white animate-pulse">
      <div className="max-w-6xl mx-auto">
        <div className="h-10 bg-gray-200 rounded mb-6 w-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-100 h-52 rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  );
}
