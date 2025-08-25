"use client";
import SignatureDraw from "./SignatureDraw";

export default function LogoDrawSection() {
  return (
    <div className="relative w-full h-full">
      {/* soft glow ring */}
      <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl opacity-30 pointer-events-none" />
      <div className="relative rounded-3xl h-full border border-white/15 bg-white/5/50 backdrop-blur-sm p-4">
        <SignatureDraw
          src="/icons/rami-hamadeh-signature.svg"
          stroke="white"
          strokeWidth={7}
          duration={2.2}
          stagger={0.32}
        />
      </div>
      <p className="mt-3 text-center lg:text-left text-white/80 text-sm opacity-75">
        The Rami Hamadeh signature — drawn live
      </p>
    </div>
  );
}
