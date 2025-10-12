import React from "react";
import { mockClients } from "@/data/mock";

const ClientListSection = () => {
  return (
    <section className="py-20 px-6  bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          People we've made things for:
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Over the years I've had the privilege work with many great people and
          companies in both design and photography.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {mockClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors cursor-pointer group">
              <span className="text-gray-400 group-hover:text-blue-600 transition-colors font-medium">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientListSection;
