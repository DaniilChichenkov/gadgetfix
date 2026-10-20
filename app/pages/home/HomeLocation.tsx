import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  ThumbsUp,
} from "lucide-react";

import imageExample from "~/src/smarthponeServices.png";

const contactDetails = [
  {
    icon: MapPin,
    title: "Адрес",
    lines: ["Tartu mnt 50a, Tallinn"],
  },
  {
    icon: Clock3,
    title: "Часы работы",
    lines: ["Пн–Пт: 09:00–19:00", "Сб: 11:00–15:00"],
  },
  {
    icon: Phone,
    title: "Телефон",
    lines: ["+372 59 818 448"],
  },
];

const benefits = [
  {
    icon: Star,
    title: "Опытные специалисты",
    description:
      "Знаем особенности вашей техники и внимательно проверяем результат.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия качества",
    description: "Предоставляем гарантию на выполненные ремонтные работы.",
  },
  {
    icon: Clock3,
    title: "Быстрый ремонт",
    description: "Согласуем сроки и приступаем к ремонту без лишних ожиданий.",
  },
  {
    icon: ThumbsUp,
    title: "Честные цены",
    description: "Обсуждаем стоимость заранее — без скрытых платежей.",
  },
];

export default function LocationAndBenefitsSection() {
  return (
    <section
      aria-label="Наш салон и преимущества"
      className="mx-auto grid w-full max-w-7xl px-4 lg:px-8 gap-5 py-8 md:py-12 lg:grid-cols-2"
    >
      {/* Location card */}
      <article
        aria-labelledby="location-title"
        className="grid gap-6 rounded-3xl border border-slate-200/70 bg-white p-5 sm:grid-cols-[1.1fr_1fr] sm:p-6"
      >
        <div className="sm:col-start-1 sm:row-start-1">
          <p className="mb-2 text-[10px] font-semibold tracking-widest text-blue-500 uppercase">
            Заходите в гости
          </p>

          <h2
            id="location-title"
            className="text-2xl leading-tight font-extrabold tracking-tight text-slate-950"
          >
            Наш салон в Таллине
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Мы всегда рады видеть вас в нашем салоне.
          </p>
        </div>

        {/* Add your image source here. */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-50 sm:col-start-2 sm:row-span-3 sm:row-start-1 sm:aspect-auto sm:min-h-[330px]">
          <img
            src={imageExample}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <dl className="space-y-5 sm:col-start-1 sm:row-start-2">
          {contactDetails.map(({ icon: Icon, title, lines }) => (
            <div key={title} className="relative pl-8">
              <dt className="text-xs font-semibold text-slate-900">
                <Icon
                  aria-hidden="true"
                  className="absolute top-0 left-0 size-5 text-blue-500"
                  strokeWidth={1.8}
                />
                {title}
              </dt>

              <dd className="mt-1.5 space-y-1 text-sm leading-relaxed text-slate-600">
                {lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        <button
          type="button"
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 self-end rounded-full border border-blue-500 bg-white px-4 py-3 text-xs font-semibold text-blue-500 transition-colors hover:bg-blue-500/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 sm:col-start-1 sm:row-start-3 sm:w-fit"
        >
          Посмотреть на карте
          <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
        </button>
      </article>

      {/* Why choose us */}
      <article
        aria-labelledby="why-choose-us-title"
        className="flex flex-col rounded-3xl border border-slate-200/70 bg-white p-5 sm:p-6"
      >
        <div>
          <p className="mb-2 text-[10px] font-semibold tracking-widest text-blue-500 uppercase">
            С заботой о вашей технике
          </p>

          <h2
            id="why-choose-us-title"
            className="text-2xl leading-tight font-extrabold tracking-tight text-slate-950"
          >
            Почему выбирают GADGET?
          </h2>
        </div>

        <ul
          role="list"
          className="mt-7 grid flex-1 list-none grid-cols-2 content-center gap-x-5 gap-y-8 p-0 sm:gap-8"
        >
          {benefits.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex min-w-0 flex-col items-start gap-3 xl:flex-row"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-500/15 text-blue-500">
                <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
              </span>

              <div>
                <h3 className="text-sm leading-snug font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm lg:text-xs">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
