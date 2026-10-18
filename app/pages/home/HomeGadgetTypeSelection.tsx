import { ArrowRight } from "lucide-react";
import React from "react";

import smartphoneServicesImageExample from "~/src/smarthponeServices.png";

const gadgetSelectionConfig = [
  {
    title: "Смартфоны",
    image: smartphoneServicesImageExample,
  },
  {
    title: "Планшеты",
    image: smartphoneServicesImageExample,
  },
  {
    title: "Ноутбуки",
    image: smartphoneServicesImageExample,
  },
  {
    title: "Игровые консоли",
    image: smartphoneServicesImageExample,
  },
];
const HomeGadgetTypeSelection = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center md:text-left">
            Ремонт, которому можно доверять
          </h2>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gadgetSelectionConfig.map((item) => (
            <li key={`gadget-type-selection-${item.title}`}>
              <a href="#" className="group block">
                <div className="card bg-base-200 w-full shadow-sm">
                  <figure className="h-40 lg:h-32 w-full overflow-hidden">
                    <img
                      src={smartphoneServicesImageExample}
                      alt={`Services-${item.title}`}
                      className="h-full w-full object-cover object-top"
                    />
                  </figure>
                  <div className="card-body flex flex-row justify-between items-center rounded-t-3xl border-t border-gray-100 bg-white relative z-10">
                    <h2 className="card-title text-lg text-nowrap">
                      {item.title}
                    </h2>
                    <button className="text-blue-500">
                      <ArrowRight />
                    </button>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeGadgetTypeSelection;
