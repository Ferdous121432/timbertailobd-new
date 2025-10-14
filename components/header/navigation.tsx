import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { logoImage } from "@/data/slide-image";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white mb-border">
      <div className="mx-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg md:text-2xl  font-bold text-primary-color hover:opacity-80 transition-opacity">
            <Image
              src={logoImage}
              alt="Timber Tailor BD"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>

          <div className="flex text-sm items-center gap-3 md:gap-6">
            <Link
              href="/projects"
              className="text-gray-900 hover:text-primary-color transition-colors  font-medium">
              Work
            </Link>
            <Link
              href="/"
              className="text-gray-900 hover:text-primary-color transition-colors  font-medium">
              About
            </Link>
            <Link href="#contact-us">
              <Button className="bg-primary-color hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors duration-300">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
