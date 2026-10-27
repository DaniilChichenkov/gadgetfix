import { ArrowUpRight, Clock, Headphones, MapPin, Phone } from "lucide-react";

import imageExample from "~/src/smarthponeServices.png";

const outlineButtonClassName =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-blue-500 bg-white px-4 py-2.5 text-xs font-semibold text-blue-500 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

export default function RepairPreFooter() {
  return (
    <section
      id="contacts"
      aria-label="Контакты и помощь"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Location */}
        <article className="grid grid-cols-[88px_minmax(0,1fr)] gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[112px_minmax(0,1fr)] lg:grid-cols-[80px_minmax(0,1fr)] xl:grid-cols-[112px_minmax(0,1fr)]">
          <div className="relative min-h-36 overflow-hidden rounded-xl bg-blue-50">
            <img
              src={imageExample}
              alt="Салон GADGET в Таллине"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-col">
            <h2 className="text-base font-bold leading-snug text-slate-950">
              В салоне в Таллине
            </h2>

            <address className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600 not-italic">
              <p className="flex items-start gap-2">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                  strokeWidth={1.7}
                />
                <span>Tartu mnt 50a, Tallinn</span>
              </p>

              <a
                href="tel:+37259818448"
                className="flex items-center gap-2 rounded-sm transition-colors hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Phone
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-blue-500"
                  strokeWidth={1.7}
                />
                <span>+372 59 818 448</span>
              </a>
            </address>

            <div className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-slate-600">
              <Clock
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                strokeWidth={1.7}
              />
              <div>
                <p>Пн–Пт 09:00–19:00</p>
                <p>Сб 11:00–15:00</p>
              </div>
            </div>

            <div className="mt-auto pt-4">
              <button type="button" className={outlineButtonClassName}>
                Посмотреть на карте
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
              </button>
            </div>
          </div>
        </article>

        {/* Postal repair */}
        <article className="grid grid-cols-[88px_minmax(0,1fr)] gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[112px_minmax(0,1fr)] lg:grid-cols-[80px_minmax(0,1fr)] xl:grid-cols-[112px_minmax(0,1fr)]">
          <div className="relative min-h-36 overflow-hidden rounded-xl bg-blue-50">
            <img
              src={imageExample}
              alt="Почтомат для отправки устройства в ремонт"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-col">
            <h2 className="text-base font-bold leading-snug text-slate-950">
              Ремонт через почтомат
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Отправьте устройство из любой точки Эстонии. Мы проведём
              диагностику, согласуем ремонт и отправим его обратно.
            </p>

            <div className="mt-auto pt-4">
              <button type="button" className={outlineButtonClassName}>
                Как отправить
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
