"use client";
import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set target launch date (30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = () => {
    if (email && email.includes("@")) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="py-10 min-h-screen bg-gradient-to-br from-[#1B5B7A] via-[#2E7D96] to-[#F4A261] relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-[#F4A261]/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/15 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-[#F4A261]/10 rounded-full animate-pulse delay-500"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-[#F4A261] bg-clip-text text-transparent mb-4">
              Rami Hamadeh
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F4A261] to-white mx-auto rounded-full"></div>
          </div>

          {/* Main Heading */}
          <div className="mb-12 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
              Something Amazing is Coming Soon
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              We`re crafting innovative digital solutions that will transform
              your business. Get ready for cutting-edge technology and
              exceptional experiences.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12 animate-fade-in-delay">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm sm:text-base text-white/80 font-medium mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Email Subscription */}
          <div className="mb-12 animate-slide-up-delay">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">
                Be the first to know when we launch
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleEmailSubmit()}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button
                  onClick={handleEmailSubmit}
                  className="w-full bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-white font-semibold py-4 px-8 rounded-2xl hover:from-[#E76F51] hover:to-[#F4A261] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Notify Me When Ready
                </button>
              </div>

              {subscribed && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-green-100 animate-fade-in">
                  ✅ Thank you! We`ll notify you when we launch.
                </div>
              )}
            </div>
          </div>

          {/* Features Preview */}
          <div className="mb-12 animate-fade-in-delay-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  icon: "💻",
                  title: "Web Solutions",
                  desc: "Modern web applications",
                },
                {
                  icon: "📱",
                  title: "Mobile Apps",
                  desc: "Cross-platform development",
                },
                {
                  icon: "🚀",
                  title: "Digital Strategy",
                  desc: "Business transformation",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-white/80 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-delay-3">
            <p className="text-white/80 mb-6">Follow us for updates</p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: "📘", label: "Facebook" },
                { icon: "🐦", label: "Twitter" },
                { icon: "💼", label: "LinkedIn" },
                { icon: "📸", label: "Instagram" },
              ].map((social, index) => (
                <button
                  key={index}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-[#F4A261] hover:border-[#F4A261] transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Animations */}
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

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.9s both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
