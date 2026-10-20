import {
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  Headphones,
  ImagePlus,
} from "lucide-react";

import imageExample from "~/src/smarthponeServices.png";

const benefits = [
  { icon: Headphones, title: "Бесплатная", description: "консультация" },
  { icon: BadgeCheck, title: "Точная", description: "стоимость" },
  { icon: Clock3, title: "Удобное время", description: "ремонта" },
];

const fieldClassName =
  "h-12 w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3 text-base text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 md:text-sm";

export default function RepairRequestSection() {
  return (
    <section
      aria-labelledby="repair-request-title"
      className="relative isolate mx-auto w-full max-w-7xl px-4 lg:px-8 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-white p-4 sm:p-6 lg:p-8"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Introduction */}
        <div className="relative min-w-0 px-2 pt-3 lg:py-10 lg:pl-28 xl:pl-40">
          {/* Add your image source here. */}
          <img
            src={imageExample}
            alt=""
            loading="lazy"
            className="pointer-events-none absolute -bottom-16 -left-28 hidden w-72 max-w-none -rotate-6 object-contain lg:block xl:w-80"
          />

          <div className="relative z-10">
            <p className="mb-3 text-xs font-semibold tracking-widest text-blue-500 uppercase">
              Поможем вашему устройству
            </p>

            <h2
              id="repair-request-title"
              className="max-w-sm text-3xl leading-tight font-extrabold tracking-tight text-slate-950 lg:text-4xl"
            >
              Оставьте заявку
              <br />
              на ремонт
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 lg:text-base">
              Свяжемся с вами, уточним детали и подберём лучшее решение.
            </p>

            <ul
              role="list"
              className="mt-6 grid list-none grid-cols-3 gap-3 p-0 lg:mt-8"
            >
              {benefits.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex flex-col items-start gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-white/75 text-blue-500">
                    <Icon
                      aria-hidden="true"
                      className="size-6"
                      strokeWidth={1.7}
                    />
                  </span>

                  <p className="text-xs leading-relaxed text-slate-700">
                    <span className="block font-semibold">{title}</span>
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form UI */}
        <form
          noValidate
          aria-label="Заявка на ремонт"
          className="relative rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm shadow-blue-500/5 sm:p-6"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex min-w-0 flex-col gap-2">
              <label
                htmlFor="repair-device"
                className="text-xs font-medium text-slate-600"
              >
                Тип устройства
              </label>

              <select
                id="repair-device"
                name="device"
                defaultValue=""
                className={fieldClassName}
              >
                <option value="" disabled>
                  Выберите устройство
                </option>
                <option value="smartphone">Смартфон</option>
                <option value="laptop">Ноутбук</option>
                <option value="tablet">Планшет</option>
                <option value="console">Консоль</option>
                <option value="smartwatch">Умные часы</option>
              </select>
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <label
                htmlFor="repair-problem"
                className="text-xs font-medium text-slate-600"
              >
                Проблема
              </label>

              <select
                id="repair-problem"
                name="problem"
                defaultValue=""
                className={fieldClassName}
              >
                <option value="" disabled>
                  Выберите проблему
                </option>
                <option value="screen">Разбит экран</option>
                <option value="battery">Быстро разряжается</option>
                <option value="charging">Не заряжается</option>
                <option value="water">Попала вода</option>
                <option value="camera">Проблемы с камерой</option>
                <option value="power">Не включается</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <label
                htmlFor="repair-name"
                className="text-xs font-medium text-slate-600"
              >
                Ваше имя
              </label>

              <input
                id="repair-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Иван Иванов"
                className={fieldClassName}
              />
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <label
                htmlFor="repair-phone"
                className="text-xs font-medium text-slate-600"
              >
                Телефон
              </label>

              <div className="flex h-12 overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/10">
                <span className="inline-flex shrink-0 items-center gap-2 border-r border-slate-200 bg-slate-50 px-3 text-sm text-slate-600">
                  <span aria-hidden="true">🇪🇪</span>
                  +372
                </span>

                <input
                  id="repair-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel-national"
                  placeholder="5123 4567"
                  className="w-full min-w-0 bg-transparent px-3 text-base text-slate-800 outline-none placeholder:text-slate-400 md:text-sm"
                />
              </div>
            </div>

            {/* Photo attachment */}
            <div className="min-w-0 sm:col-span-2">
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="repair-photo"
                  className="text-xs font-medium text-slate-600"
                >
                  Фото устройства
                </label>

                <span className="text-xs text-slate-400">Необязательно</span>
              </div>

              <div className="rounded-xl border border-dashed border-blue-500/30 bg-blue-500/[0.03] p-4">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-500">
                    <ImagePlus
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.7}
                    />
                  </span>

                  <p
                    id="repair-photo-hint"
                    className="text-xs leading-relaxed text-slate-500"
                  >
                    Прикрепите фото повреждения или общий вид устройства.
                  </p>
                </div>

                <input
                  id="repair-photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  aria-describedby="repair-photo-hint"
                  className="block w-full min-w-0 cursor-pointer rounded-lg text-xs text-slate-500 file:mr-3 file:cursor-pointer file:rounded-full file:border-0 file:bg-blue-500/10 file:px-4 file:py-2.5 file:text-xs file:font-semibold file:text-blue-500 hover:file:bg-blue-500/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition-colors hover:bg-blue-500/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            Отправить заявку
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </button>

          <label className="mt-4 flex cursor-pointer items-start gap-2.5">
            <input
              name="consent"
              type="checkbox"
              className="mt-0.5 size-4 shrink-0 accent-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            />

            <span className="text-xs leading-relaxed text-slate-500">
              Я согласен с обработкой персональных данных
            </span>
          </label>
        </form>
      </div>
    </section>
  );
}
