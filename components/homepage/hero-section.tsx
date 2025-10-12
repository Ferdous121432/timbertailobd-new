import React from "react";
import { ArrowRight } from "lucide-react";
import ImageSlideshow from "./ImageSlideshow";
import { slideImages } from "@/data/slide-image";

const HeroSection = () => {
  return (
    <section className="min-w-full pt-32 pb-20 px-6 mb-border bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ImageSlideshow images={slideImages} interval={3000} />
        </div>

        <div className="flex justify-center mt-20">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium group">
            View our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
