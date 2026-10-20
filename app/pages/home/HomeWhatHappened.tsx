import React from "react";

import {
  Smartphone,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import brokenScreen from "~/src/brokenScreen.png";
import damagedCamera from "~/src/damagedCamera.png";

const servicesConfig = [
  {
    img: brokenScreen,
    title: "Разбит экран",
  },
  {
    img: damagedCamera,
    title: "Проблемы с камерой",
  },
  {
    img: brokenScreen,
    title: "Быстро разряжается",
  },
  {
    img: brokenScreen,
    title: "Попал в воду",
  },
  {
    img: brokenScreen,
    title: "Не заряжается",
  },
  {
    img: brokenScreen,
    title: "Проблемы с Face ID",
  },
  {
    img: brokenScreen,
    title: "Разбито заднее стекло",
  },
  {
    img: brokenScreen,
    title: "Другое",
  },
];
export default function DeviceProblemsSection() {
  return (
    <section
      aria-labelledby="device-problems-title"
      className="mx-auto w-full max-w-[1360px] py-8 md:py-12 px-4 lg:px-8"
    >
      <div className="mb-6 flex items-end justify-between gap-6">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-widest text-blue-500 uppercase">
            Найдём решение
          </p>

          <h2
            id="device-problems-title"
            className="max-w-2xl text-2xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]"
          >
            Что случилось с вашим устройством?
          </h2>
        </div>

        <button
          type="button"
          className="hidden min-h-10 shrink-0 items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 md:inline-flex"
        >
          Все услуги
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </button>
      </div>

      <ul
        role="list"
        className="m-0 grid list-none grid-cols-2 gap-3 p-0 md:grid-cols-4 xl:grid-cols-8"
      >
        {servicesConfig.map((service) => (
          <li key={service.title} className="min-w-0">
            <button
              type="button"
              className="group flex h-full w-full flex-col rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 text-left transition-colors hover:border-blue-500/30 hover:bg-blue-500/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              <div className="mb-4 flex h-24 w-full items-center justify-center overflow-hidden rounded-xl lg:h-28 xl:h-24">
                <img
                  src={brokenScreen}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="mt-auto flex min-h-10 w-full items-end justify-between gap-2">
                <span className="text-sm leading-snug font-semibold text-slate-900 transition-colors group-hover:text-blue-500">
                  {service.title}
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="mb-0.5 size-4 shrink-0 text-slate-400 transition-colors group-hover:text-blue-500"
                />
              </div>
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/5 px-5 py-3 text-sm font-semibold text-blue-500 transition-colors hover:bg-blue-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 md:hidden"
      >
        Все услуги
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </button>
    </section>
  );
}
