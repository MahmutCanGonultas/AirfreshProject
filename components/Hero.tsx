"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const animatedTexts = [
    t("animatedText1"),
    t("animatedText2"),
    t("animatedText3"),
    t("animatedText4"),
    t("animatedText5"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 4000); // Slightly longer interval for smoother transitions
    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"
      style={{ paddingTop: "var(--header-height, 120px)" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-1000"></div>

        {/* Animated gradient orbs - Smoother animations */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s", transition: "all 1s ease-in-out" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-primary-600/15 rounded-full blur-3xl animate-pulse"
          style={{
            animationDuration: "5s",
            animationDelay: "1.5s",
            transition: "all 1s ease-in-out",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            animationDuration: "6s",
            animationDelay: "3s",
            transition: "all 1s ease-in-out",
          }}
        ></div>

        {/* Geometric shapes - Smoother rotation */}
        <div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-white/5 rotate-45 animate-spin"
          style={{
            animationDuration: "30s",
            transition: "transform 0.5s ease-in-out",
          }}
        ></div>
        <div
          className="absolute bottom-32 right-32 w-24 h-24 border-2 border-accent-500/10 rotate-12 animate-spin"
          style={{
            animationDuration: "25s",
            animationDirection: "reverse",
            transition: "transform 0.5s ease-in-out",
          }}
        ></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(85vh-120px)] py-12 lg:py-16">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge - Premium Collection with animation */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full group hover:bg-white/15 transition-all duration-500 ease-in-out">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-accent-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-accent-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-[0.15em]">
                {t("badge")}
              </span>
            </div>

            {/* Decorative number - Unique style */}
            <div className="relative inline-block">
              <span className="text-8xl md:text-9xl font-bold text-white/5 leading-none absolute -left-4 -top-4">
                01
              </span>
            </div>

            {/* Main Title Section */}
            <div className="space-y-6 relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2]">
                <span className="block mb-4">
                  <span
                    className="relative inline-block"
                    style={{ minHeight: "1.5em", height: "auto" }}
                  >
                    {animatedTexts.map((text, index) => (
                      <span
                        key={index}
                        className={`absolute left-0 top-0 text-white transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          index === currentTextIndex
                            ? "opacity-100 translate-y-0"
                            : index < currentTextIndex
                            ? "opacity-0 -translate-y-6"
                            : "opacity-0 translate-y-6"
                        }`}
                        style={{
                          lineHeight: "1.2",
                          display: "block",
                          willChange: "transform, opacity",
                        }}
                      >
                        {text}
                      </span>
                    ))}
                    {/* Invisible placeholder to maintain height */}
                    <span className="invisible">{animatedTexts[0]}</span>
                  </span>{" "}
                  <span className="text-accent-500">{t("titleAccent")}</span>
                </span>
              </h1>

              {/* Decorative accent line */}
              <div className="w-20 h-1 bg-gradient-to-r from-accent-600 to-transparent mt-6"></div>
            </div>

            {/* Description - More spacing */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0 mt-8">
              {t("subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                href={`/${locale}/products`}
                className="group inline-flex items-center justify-center px-8 py-4 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-all duration-500 ease-in-out shadow-xl hover:shadow-2xl hover:shadow-accent-600/50 transform hover:scale-[1.02] relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
                <span className="relative z-10 flex items-center gap-2">
                  {t("button1")}
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-500 ease-in-out backdrop-blur-sm"
              >
                {t("button2")}
              </Link>
            </div>
          </div>

          {/* Right - Image Section with unique design */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image Container - Premium design */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary-700/30 via-primary-800/20 to-accent-600/20 shadow-2xl border border-white/10 backdrop-blur-sm">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-600/10 via-transparent to-primary-600/10 animate-pulse z-10"></div>

                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/images/airfreshAll.jpg"
                    alt="Premium Collection"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Decorative corner elements - Animated */}
                <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-white/20 group-hover:border-accent-500/50 transition-colors">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-accent-500"></div>
                </div>
                <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-white/20 group-hover:border-accent-500/50 transition-colors">
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent-500"></div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-600/20 rounded-full blur-2xl animate-pulse"></div>
              <div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-600/15 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Small floating dots */}
              <div
                className="absolute top-1/4 right-0 w-2 h-2 bg-accent-500 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-1/3 left-0 w-2 h-2 bg-white/40 rounded-full animate-ping"
                style={{ animationDelay: "3.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center text-white/50 group cursor-pointer">
          <span className="text-xs mb-3 font-medium uppercase tracking-wider group-hover:text-accent-400 transition-colors">
            {t("scroll")}
          </span>
          <div className="relative">
            <div className="w-px h-16 bg-gradient-to-b from-white/40 via-white/20 to-transparent group-hover:from-accent-400 transition-colors"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
