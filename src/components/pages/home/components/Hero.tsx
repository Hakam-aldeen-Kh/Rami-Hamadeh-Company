"use client";
import Link from "next/link";
import LogoDrawSection from "./LogoDrawSection";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#00303D] via-[#046180] to-[#FBB040]">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 4px,
              rgba(255,255,255,0.08) 4px,
              rgba(255,255,255,0.08) 8px
            )`,
          }}
        />
      </div>

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)] bg-black/20" />

      <div className="relative z-10 px-6 w-full max-w-7xl mx-auto py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:gap-12">
          {/* Left: Content */}
          <div className="text-center lg:text-left space-y-6 animate-fadeInUp mt-10 lg:mt-0">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 uppercase tracking-widest text-xs font-semibold shadow-sm backdrop-blur-sm">
              Welcome to Rami Hamadeh Company
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-[#FBB040] to-[#046180] bg-clip-text text-transparent">
              Crafting Bold Digital Experiences
            </h1>

            <p className="max-w-lg mx-auto lg:mx-0 text-lg sm:text-xl text-white/90 leading-relaxed">
              We blend creativity, technology, and strategy to bring your ideas
              to life with stunning design and modern development.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="#portfolio"
                aria-label="Explore our portfolio"
                className="w-full text-center sm:w-auto md:w-[260px] px-6 py-3 lg:py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#FBB040] to-[#046180] hover:scale-105 hover:shadow-xl hover:shadow-[#FBB040]/30 transition-all duration-300"
              >
                Explore Work
              </Link>
              <Link
                href="#contact"
                aria-label="Contact us"
                className="w-full text-center sm:w-auto md:w-[260px] px-6 py-3 lg:py-4 rounded-full font-semibold border border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Let’s Talk
              </Link>
            </div>
          </div>

          {/* Right: Logo animation */}
          <div className="h-full mt-10 lg:mt-0 flex justify-center lg:justify-end animate-fadeIn">
            <LogoDrawSection />
          </div>
        </div>
      </div>

      {/* Local animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
