import {
  ArrowUpRight,
  ChevronRight,
  FileCheck,
  Search,
  ShieldCheck,
} from "lucide-react";

import imageExample from "~/src/smarthponeServices.png";

import Breadcrumbs from "./Breadcrumbs";

const benefits = [
  {
    icon: Search,
    title: "Диагностика",
    description: "перед ремонтом",
  },
  {
    icon: FileCheck,
    title: "Согласование стоимости",
    description: "до начала работ",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия",
    description: "на ремонт",
  },
];

export default function ServicesHero({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section
      aria-labelledby="services-hero-title"
      className="mx-auto w-full max-w-7xl py-4 sm:px-6 lg:px-8"
    >
      <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"
        />

        <div className="grid grid-cols-1 gap-6 p-5 sm:p-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-7 lg:p-12">
          {/* Breadcrumb and introduction */}
          <div className="lg:col-start-1 lg:row-start-1">
            <Breadcrumbs />

            <h1
              id="services-hero-title"
              className="max-w-xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl xl:text-[54px]"
            >
              {title}
            </h1>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg sm:aspect-[16/10] lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:aspect-auto lg:max-w-none">
            <img
              src={imageExample}
              alt="Смартфон, ноутбук, планшет, игровая консоль и умные часы"
              className="h-full w-full object-contain object-center"
            />
          </div>

          {/* Actions — UI only */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-start-1 lg:row-start-2">
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Подобрать ремонт
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </button>

            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-blue-500 bg-white/60 px-7 py-3 text-sm font-semibold text-blue-500 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Выбрать устройство
            </button>
          </div>

          {/* Benefits */}
          <ul className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-10 lg:col-start-1 lg:row-start-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/70 px-2 py-3 text-center lg:flex-row lg:items-start lg:bg-transparent lg:p-0 lg:text-left"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue-500">
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={1.8}
                  />
                </span>

                <div className="lg:pt-1">
                  <p className="text-xs font-semibold leading-snug text-slate-900 sm:text-sm">
                    {title}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-slate-500">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
