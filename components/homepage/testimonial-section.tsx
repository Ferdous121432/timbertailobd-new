import React from "react";
import { mockTestimonial } from "@/data/mock";

const TestimonialSection = () => {
  return (
    <section className="py-32 px-6 mb-border bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <blockquote className="text-xl md:text-3xl font-bold text-gray-900 leading-tight mb-12">
          {mockTestimonial.quote}
        </blockquote>

        <div className="flex items-center gap-4">
          <img
            src={mockTestimonial.avatar}
            alt={mockTestimonial.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h4 className="text-xl font-bold text-gray-900">
              {mockTestimonial.name}
            </h4>
            <p className="text-gray-600">{mockTestimonial.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
