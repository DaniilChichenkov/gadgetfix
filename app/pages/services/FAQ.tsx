import { ArrowRight, ChevronRight, Minus, Plus } from "lucide-react";

import imageExample from "~/src/smarthponeServices.png";

const frequentlyAskedQuestions = [
  {
    question: "Можно ли узнать стоимость заранее?",
    answer:
      "Выберите категорию, бренд, модель и услугу в подборе ремонта. Если причина неисправности неясна, уточним стоимость после диагностики и согласуем её до начала работ.",
  },
  {
    question: "Что делать, если моей модели нет в списке?",
    answer:
      "Напишите нам или оставьте заявку, указав модель устройства и описав проблему. Мы уточним возможность ремонта и подскажем дальнейшие шаги.",
  },
  {
    question: "Сколько времени занимает ремонт?",
    answer:
      "Срок зависит от неисправности, сложности работ и наличия деталей. После диагностики сообщим ориентировочное время ремонта.",
  },
  {
    question: "Сохранятся ли данные на устройстве?",
    answer:
      "Это зависит от неисправности и необходимых работ. По возможности заранее создайте резервную копию важных данных. Если потребуется сброс устройства, обсудим это с вами до начала ремонта.",
  },
  {
    question: "Можно ли отправить устройство почтоматом?",
    answer:
      "Да, вы можете отправить устройство из любой точки Эстонии. Перед отправкой свяжитесь с нами, чтобы согласовать доставку и получить инструкции по упаковке.",
  },
];

const repairGuides = [
  {
    title: "Как подготовить устройство к ремонту",
    description:
      "Несколько простых шагов, чтобы ремонт прошёл быстрее и безопаснее.",
    href: "/blog/prepare-device-for-repair",
  },
  {
    title: "Ремонт или замена: как принять решение",
    description:
      "На что обратить внимание при выборе между ремонтом и новым устройством.",
    href: "/blog/repair-or-replace",
  },
  {
    title: "Как отправить технику через почтомат",
    description:
      "Пошаговая инструкция и полезные советы по упаковке устройства.",
    href: "/blog/send-device-by-parcel-locker",
  },
];

export default function RepairFaqAndGuidesSection() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Two columns on desktop, stacked on mobile */}
      <div className="grid items-start gap-8 lg:grid-cols-2">
        {/* Frequently asked questions */}
        <section
          id="repair-faq"
          aria-labelledby="repair-faq-title"
          className="min-w-0 scroll-mt-24"
        >
          <h2
            id="repair-faq-title"
            className="mb-5 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
          >
            Частые вопросы о ремонте
          </h2>

          <div className="space-y-2">
            {frequentlyAskedQuestions.map(({ question, answer }, index) => (
              <details
                key={question}
                open={index === 0}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors open:border-blue-100 open:bg-blue-50"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3 rounded-xl px-4 py-3.5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 [&::-webkit-details-marker]:hidden">
                  <ChevronRight
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-90 group-open:text-blue-500"
                  />

                  <span className="flex-1 text-sm font-semibold leading-relaxed text-slate-900 group-open:text-blue-500">
                    {question}
                  </span>

                  <Plus
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 group-open:hidden"
                  />

                  <Minus
                    aria-hidden="true"
                    className="mt-0.5 hidden h-4 w-4 shrink-0 text-blue-500 group-open:block"
                  />
                </summary>

                <div className="pb-4 pl-11 pr-4">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Helpful articles */}
        <section
          id="repair-guides"
          aria-labelledby="repair-guides-title"
          className="min-w-0 scroll-mt-24"
        >
          <h2
            id="repair-guides-title"
            className="mb-5 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
          >
            Полезно перед ремонтом
          </h2>

          <div className="space-y-3">
            {repairGuides.map(({ title, description, href }) => (
              <article key={href}>
                <a
                  href={href}
                  className="group flex min-h-[116px] gap-3 rounded-2xl border border-slate-200 bg-white p-2 transition-colors hover:border-blue-200 hover:bg-blue-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:p-3"
                >
                  {/* Article thumbnail */}
                  <div className="relative w-24 shrink-0 self-stretch overflow-hidden rounded-xl bg-blue-50 sm:w-28">
                    <img
                      src={imageExample}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Article content */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
                    <h3 className="text-sm font-bold leading-snug text-slate-950 transition-colors group-hover:text-blue-500">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                      {description}
                    </p>
                  </div>

                  <ArrowRight
                    aria-hidden="true"
                    className="mt-2 h-4 w-4 shrink-0 self-start text-blue-500 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
