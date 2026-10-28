import { ArrowUpRight, Layers, Shield, Smartphone } from "lucide-react";

import screenProtectionImage from "~/src/screen-protection.png";

export default function ScreenProtectionCTA() {
  return (
    <section aria-label="Защита экрана" className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-100 bg-blue-50 p-5 sm:p-8 lg:p-10 xl:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/70 to-blue-100/60"
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-x-8">
          {/* Heading */}
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <p className="mb-2 text-xs font-semibold tracking-widest text-blue-500 uppercase flex justify-start items-center gap-2">
              <Shield aria-hidden="true" className="size-6 shrink-0" />
              Защита экрана
            </p>

            <h2 className="text-2xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]">
              Защитите экран
              <span className="block">до первой царапины</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
              Подберём стекло или плёнку под вашу модель и аккуратно установим в
              салоне.
            </p>
          </div>

          {/* Below the heading on mobile; right column on desktop. */}
          <div className="relative flex min-w-0 items-center justify-center lg:col-start-2 lg:row-span-3 lg:row-start-1">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70"
            />

            <img
              src={screenProtectionImage}
              alt="Смартфон с защитным стеклом и гибкой защитной плёнкой"
              width={1254}
              height={1254}
              loading="lazy"
              decoding="async"
              className="relative mx-auto block h-auto w-full max-w-md object-contain sm:max-w-lg lg:max-w-none"
            />
          </div>

          {/* Protection options */}
          <div className="grid min-w-0 gap-3 items-start sm:grid-cols-2 lg:col-start-1 lg:row-start-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/90 p-4">
              <Smartphone
                aria-hidden="true"
                strokeWidth={1.5}
                className="mt-0.5 size-8 shrink-0 text-blue-500"
              />

              <div className="min-w-0">
                <h3 className="text-base font-bold text-slate-950">
                  Защитное стекло
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  Твёрдая поверхность и привычные ощущения
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/90 p-4">
              <Layers
                aria-hidden="true"
                strokeWidth={1.5}
                className="mt-0.5 size-8 shrink-0 text-blue-500"
              />

              <div className="min-w-0">
                <h3 className="text-base font-bold text-slate-950">
                  Защитная плёнка
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  Тонкая и гибкая защита от царапин
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="lg:col-start-1 lg:row-start-3">
            <button
              type="button"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-3xl bg-blue-500 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-50 sm:w-auto"
            >
              Подобрать защиту
              <ArrowUpRight aria-hidden="true" className="size-5 shrink-0" />
            </button>

            <p className="mt-3 text-center text-sm leading-relaxed text-slate-500 sm:text-left">
              Поможем выбрать подходящий вариант
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
