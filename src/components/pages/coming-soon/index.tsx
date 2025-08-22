"use client";
import React, { useState, useEffect } from "react";

const launchDate = new Date("2025-09-18T00:00:00Z"); // ISO w/ Z

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const parts = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  const ariaTimer = `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B5B7A] via-[#2E7D96] to-[#F4A261] relative overflow-hidden">
      {/* Animated Background Pattern (reduced motion safe) */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat opacity-30 motion-safe:animate-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 3px,
              rgba(255,255,255,0.1) 3px,
              rgba(255,255,255,0.1) 6px
            )`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Floating Elements (decorative) */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full motion-safe:animate-bounce" aria-hidden="true" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-[#F4A261]/20 rounded-full motion-safe:animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/15 rounded-full motion-safe:animate-bounce delay-1000" aria-hidden="true" />
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-[#F4A261]/10 rounded-full motion-safe:animate-pulse delay-500" aria-hidden="true" />

      {/* Content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full mx-auto">
          <header className="mb-8 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-[#F4A261] bg-clip-text text-transparent mb-4">
              Rami Hamadeh
            </h1>
            <p className="sr-only">Official website</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F4A261] to-white mx-auto rounded-full" />
          </header>

          <section className="mb-12 text-center animate-slide-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
              Something Amazing is Coming Soon
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              We&apos;re crafting innovative digital solutions that will transform your business. Get ready for
              cutting-edge technology and exceptional experiences.
            </p>
          </section>

          {/* Countdown Timer (equal-height cards + accessible <time>) */}
          <section
            className="mb-12 animate-fade-in-delay"
            role="timer"
            aria-live="polite"
            aria-atomic="true"
            aria-label={`Time remaining: ${ariaTimer}`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto auto-rows-fr">
              {parts.map((item) => (
                <article
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 h-full flex flex-col justify-center"
                >
                  <time
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-mono tabular-nums"
                    // datetime is optional here; we expose machine-friendly total seconds left
                    dateTime={String(item.value)}
                    aria-label={`${item.value} ${item.label}`}
                  >
                    {String(item.value).padStart(2, "0")}
                  </time>
                  <div className="text-sm sm:text-base text-white/80 font-medium mt-1">{item.label}</div>
                </article>
              ))}
            </div>

            {/* Optional single-line timer display for narrow screens */}
            <p className="mt-6 text-center text-white/80 font-mono tabular-nums sm:hidden" aria-hidden="true">
              {String(timeLeft.days).padStart(2, "0")} :
              {String(timeLeft.hours).padStart(2, "0")} :
              {String(timeLeft.minutes).padStart(2, "0")} :
              {String(timeLeft.seconds).padStart(2, "0")}
            </p>
          </section>

          {/* --- Subscription / Features / Social (kept commented in your source) --- */}
          {/* Keep your subscribe feature here; remember to POST to /api/subscribe for real signups */}
        </div>
      </main>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        /* Respect user preference, reduce motion-heavy animations */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-fade-in-delay,
          .animate-slide-up {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
