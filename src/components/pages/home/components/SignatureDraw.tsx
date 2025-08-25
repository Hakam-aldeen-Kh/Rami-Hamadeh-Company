"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  /** Root-relative path in /public */
  src?: string;
  stroke?: string;
  strokeWidth?: number;
  duration?: number; // seconds
  stagger?: number; // seconds per path
  className?: string;
};

export default function SignatureDraw({
  src = "/icons/rami-hamadeh-signature.svg",
  stroke = "white",
  strokeWidth = 5,
  duration = 2.2,
  stagger = 0.35,
  className = "",
}: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Start only when visible
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(src);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const svgText = await res.text();
        if (cancelled || !boxRef.current) return;

        boxRef.current.innerHTML = svgText;
        const svg = boxRef.current.querySelector("svg");
        if (!svg) throw new Error("SVG root missing");

        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("role", "img");
        svg.setAttribute("aria-label", "Rami Hamadeh signature animation");

        const prefersReduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        const paths = Array.from(svg.querySelectorAll<SVGPathElement>("path"));

        paths.forEach((p, i) => {
          const len = p.getTotalLength();
          p.style.fill = "none";
          p.style.stroke = stroke;
          p.style.strokeWidth = String(strokeWidth);
          p.style.strokeLinecap = "round";
          p.style.strokeLinejoin = "round";

          if (prefersReduced) {
            // No animation: show final state for accessibility
            p.style.strokeDasharray = "none";
            p.style.strokeDashoffset = "0";
          } else {
            p.style.strokeDasharray = `${len}`;
            p.style.strokeDashoffset = `${len}`;
            p.style.animation = `sig-draw ${duration}s ease forwards ${
              i * stagger
            }s`;
            p.style.filter = "drop-shadow(0 2px 6px rgba(255,255,255,0.35))";
          }
        });
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else if (typeof e === "string") {
          setError(e);
        } else {
          setError("Could not load SVG");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [inView, src, stroke, strokeWidth, duration, stagger]);

  return (
    <div className={`w-full ${className} h-full`}>
      {/* Aspect box; adjust as needed */}
      <div ref={boxRef} className="w-full aspect-[5/3] select-none h-full" />
      {!error ? null : (
        <p className="mt-2 text-sm text-red-200">
          Logo animation failed: {error}. Check the path in /public.
        </p>
      )}
      <style jsx>{`
        @keyframes sig-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
