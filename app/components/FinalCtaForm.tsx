import {
  ArrowUpRight,
  Camera,
  MessageCircle,
  Settings2,
  ShieldCheck,
} from "lucide-react";

type RepairHelpSectionProps = {
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  id?: string;
};

const benefits = [
  {
    icon: MessageCircle,
    title: "Бесплатная консультация",
  },
  {
    icon: Settings2,
    title: "Подскажем решение",
  },
  {
    icon: ShieldCheck,
    title: "Согласуем стоимость",
  },
];

const inputClassName =
  "min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15";

export default function RepairHelpSection({
  imageSrc,
  imageAlt = "Устройства для ремонта",
  title = "Не знаете, что сломалось?",
  description = "Опишите проблему — поможем разобраться.",
  id = "repair-request",
}: RepairHelpSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100/70 p-4 sm:p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Introduction and illustration */}
          <div className="relative flex flex-col justify-center lg:py-6 lg:pl-40 xl:pl-48">
            {/* Desktop illustration */}
            <div className="pointer-events-none absolute -bottom-8 -left-6 hidden h-full max-h-[420px] w-44 lg:block xl:-left-8 xl:w-56">
              <img
                src={imageSrc || undefined}
                alt={imageAlt}
                loading="lazy"
                className="h-full w-full object-contain object-bottom"
              />
            </div>

            <div className="relative">
              <h2
                id={`${id}-title`}
                className="text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl"
              >
                {title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {description}
              </p>

              <ul className="mt-6 grid grid-cols-3 gap-3">
                {benefits.map(({ icon: Icon, title }) => (
                  <li key={title} className="flex flex-col items-start">
                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-blue-500">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.7}
                      />
                    </span>

                    <span className="text-xs font-medium leading-relaxed text-slate-700">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Request form — UI only */}
          <form
            noValidate
            aria-label="Заявка на ремонт"
            className="space-y-4 rounded-2xl bg-white p-4 sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-slate-700">
                  Ваше имя
                </span>

                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Введите ваше имя"
                  className={inputClassName}
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-medium text-slate-700">
                  Телефон
                </span>

                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+372 5555 5555"
                  className={inputClassName}
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.2fr_1fr]">
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-slate-700">
                  Что случилось?
                </span>

                <textarea
                  name="problem"
                  rows={4}
                  placeholder="Кратко опишите проблему"
                  className={`${inputClassName} min-h-28 resize-y`}
                />
              </label>

              <label className="block cursor-pointer">
                <span className="mb-2 block text-xs font-medium text-slate-700">
                  Фото устройства{" "}
                  <span className="font-normal text-slate-400">
                    (необязательно)
                  </span>
                </span>

                <input
                  type="file"
                  name="devicePhoto"
                  accept="image/jpeg,image/png"
                  className="peer sr-only"
                />

                <span className="flex min-h-28 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-blue-200 bg-blue-50/60 p-4 text-center transition-colors hover:border-blue-500 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2">
                  <Camera
                    aria-hidden="true"
                    className="h-7 w-7 text-blue-500"
                    strokeWidth={1.7}
                  />

                  <span className="text-xs font-semibold text-blue-500">
                    Добавить фото
                  </span>

                  <span className="text-[11px] text-slate-400">JPG, PNG</span>
                </span>
              </label>
            </div>

            <div className="flex items-start gap-2">
              <input
                id={`${id}-consent`}
                type="checkbox"
                name="consent"
                className="mt-0.5 h-4 w-4 shrink-0 accent-blue-500"
              />

              <p className="text-xs leading-relaxed text-slate-500">
                <label htmlFor={`${id}-consent`} className="cursor-pointer">
                  Я согласен на{" "}
                </label>

                <a
                  href="/privacy"
                  className="rounded-sm text-blue-500 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  обработку персональных данных
                </a>
              </p>
            </div>

            <button
              type="button"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Оставить заявку
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
