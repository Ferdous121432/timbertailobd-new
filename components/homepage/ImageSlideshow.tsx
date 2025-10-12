"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageSlideshowProps {
  images: StaticImageData[];
  interval?: number; // ms
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  interval = 3000,
}) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, images.length, interval]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {images.map((src, idx) => (
        <div
          key={src}
          className={
            `absolute top-0 left-0 w-full h-full transition-opacity duration-500 ` +
            (idx === current
              ? idx % 2 === 0
                ? "opacity-100 z-10 animate-evenSlideIn"
                : "opacity-100 z-10 animate-oddSlideIn"
              : "opacity-0 z-0 pointer-events-none")
          }>
          <Image
            src={src}
            alt={`Slide ${idx + 1}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlideshow;
