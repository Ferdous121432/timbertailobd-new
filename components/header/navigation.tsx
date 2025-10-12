import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white mb-border">
      <div className="mx-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold text-blue-600 hover:opacity-80 transition-opacity">
            K
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 transition-colors text-base font-medium">
              Work
            </Link>
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 transition-colors text-base font-medium">
              About
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full transition-colors">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
