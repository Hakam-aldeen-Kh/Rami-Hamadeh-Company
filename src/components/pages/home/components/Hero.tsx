"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00303D] via-[#046180] to-[#FBB040]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 4px,
              rgba(255,255,255,0.1) 4px,
              rgba(255,255,255,0.1) 8px
            )`,
          }}
        />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-[#FBB040]/20 rounded-full animate-bounce" />
      <div className="absolute top-40 right-20 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-[#046180]/30 rounded-full animate-bounce delay-700" />
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-[#00303D]/40 rounded-full animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl space-y-7 md:space-y-8">
        <p className="text-white/70 uppercase tracking-widest text-sm font-semibold fade-in mt-[75px]">
          Welcome to Rami Hamadeh Company
        </p>

        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-[#FBB040] to-[#046180] bg-clip-text text-transparent slide-up">
          Crafting Bold Digital Experiences
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed fade-in-delay">
          We blend creativity, technology, and strategy to bring your ideas to
          life with stunning design and modern development.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-delay">
          <Link
            href="#portfolio"
            className="w-full md:w-[300px] px-6 py-3 lg:py-5 rounded-full font-semibold text-white bg-gradient-to-r from-[#FBB040] to-[#046180] hover:shadow-xl hover:shadow-[#FBB040]/30 transition-all duration-300"
          >
            Explore Work
          </Link>
          <Link
            href="#contact"
            className="w-full md:w-[300px] px-6 py-3 lg:py-5 rounded-full font-semibold border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
          >
            Let’s Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
