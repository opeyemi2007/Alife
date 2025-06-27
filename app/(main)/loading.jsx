export default function GlobalLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div className="w-16 h-16 bg-red-600 rounded-full" />
        <h1 className="text-xl font-bold text-red-600">ALIFE is Loading...</h1>
      </div>
    </div>
  );
}
