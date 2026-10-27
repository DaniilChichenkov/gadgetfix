import React from "react";

import {
  Smartphone,
  Tablet,
  Laptop,
  Gamepad2,
  Watch,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import brokenScreen from "~/src/brokenScreen.png";
import damagedCamera from "~/src/damagedCamera.png";

import type { ReactNode } from "react";

// Device category selector
type DeviceCategoryCardProps = {
  text: string;
  icon?: ReactNode;
  isActive?: boolean;
} & ({ href: string; onClick?: never } | { href?: never; onClick: () => void });

export function DeviceCategoryCard({
  href,
  icon,
  text,
  isActive = false,
  onClick,
}: DeviceCategoryCardProps) {
  const className = `
    inline-flex min-h-20 min-w-0 flex-col
    items-center justify-center gap-2
    rounded-2xl border px-3 py-3
    text-center text-xs font-medium transition-colors
    md:min-h-14 lg:flex-row md:gap-3 md:px-5 md:text-sm
    focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-blue-500
    ${
      isActive
        ? "border-blue-500 bg-blue-50 text-blue-500"
        : "border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-slate-50"
    }
  `;

  const content = (
    <>
      <span
        aria-hidden="true"
        className="
          grid size-6 shrink-0 place-items-center
          [&>svg]:size-full
          [&>img]:size-full [&>img]:object-contain
        "
      >
        {icon}
      </span>

      <span className="min-w-0 leading-tight">{text}</span>
    </>
  );

  if (href !== undefined) {
    return (
      <a
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={className}
    >
      {content}
    </button>
  );
}

const categoriesConfig = [
  {
    icon: <Smartphone />,
    text: "Смартфоны",
    href: "/",
  },
  {
    icon: <Tablet />,
    text: "Плашнеты",
    href: "/",
  },
  {
    icon: <Laptop />,
    text: "Ноутбуки",
    href: "/",
  },
  {
    icon: <Gamepad2 />,
    text: "Консоли",
    href: "/",
  },
  {
    icon: <Watch />,
    text: "Умные часы",
    href: "/",
  },
];
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

      {/* Device category selector */}
      <p className="text-xs text-slate-700">Выберите устройство и проблему</p>
      <div className="w-full lg:w-10/12 xl:w-8/12 grid grid-cols-2 md:grid-cols-5 gap-2 mt-2">
        {categoriesConfig.map((item) => (
          <DeviceCategoryCard
            key={`device-category-selector-${item.text}`}
            {...item}
          />
        ))}
      </div>
      <div className="divider">
        <ChevronDown className="shrink-0" size={20} />
      </div>

      {/* List of problems for a certain category of devices */}
      <ul
        role="list"
        className="m-0 grid list-none grid-cols-2 gap-3 p-0 md:grid-cols-4 xl:grid-cols-8 mt-5"
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
