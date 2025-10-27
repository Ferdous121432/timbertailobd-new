"use client";
import React, { useRef, useEffect, useState } from "react";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroImages } from "@/data/mock";

const HeroSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="min-w-full pt-32 pb-20 px-6 mb-border bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="container mx-auto">
            {/* Welcome Badge */}
            <div className="text-center mb-8">
              <span className="inline-block text-xs md:text-base font-medium tracking-[0.2em] text-primary-color uppercase">
                WELCOME
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-center mb-8">
              <span className="block text-6xl md:text-7xl lg:text-8xl text-gray-900 leading-tight">
                Step Into The Craftverse
              </span>
              <span className="font-latin text-xl md:text-2xl lg:text-4xl ">
                of
              </span>
              <span className="block text-3xl md:text-4xl lg:text-6xl text-gray-900 leading-tight">
                Timber Tailor
              </span>
            </h1>

            {/* Residence Types */}
            <div className="flex justify-center text-primary-color items-center gap-4 mb-16">
              <p>Embrace The Elegance of Grain</p>
            </div>

            {/* Horizontal Scrolling Gallery */}
            <div className="relative">
              {canScrollLeft && (
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 opacity-90 hover:opacity-100"
                  aria-label="Scroll left">
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
              )}
              {canScrollRight && (
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 opacity-90 hover:opacity-100"
                  aria-label="Scroll right">
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>
              )}
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[400px] h-[300px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={image}
                      alt={`Residence ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        <div className="flex justify-center mt-20">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-primary-color hover:text-blue-700 transition-colors text-lg font-medium group">
            View our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
