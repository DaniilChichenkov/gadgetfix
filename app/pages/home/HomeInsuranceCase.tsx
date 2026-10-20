import { ArrowUpRight, Check } from "lucide-react";

import imageExample from "~/src/smarthponeServices.png";

const benefits = [
  "Согласуем стоимость до ремонта",
  "Гарантия на выполненные работы",
  "Бережное отношение к вашей технике",
  "Независимый сервис Apple",
  "Опытные специалисты",
  "Удобная отправка через почтомат",
];

export default function InsuranceSection() {
  return (
    <section
      aria-labelledby="insurance-title"
      className="mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-[#202020] p-3 text-white md:grid md:grid-cols-[1.2fr_1fr] md:gap-4 md:p-5 lg:gap-6 lg:p-6"
    >
      {/* Insurance offer */}
      <div className="relative isolate min-h-[260px] overflow-hidden rounded-2xl p-5 md:min-h-[300px] md:p-4 lg:p-5">
        <div className="relative z-10 w-[75%] max-w-[320px]">
          <p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-white/50 uppercase">
            Gadget Care
          </p>

          <h2
            id="insurance-title"
            className="text-[26px] leading-tight font-bold tracking-tight md:text-3xl lg:text-[34px]"
          >
            Страховой случай?
          </h2>

          <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-white/75 lg:text-base">
            Поможем вам со всем процессом — быстро и без стресса.
          </p>

          <button
            type="button"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition-colors hover:bg-blue-500/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            Начать процесс
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </button>
        </div>

        {/* Add your image source here. */}
        <img
          src={imageExample}
          alt=""
          loading="lazy"
          className="pointer-events-none absolute -right-28 -bottom-10 w-[290px] max-w-none object-contain opacity-70 md:-right-24 md:-bottom-12 md:w-[330px] lg:-right-16 lg:w-[370px] lg:opacity-100"
        />
      </div>

      {/* Service benefits */}
      <div className="relative rounded-2xl border border-white/5 bg-white/[0.06] p-5 md:flex md:flex-col md:justify-center md:p-6 lg:p-7">
        <h3 className="max-w-sm text-xl leading-snug font-semibold tracking-tight lg:text-2xl">
          Качество, скорость и честная цена
        </h3>

        <ul role="list" className="mt-5 space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-[18px] shrink-0 text-blue-500"
                strokeWidth={2.5}
              />

              <span className="text-sm leading-relaxed text-white/80">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
