import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";

import GoogleIcon from "~/src/GoogleIcon";

const feedbackConfig = [
  {
    stars: 5,
    title: "Быстро заменили экран",
    description:
      "Разбил экран на iPhone, думал, что ремонт займёт несколько дней. В итоге всё сделали за пару часов. Экран работает отлично, никаких нареканий!",
    name: "Александр Петров",
    date: "2026/09/12",
  },
  {
    stars: 5,
    title: "Отличный сервис!",
    description:
      "Телефон перестал заряжаться, обратился за диагностикой. Оказалось, проблема была в разъёме. Всё объяснили, согласовали стоимость и быстро починили. Спасибо!",
    name: "Мария Иванова",
    date: "2026/08/24",
  },
  {
    stars: 4,
    title: "Хороший ремонт, немного задержали",
    description:
      "Менял аккумулятор на Samsung. Работу выполнили качественно, телефон теперь отлично держит заряд. Пришлось немного подождать дольше обещанного, но результатом доволен.",
    name: "Дмитрий Соколов",
    date: "2026/07/18",
  },
  {
    stars: 5,
    title: "Спасли телефон после воды",
    description:
      "Случайно уронила телефон в воду, после чего он перестал включаться. Ребята провели диагностику и восстановили его. Особенно рада, что удалось сохранить все фотографии!",
    name: "Екатерина Морозова",
    date: "2026/09/30",
  },
  {
    stars: 5,
    title: "Честные цены и качественная работа",
    description:
      "Обращался с проблемой камеры на Xiaomi. Мастер быстро определил неисправность и заранее назвал стоимость ремонта. Никаких неожиданных доплат, всё работает как новое.",
    name: "Андрей Волков",
    date: "2026/10/05",
  },
];
const HomeFeedback = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-8 grid grid-cols-1 md:grid-cols-2">
          <div className="max-w-prose">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl text-center md:text-left">
              Ваше доверие - наша репутация.
            </h2>

            <div className="mt-3 flex justify-center md:justify-start items-center gap-4 mx-auto">
              <GoogleIcon size={60} />
              <div>
                <p className="text-pretty text-gray-700">Рейтинг Google</p>
                <p className="text-pretty text-gray-700">- / 5</p>
              </div>
            </div>

            <Link
              to={`/`}
              className="md:flex justify-start items-center text-blue-500 text-sm mt-5 hidden"
            >
              Отзывы в Google Maps <ArrowUpRight />
            </Link>
          </div>

          <div
            className="grid grid-flow-col
              auto-cols-[85%]
              sm:auto-cols-[320px]
              md:auto-cols-[360px]
              lg:auto-cols-[400px]
              gap-4
              overflow-x-auto overflow-y-hidden
              snap-x snap-mandatory"
          >
            {feedbackConfig.map((item, i) => (
              <div
                key={`feedback-${i}`}
                className="rounded-lg border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="rating">
                    {Array.from({ length: 5 }).map(
                      (reviewItem, reviewIndex) => (
                        <div
                          className="mask mask-star bg-amber-500"
                          key={`review-for-${i}-index-${reviewIndex}`}
                          aria-current={`${reviewIndex === item.stars - 1 && true}`}
                        ></div>
                      ),
                    )}
                  </div>
                </div>

                <p className="mt-3 text-sm font-medium text-gray-900">
                  {item.name}
                </p>

                <p className="mt-1 text-sm text-gray-600">{item.description}</p>

                <p className="mt-3 text-xs text-gray-500">
                  {item.name} &middot; {item.date}
                </p>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <Link
              to={`/`}
              className="flex justify-end items-center text-blue-500 text-sm"
            >
              Отзывы в Google Maps <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeedback;
