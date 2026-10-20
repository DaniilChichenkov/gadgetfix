import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

import smartphoneServicesImageExample from "~/src/smarthponeServices.png";

const categories = [
  { id: "smartphones", title: "Смартфоны" },
  { id: "laptops", title: "Ноутбуки" },
  { id: "tablets", title: "Планшеты" },
  { id: "consoles", title: "Игровые консоли" },
  { id: "smartwatches", title: "Умные часы" },
];
export default function ServicesAndPricesSection() {
  return (
    <section
      aria-labelledby="services-prices-title"
      className="mx-auto w-full max-w-7xl py-8 md:py-12 px-4 lg:px-8"
    >
      <div className="mb-6 flex items-end justify-between gap-6">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-widest text-blue-500 uppercase">
            Ремонт вашей техники
          </p>

          <h2
            id="services-prices-title"
            className="text-2xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]"
          >
            Наши услуги и цены
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
            Выберите устройство, чтобы посмотреть услуги и стоимость ремонта.
          </p>
        </div>

        <button
          type="button"
          className="hidden min-h-10 shrink-0 items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 md:inline-flex"
        >
          Все цены
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </button>
      </div>

      <ul
        role="list"
        className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:gap-4 lg:grid-cols-5"
      >
        {categories.map((category) => (
          <li
            key={category.id}
            className="min-w-0 last:col-span-2 lg:last:col-span-1"
          >
            <button
              type="button"
              className="group flex h-full w-full flex-col rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 text-left transition-colors hover:border-blue-500/30 hover:bg-blue-500/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 sm:p-5"
            >
              <div className="mb-5 flex h-28 w-full items-center justify-center overflow-hidden sm:h-36 lg:h-40">
                {/* Add your image source here. */}
                <img
                  src={smartphoneServicesImageExample}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="mt-auto w-full">
                <h3 className="text-sm leading-snug font-bold text-slate-900 transition-colors group-hover:text-blue-500 sm:text-base">
                  {category.title}
                </h3>

                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                    Узнать стоимость
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-blue-500"
                  />
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/5 px-5 py-3 text-sm font-semibold text-blue-500 transition-colors hover:bg-blue-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 md:hidden"
      >
        Все цены
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </button>
    </section>
  );
}
