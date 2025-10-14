import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const ModernLivingSection = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block text-xs font-medium tracking-[0.2em] text-pribg-primary-color uppercase">
            DESIGNER RESIDENCES
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl text-gray-900 mb-8">
          Discover the Art of Timeless Wooden Creations
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
          A trusted name in timber, we provide premium wood products and custom
          solutions. With expert craftsmanship and a commitment to excellence,
          we build for lasting quality
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-primary-color hover:bg-[#d14d36] text-white px-8 py-3 text-sm font-medium tracking-wider transition-all duration-300 hover:shadow-lg flex items-center gap-2">
            CONTACT US
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModernLivingSection;
