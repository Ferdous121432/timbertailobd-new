import { logoImage } from "@/data/slide-image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center mb-6">
              <Image
                src={logoImage}
                alt="Timber- tailor Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Timber Tailor BD is your trusted partner for premium wood products
              and bespoke woodworking solutions. With a commitment to quality
              craftsmanship and customer satisfaction, we bring your visions to
              life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#furniture-design"
                  className="text-sm text-gray-400  hover:text-white transition-colors">
                  Furniture Design
                </a>
              </li>
              <li>
                <a
                  href="#woodworking"
                  className="text-sm text-gray-400 capitalize hover:text-white transition-colors">
                  Woodworking
                </a>
              </li>
              <li>
                <a
                  href="#interior-exterior"
                  className="text-sm text-gray-400 hover:text-white transition-colors">
                  Interior & Exterior Design
                </a>
              </li>
              <li>
                <a
                  href="#carpentry-services"
                  className="text-sm text-gray-400 hover:text-white transition-colors">
                  Carpentry Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-6">
              Contact
            </h3>
            <div className="flex flex-col md:flex-row gap-8">
              <ul className="space-y-3">
                <p className="">Office</p>
                <li className="text-sm text-gray-400">
                  Flat-A9, House-320/1, Road-02
                </li>
                <li className="text-sm text-gray-400">
                  Kawla, Dakshinkhan,Dhaka
                </li>
                <li>
                  <a
                    href="tel:1234567890"
                    className="text-sm text-gray-400 hover:text-white transition-colors">
                    (880) 1303-553688
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@timbertailorbd.com"
                    className="text-sm text-gray-400 hover:text-white transition-colors">
                    info@timbertailorbd.com
                  </a>
                </li>
              </ul>
              <ul className="space-y-3">
                <p>Factory</p>
                <li className="text-sm text-gray-400">Baligao, Tongibari</li>
                <li className="text-sm text-gray-400">Munshiganj</li>
                <li>
                  <a
                    href="tel:1234567890"
                    className="text-sm text-gray-400 hover:text-white transition-colors">
                    (880) 1303-553688
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@timbertailorbd.com"
                    className="text-sm text-gray-400 hover:text-white transition-colors">
                    info@timbertailorbd.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © 2025{" "}
              <span>
                <Link
                  href="https://firdous.pro"
                  className="text-yellow-400 hover:text-yellow-600 hover:font-bold transition-colors">
                  Firdous
                </Link>
              </span>
              . All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
