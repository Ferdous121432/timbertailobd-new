import React from "react";

import { projects } from "@/data/mock";
import { Card } from "@/components/ui/card";

const ProjectGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br mt-10 from-[#f5f7fa] to-[#e8ecf1] py-16 px-4 font-sans">
      <div className="max-w-[1400px] mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight font-sans">
          Our Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-normal max-w-xl mb-8 font-sans">
          Explore our diverse portfolio of innovative solutions and creative
          work
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto auto-rows-[320px] md:auto-rows-[280px]">
        {projects.map((project) => (
          <Card
            key={project.id}
            className={`relative overflow-hidden rounded-2xl border-none shadow-lg transition-transform duration-300 cursor-pointer bg-white group ${
              project.gridSize === "large"
                ? "col-span-2 row-span-2"
                : project.gridSize === "wide"
                ? "col-span-2 row-span-1"
                : project.gridSize === "tall"
                ? "col-span-1 row-span-2"
                : "col-span-1 row-span-1"
            }`}>
            <div className="relative w-full h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                <div className="transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight font-sans">
                    {project.title}
                  </h3>
                  <p className="text-base text-white/90 leading-relaxed m-0 font-sans">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
