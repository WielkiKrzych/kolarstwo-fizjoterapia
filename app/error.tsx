"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold text-white mb-4">
          Coś poszło nie tak!
        </h2>
        <p className="text-white/60 mb-6">
          Wystąpił błąd podczas ładowania strony. Spróbuj odświeżyć stronę.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-transform"
        >
          Spróbuj ponownie
        </button>
      </div>
    </div>
  );
}
