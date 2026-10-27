import {
  ArrowRight,
  ClipboardList,
  PackageCheck,
  Search,
  Wrench,
} from "lucide-react";

const repairSteps = [
  {
    title: "Заявка",
    description:
      "Оставляете заявку на сайте, по телефону или обращаетесь в салон.",
    icon: ClipboardList,
  },
  {
    title: "Диагностика",
    description:
      "Проверяем устройство, определяем причину и согласуем стоимость.",
    icon: Search,
  },
  {
    title: "Ремонт и проверка",
    description:
      "Выполняем согласованный ремонт и тестируем работу устройства.",
    icon: Wrench,
  },
  {
    title: "Получение",
    description:
      "Забираете устройство в салоне или получаете его через почтомат.",
    icon: PackageCheck,
  },
];

export default function RepairProcessSection() {
  return (
    <section
      id="repair-process"
      aria-labelledby="repair-process-title"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl bg-blue-50/70 p-4 sm:p-6 lg:p-8">
        <h2
          id="repair-process-title"
          className="mb-6 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
        >
          Как проходит ремонт
        </h2>

        <ol className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {repairSteps.map(({ title, description, icon: Icon }, index) => (
            <li
              key={title}
              className="relative flex flex-col rounded-2xl border border-blue-100 bg-white p-4 sm:p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-base font-bold text-blue-500"
                >
                  {index + 1}
                </span>

                <Icon
                  aria-hidden="true"
                  className="h-7 w-7 text-blue-500"
                  strokeWidth={1.7}
                />
              </div>

              <h3 className="text-sm font-bold leading-snug text-slate-950 sm:text-base">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {description}
              </p>

              {index < repairSteps.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-blue-500 lg:block"
                  strokeWidth={1.7}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
