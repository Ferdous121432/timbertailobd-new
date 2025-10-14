"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { detailsTabs } from "@/data/mock";
import { Button } from "../ui/button";

const DetailsAmenitiesSection = () => {
  const [activeTab, setActiveTab] = useState("furniture-design");
  const activeContent = detailsTabs.find((tab) => tab.id === activeTab);

  return (
    <section id="details" className="bg-[#F5F3EF] py-24 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-medium tracking-[0.2em] text-primary-color uppercase mb-6">
            DETAILS & AMENITIES
          </span>
          <h2 className="text-5xl md:text-6xl text-gray-900">
            Home is the Destination
          </h2>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto flex flex-col md:flex-row justify-center bg-transparent border-b border-gray-300 rounded-none h-auto p-0 mb-12">
            {detailsTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex-1 text-xs md:text-base font-medium tracking-wider uppercase px-6 py-4 bg-transparent border-b-2 border-transparent data-[state=active]:border-gray-900 data-[state=active]:bg-transparent rounded-none text-gray-600 data-[state=active]:text-gray-900 hover:text-gray-900 transition-all">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {detailsTabs.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="mt-0 animate-in fade-in-50 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                {/* Image */}
                <div className="order-2 md:order-1">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="order-1 md:order-2 space-y-6">
                  <div className="text-3xl md:font-6xl font-light text-gray-300">
                    0{detailsTabs.indexOf(tab) + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl text-gray-900 leading-tight">
                    {tab.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {tab.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300">
                      {tab.linkText}
                    </Button>
                    <Button className="bg-primary-color hover:bg-[#d14d36] text-white px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 hover:shadow-lg flex items-center gap-2">
                      schedule a tour
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DetailsAmenitiesSection;
