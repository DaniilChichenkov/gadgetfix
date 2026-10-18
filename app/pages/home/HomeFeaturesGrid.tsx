import React from "react";

import { ShieldCheck, Search, Tag } from "lucide-react";

const featureGridConfig = [
  { icon: <ShieldCheck size={30} />, text: "Гарантия на ремонт" },
  { icon: <Search size={30} />, text: "Точная диагностика" },
  { icon: <Tag size={30} />, text: "Согласованная цена" },
];
const HomeFeaturesGrid = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-blue-50 rounded-3xl mt-3">
        <div className="grid grid-cols-3 items-center">
          {featureGridConfig.map((item, i, arr) => (
            <div
              key={`feature-grid-${item.text}`}
              className={`w-full ${i < arr.length - 1 && "md:border-r-2 md:border-gray-200"}`}
            >
              <p className="flex flex-col items-center gap-2 lg:gap-3 text-center">
                <span className="text-blue-500">{item.icon}</span> {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturesGrid;
