import React from "react";

const timelineConfig = [
  {
    title: "Диагностика",
    desc: "Бесплатная проверка и выявление неисправности.",
  },
  {
    title: "Согласование",
    desc: "Показываем результаты и согласовываем цену.",
  },
  {
    title: "Ремонт",
    desc: "Профессионально выполняем работы.",
  },
  {
    title: "Тестирование",
    desc: "Проверяем все функции устройства.",
  },
  {
    title: "Выдача",
    desc: "Вы принимаете исправное устройство.",
  },
];
const HomeTimeline = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center">
            Как проходит ремонт?
          </h2>
        </header>

        <ul className="steps steps-vertical md:steps-horizontal md:mt-10 [&>.step]:min-h-32">
          {timelineConfig.map((item, i) => (
            <li
              key={`home-timeline-${item.title}`}
              className="step [--step-bg:#3b82f6] [--step-fg:white] text-left"
            >
              <div className="ml-4 md:ml-0 md:px-4 md:text-center">
                <h3 className="text-lg md:text-md lg:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-pretty text-gray-700 md:text-sm lg:text-pretty">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

{
  /* <ol className=" relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200 mt-10">
          {timelineConfig.map((item, i) => (
            <li
              key={`how-repair-performed-${item.title}`}
              className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
            >
              <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                <div className="-mt-2">
                  <time className="text-xs/none font-medium text-gray-700">
                    0{i + 1}
                  </time>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>

              <div aria-hidden="true"></div>
            </li>
          ))}
        </ol> */
}

export default HomeTimeline;
