// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1B5B7A] via-[#2E7D96] to-[#F4A261] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0 bg-repeat opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 3px,
              rgba(255,255,255,0.1) 3px,
              rgba(255,255,255,0.1) 6px
            )`,
          }}
        />
      </div>

      {/* Floating blobs */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-[#F4A261]/20 rounded-full animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-20 w-12 h-12 bg-white/15 rounded-full animate-bounce delay-1000"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-10 w-24 h-24 bg-[#F4A261]/10 rounded-full animate-pulse delay-500"
        aria-hidden="true"
      />

      {/* Content */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          <p className="fade-in text-white/70 uppercase tracking-widest text-sm font-semibold">
            Error 404
          </p>

          <h1 className="slide-up mt-2 leading-normal text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-[#F4A261] bg-clip-text text-transparent">
            Page not found
          </h1>

          <p className="fade-in-delay mt-4 text-white/90 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            Sorry, we can’t find the page you’re looking for. It may have been
            moved, renamed, or never existed.
          </p>

          <div className="fade-in-delay mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              ← Back to Home
            </Link>
            <a
              href="mailto:ed@rami-hamadeh.com"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-white border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          <p className="fade-in-delay mt-6 text-sm text-white/70">
            If you typed the address, check the spelling and try again.
          </p>
        </div>
      </section>
    </main>
  );
}
