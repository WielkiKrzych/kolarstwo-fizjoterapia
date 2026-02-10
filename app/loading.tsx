export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#00f0ff]/20 border-t-[#00f0ff] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/60">Ładowanie...</p>
      </div>
    </div>
  );
}
