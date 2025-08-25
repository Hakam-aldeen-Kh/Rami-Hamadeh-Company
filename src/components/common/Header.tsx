"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<"home" | "services" | "portfolio" | "blogs" | "about" | "contact">("home");
  const headerRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { label: "Home", href: "#home", number: "01" },
    { label: "Services", href: "#services", number: "02" },
    { label: "Portfolio", href: "#portfolio", number: "03" },
    { label: "Blogs", href: "#blogs", number: "04" },
    { label: "About", href: "#about", number: "05" },
    { label: "Contact", href: "#contact", number: "06" },
  ] as const;

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const header = headerRef.current;
      if (!header) return;
      const rect = header.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const header = headerRef.current;
    header?.addEventListener("mousemove", handleMouseMove);
    return () => header?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setActiveSection(entry.target.id as typeof activeSection);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.3, 0.7],
      rootMargin: "-20% 0px -60% 0px",
    });

    navLinks.forEach((link) => {
      const el = document.querySelector<HTMLElement>(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Body scroll lock
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector<HTMLElement>(href);
    if (el) {
      const headerHeight = 100;
      const y = el.offsetTop - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const CircularMenu = () => (
    <div
      className="relative w-16 h-16 group cursor-pointer"
      onClick={() => setMenuOpen((o) => !o)}
    >
      {/* Outer rotating ring */}
      <div
        className={`absolute inset-0 border-2 border-[#FBB040] rounded-full transition-all duration-700 ${
          menuOpen ? "rotate-180 border-[#046180]" : "rotate-0"
        } ${scrolled ? "scale-90" : "scale-100"}`}
      >
        <div className="absolute inset-2 border border-[#00303D]/30 rounded-full" />
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`transition-all duration-500 ${
            menuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
          }`}
        >
          {menuOpen ? (
            <div className="w-6 h-6 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="block w-4 h-0.5 bg-[#046180] rotate-45 absolute" />
                <span className="block w-4 h-0.5 bg-[#046180] -rotate-45 absolute" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-1">
              <div className="w-4 h-0.5 bg-[#00303D] rounded-full" />
              <div className="w-3 h-0.5 bg-[#046180] rounded-full ml-auto" />
              <div className="w-4 h-0.5 bg-[#FBB040] rounded-full" />
            </div>
          )}
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FBB040]/10 to-[#046180]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  return (
    <>
      <header
        ref={headerRef}
        className="fixed w-full top-0 left-0 z-50 transition-all duration-700 ease-out"
      >
        {/* Interactive background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, #FBB040, transparent 40%)`,
          }}
        />

        <div
          className={`w-full ${
            scrolled
              ? "bg-[#00303D]/95 backdrop-blur-2xl shadow-2xl border-b border-[#046180]/20"
              : "bg-white/90 backdrop-blur-xl shadow-xl border-b border-white/30"
          } rounded-b-3xl px-6 py-4 transition-all duration-500`}
        >
          <nav className="flex justify-between items-center">
            {/* Avant-garde Logo */}
            <Link href={"/"} className="flex items-center group relative">
              <div className="relative">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src="/images/logo.png"
                      alt="Rami Hamadeh"
                      width={scrolled ? 45 : 55}
                      height={scrolled ? 30 : 35}
                      className="relative z-10 transition-all duration-500"
                    />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FBB040] rotate-45 opacity-60 group-hover:opacity-100 transition-all duration-300" />
                  </div>

                  <div
                    className={`${
                      scrolled ? "text-white" : "text-[#00303D]"
                    } transition-colors duration-500`}
                  >
                    <div className="text-sm font-bold tracking-wider">RAMI</div>
                    <div className="text-xs tracking-[0.2em] opacity-60">
                      HAMADEH
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FBB040] to-[#046180] group-hover:w-full transition-all duration-500" />
              </div>
            </Link>

            {/* Minimalist Desktop Navigation */}
            <div className="hidden xl:flex items-center">
              <div className="flex items-center space-x-8 mr-8">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="group relative flex flex-col items-center py-2"
                    >
                      <span
                        className={`text-xs font-mono mb-1 transition-all duration-300 ${
                          isActive
                            ? scrolled
                              ? "text-[#FBB040]"
                              : "text-[#046180]"
                            : scrolled
                            ? "text-white/40"
                            : "text-[#00303D]/40"
                        }`}
                      >
                        {link.number}
                      </span>

                      <span
                        className={`text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? scrolled
                              ? "text-white"
                              : "text-[#00303D]"
                            : scrolled
                            ? "text-white/70 hover:text-white"
                            : "text-[#00303D]/70 hover:text-[#00303D]"
                        }`}
                      >
                        {link.label}
                      </span>

                      <div
                        className={`mt-1 w-1 h-1 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#FBB040] scale-100"
                            : "bg-transparent scale-0 group-hover:bg-[#046180]/50 group-hover:scale-100"
                        }`}
                      />

                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-[#FBB040] to-[#046180] group-hover:w-full transition-all duration-300" />
                    </button>
                  );
                })}
              </div>

              <button
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group ${
                  scrolled
                    ? "bg-gradient-to-r from-[#FBB040] to-[#046180] text-white hover:shadow-2xl hover:shadow-[#FBB040]/25"
                    : "bg-[#00303D] text-white hover:bg-[#046180] hover:shadow-xl"
                }`}
              >
                <span className="relative z-10">{"Let's Talk"}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
            </div>

            {/* Circular Mobile Menu Button */}
            <div className="xl:hidden">
              <CircularMenu />
            </div>
          </nav>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-700 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Split-screen background */}
        <div className="absolute inset-0">
          <div
            className={`absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-[#00303D] to-[#046180] transition-all duration-700 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          />
          <div
            className={`absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-[#046180] to-[#FBB040] transition-all duration-700 delay-100 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          />
        </div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white rotate-45" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white/30 rotate-12" />
        </div>

        {/* Menu content */}
        <div className="relative h-full flex flex-col justify-center items-center px-8 pt-24">
          <nav className="text-center mb-8">
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transform transition-all duration-700 ${
                    menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 80 + 400}ms` }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="group flex items-center justify-between w-full max-w-sm mx-auto px-6 py-3 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-white/40 font-mono text-xs w-8 text-left">
                        {link.number}
                      </span>
                      <span className="text-white text-lg font-normal tracking-wide group-hover:text-[#FBB040] transition-colors duration-300">
                        {link.label}
                      </span>
                    </div>
                    <div className="w-4 h-4 border-right border-top border-white/30 rotate-45 group-hover:border-[#FBB040] transition-all duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`text-center space-y-3 transform transition-all duration-700 delay-700 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="text-white/50 text-xs tracking-wider uppercase">Get in Touch</div>
            <button className="px-6 py-2.5 border border-[#FBB040] text-[#FBB040] rounded-full hover:bg-[#FBB040] hover:text-white transition-all duration-300 text-sm font-medium">
              Start a Project
            </button>
          </div>

          <div
            className={`absolute bottom-6 left-0 right-0 text-center transform transition-all duration-700 delay-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center space-x-4 text-white/30 text-xs">
              <span>© 2024</span>
              <div className="w-1 h-px bg-[#FBB040]" />
              <span>Rami Hamadeh</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
