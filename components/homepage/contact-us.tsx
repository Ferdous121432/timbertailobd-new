import React from "react";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { residenceTypes } from "@/data/mock";
import ContactWhatsApp from "../shared/contact-whatsapp";

const ContactSection = () => {
  return (
    <section id="contact-us" className="bg-[#F5F3EF] py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block text-xs font-medium tracking-[0.2em] text-primary-color uppercase">
            Ready to bring your ideas to life?
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-8">
          Make It Yours
        </h2>

        {/* Residence Types */}
        <div className="flex justify-center items-center gap-4 mb-12">
          Embrace The Elegance of Grain
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4">
          <ContactWhatsApp />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
