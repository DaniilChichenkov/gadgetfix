import { ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router";

import imageExample from "~/src/smarthponeServices.png";

const deviceCategories = [
  {
    title: "Смартфоны",
    brands: "Apple, Samsung, Xiaomi, Google, Honor и другие",
    href: "/services/smartphones",
  },
  {
    title: "Ноутбуки",
    brands: "Apple, Asus, Lenovo, HP, Dell, Acer и другие",
    href: "/services/laptops",
  },
  {
    title: "Планшеты",
    brands: "Apple, Samsung, Xiaomi, Lenovo и другие",
    href: "/services/tablets",
  },
  {
    title: "Консоли",
    brands: "PlayStation, Xbox, Nintendo и другие",
    href: "/services/consoles",
  },
  {
    title: "Умные часы",
    brands: "Apple, Samsung, Garmin, Huawei и другие",
    href: "/services/smartwatches",
  },
];

export default function DeviceCategoriesSection() {
  const { lang } = useParams();

  return (
    <section
      id="device-categories"
      aria-labelledby="device-categories-title"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl border border-blue-100 p-4 sm:p-6">
        <div className="mb-6">
          <h2
            id="device-categories-title"
            className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
          >
            Что нужно отремонтировать?
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Выберите категорию — откроется страница с услугами, моделями и
            полезной информацией.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {deviceCategories.map((category, index) => {
            const isLast = index === deviceCategories.length - 1;

            return (
              <Link
                key={category.href}
                to={`/${lang}/${category.href}`}
                aria-label={`Все услуги категории «${category.title}»`}
                className={`group flex overflow-hidden rounded-2xl border border-transparent bg-blue-50/70 p-3 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:p-4 ${
                  isLast
                    ? "col-span-2 flex-row items-center gap-4 sm:col-span-1 sm:flex-col sm:items-stretch sm:gap-0"
                    : "flex-col"
                }`}
              >
                {/* Device image */}
                <div
                  className={`relative shrink-0 ${
                    isLast
                      ? "aspect-square w-28 sm:mb-4 sm:aspect-[4/3] sm:w-full"
                      : "mb-4 aspect-[4/3] w-full"
                  }`}
                >
                  <img
                    src={imageExample}
                    alt={category.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-base font-bold leading-snug text-slate-950 sm:text-lg">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {category.brands}
                  </p>

                  <span className="mt-auto flex items-center justify-between gap-2 pt-4 text-xs font-semibold text-blue-500">
                    Все услуги категории
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
