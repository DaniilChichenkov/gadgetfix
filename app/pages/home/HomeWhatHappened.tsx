import React from "react";

import { Smartphone, ChevronRight } from "lucide-react";

import brokenScreen from "~/src/brokenScreen.png";
import damagedCamera from "~/src/damagedCamera.png";

const servicesConfig = [
  {
    img: brokenScreen,
    title: "Разбит экран",
  },
  {
    img: damagedCamera,
    title: "Проблемы с камерой",
  },
  {
    img: brokenScreen,
    title: "Быстро разряжается",
  },
  {
    img: brokenScreen,
    title: "Попал в воду",
  },
  {
    img: brokenScreen,
    title: "Не заряжается",
  },
  {
    img: brokenScreen,
    title: "Проблемы с Face ID",
  },
  {
    img: brokenScreen,
    title: "Разбито заднее стекло",
  },
  {
    img: brokenScreen,
    title: "Другое",
  },
];
const HomeWhatHappened = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 mt-5">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center md:text-left">
            Что случилось с вашим устройством?
          </h2>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8">
          {servicesConfig.map((item) => (
            <div
              key={`what-happened-${item.title}`}
              className="card card-md overflow-hidden bg-base-200 shadow-sm w-full"
            >
              <figure className="h-28 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover object-top"
                />
              </figure>

              <div className="card-body relative z-10 -mt-10 flex flex-row items-center justify-between rounded-t-3xl border-t border-gray-100 bg-white text-blue-500">
                <h2 className="card-title text-center mx-auto md:text-left md:mx-0 text-md text-gray-900 wrap-break-word">
                  {item.title}
                </h2>
                <ChevronRight className="shrink-0 hidden md:block" size={30} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhatHappened;
