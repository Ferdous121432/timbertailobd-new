import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

function ContactWhatsApp() {
  return (
    <>
      <a
        href="https://wa.me/8801722249835?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services!"
        target="_blank"
        rel="noopener noreferrer">
        <Button className="bg-primary-color hover:bg-[#d14d36] text-white px-8 py-3 text-sm font-medium tracking-wider transition-all duration-300 hover:shadow-lg flex items-center gap-2">
          CONTACT US
          <ArrowRight className="w-4 h-4" />
        </Button>
      </a>
    </>
  );
}

export default ContactWhatsApp;
