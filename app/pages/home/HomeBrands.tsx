import React from "react";

export default function HomeBrands() {
  return (
    <section
      aria-label="Бренды устройств, которые мы ремонтируем"
      className="mx-auto w-full max-w-[1360px] px-2 py-6 md:px-5 md:py-7"
    >
      <ul
        role="list"
        className="
          m-0 grid list-none grid-cols-5 items-center
          gap-x-3 gap-y-5 p-0 text-slate-500
          md:grid-cols-10 lg:gap-x-5
          [&>li]:flex [&>li]:h-8
          [&>li]:items-center [&>li]:justify-center
        "
      >
        {/* Apple */}
        <li>
          <span className="sr-only">Apple</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 28"
            fill="currentColor"
            className="h-6 w-5 md:h-7 md:w-6"
          >
            <path
              d="M17 0c.4 2.1-.7 4.2-2.1 5.5-1.4 1.3-3.1 1.8-4.2 1.6-.2-1.8.6-3.8 1.8-5C13.9.7 15.7.1 17 0ZM20.8 20.1c-.6 1.5-1 2.1-1.8 3.4-1.2 1.8-2.9 4-5 4-1.8 0-2.3-1.2-4.7-1.2-2.5.1-2.9 1.3-4.8 1.2-2.1-.1-3.7-2-4.9-3.8C-3.6 18.7-4 12.5-1.9 9.2-.4 6.9 1.9 5.6 4.1 5.6c2.2 0 3.6 1.2 5.4 1.2 1.6 0 2.7-1.2 5.4-1.2 2 0 4 .9 5.4 2.6-4.6 2.5-3.8 9.1.5 11.9Z"
              transform="translate(3 0) scale(.84 1)"
            />
          </svg>
        </li>

        {/* Samsung */}
        <li>
          <span className="text-[8px] font-black tracking-tight sm:text-[10px] md:text-[9px] lg:text-[11px]">
            SAMSUNG
          </span>
        </li>

        {/* Xiaomi */}
        <li>
          <span className="sr-only">Xiaomi</span>
          <span
            aria-hidden="true"
            className="grid size-6 place-items-center rounded-[7px] bg-slate-500 pr-0.5 text-base leading-none font-extrabold tracking-[-2px] text-white lg:size-7 lg:text-lg"
          >
            mi
          </span>
        </li>

        {/* Huawei */}
        <li>
          <span className="inline-flex items-center gap-1 text-[7px] font-extrabold sm:text-[9px] md:text-[8px] lg:text-[10px]">
            <span aria-hidden="true" className="text-base lg:text-xl">
              ✺
            </span>
            HUAWEI
          </span>
        </li>

        {/* OPPO */}
        <li>
          <span className="text-xl leading-none font-medium tracking-[-1px] lg:text-2xl">
            oppo
          </span>
        </li>

        {/* Vivo */}
        <li>
          <span className="text-xl leading-none font-medium tracking-[-1px] lg:text-2xl">
            vivo
          </span>
        </li>

        {/* ASUS */}
        <li>
          <span className="text-base leading-none font-black tracking-[-1px] italic lg:text-xl">
            ASUS
          </span>
        </li>

        {/* Lenovo */}
        <li>
          <span className="text-xs leading-none font-extrabold tracking-tight lg:text-base">
            Lenovo
          </span>
        </li>

        {/* Sony */}
        <li>
          <span className="font-serif text-sm leading-none font-bold tracking-wider lg:text-lg">
            SONY
          </span>
        </li>

        {/* HP */}
        <li>
          <span className="sr-only">HP</span>
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-full border border-current pr-0.5 pb-0.5 text-xl leading-none font-bold tracking-[-2px] italic lg:size-8 lg:text-2xl"
          >
            hp
          </span>
        </li>
      </ul>
    </section>
  );
}
