import {
  ArrowRight,
  ArrowUpRight,
  Package,
  PackageCheck,
  Search,
  Wrench,
} from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Отправьте устройство",
    description:
      "Надёжно упакуйте устройство и отправьте через ближайший почтомат.",
  },
  {
    icon: Search,
    title: "Диагностика",
    description: "Проверим устройство и согласуем с вами стоимость ремонта.",
  },
  {
    icon: Wrench,
    title: "Ремонт",
    description:
      "Выполним ремонт быстро и качественно. Проверим всё перед отправкой.",
  },
  {
    icon: PackageCheck,
    title: "Возвращаем устройство",
    description: "Отправим устройство обратно в выбранный вами почтомат.",
  },
];

export default function MailRepairSection() {
  return (
    <section
      aria-labelledby="mail-repair-title"
      className="mx-auto w-full max-w-7xl mt-10 rounded-3xl bg-gradient-to-br from-blue-500/5 via-blue-500/[0.03] to-blue-500/10 p-5 sm:p-6 lg:p-8"
    >
      <div className="mb-8 flex items-start justify-between gap-6">
        <div className="max-w-2xl">
          <p className="mb-2 text-xs font-semibold tracking-widest text-blue-500 uppercase">
            Ремонт без лишних поездок
          </p>

          <h2
            id="mail-repair-title"
            className="text-2xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]"
          >
            Ремонт просто через почтомат
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 lg:text-base">
            Отправьте устройство удобным способом, а мы сделаем остальное.
          </p>
        </div>

        <button
          type="button"
          className="hidden min-h-11 shrink-0 items-center justify-center gap-3 rounded-full border border-blue-500 bg-white/60 px-5 py-3 text-xs font-semibold text-blue-500 transition-colors hover:bg-blue-500/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 md:inline-flex"
        >
          Посмотреть инструкцию
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </button>
      </div>

      <ol
        role="list"
        className="m-0 grid list-none gap-7 p-0 md:grid-cols-2 md:gap-6 lg:grid-cols-4"
      >
        {steps.map(({ icon: Icon, title, description }, index) => (
          <li
            key={title}
            className="relative grid grid-cols-[64px_minmax(0,1fr)] gap-4 md:block md:rounded-2xl md:border md:border-white/80 md:bg-white/80 md:p-6"
          >
            {/* Mobile timeline */}
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-10 -bottom-7 left-3.5 border-l border-dashed border-blue-500/25 md:hidden"
              />
            )}

            <div className="relative flex items-start gap-2 md:mb-5 md:items-center md:gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-blue-500/10 text-xs font-semibold text-blue-500 md:size-8 md:text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>

              <Icon
                aria-hidden="true"
                className="size-7 shrink-0 text-blue-500 md:size-9"
                strokeWidth={1.5}
              />
            </div>

            <div>
              <h3 className="text-sm leading-snug font-bold text-slate-900 lg:text-base">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>

            {/* Desktop connector */}
            {index < steps.length - 1 && (
              <ArrowRight
                aria-hidden="true"
                className="absolute top-8 -right-5 z-10 hidden size-4 text-blue-500 lg:block"
              />
            )}
          </li>
        ))}
      </ol>

      <button
        type="button"
        className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-full border border-blue-500 bg-white/60 px-5 py-3 text-sm font-semibold text-blue-500 transition-colors hover:bg-blue-500/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 md:hidden"
      >
        Посмотреть инструкцию
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </button>
    </section>
  );
}
