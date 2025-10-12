import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" w-full bg-white mt-border">
      <div className=" py-12 mx-border ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mx- ">
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-5 h-5 text-primary-color fill-primary-color" />
              <span>MADE</span>
            </div>

            <p className="text-primary-color font-medium">KUS—STUDIO</p>

            <div className="flex items-center gap-6">
              <span className="text-gray-600">FORM</span>
              <span className="text-gray-400">&</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
