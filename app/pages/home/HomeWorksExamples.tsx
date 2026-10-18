import React, { useRef, useState } from "react";

import {
  Smartphone,
  Camera,
  ScanFace,
  ArrowRight,
  Circle,
  ArrowUpRight,
} from "lucide-react";

import phoneBefore from "~/src/phoneBefore.png";
import phoneAfter from "~/src/phoneAfter.png";
import { Link } from "react-router";

const examplesConfig = [
  {
    category: "screenRepair",
    icon: <Smartphone />,
    categoryTitle: "Замена экрана",
    photoBefore: phoneBefore,
    photoAfter: phoneAfter,
    device: "Iphone 15",
    problem: "Трещина на стекле и сбои сенсора.",
    solution: "Заменили дисплей и проверили работу устройства",
  },
  {
    category: "backGlass",
    icon: <Smartphone />,
    categoryTitle: "Заднее стекло",
    photoBefore: phoneBefore,
    photoAfter: phoneAfter,
    device: "Iphone 15",
    problem: "Трещина на стекле и сбои сенсора.",
    solution: "Заменили дисплей и проверили работу устройства",
  },
  {
    category: "camera",
    icon: <Camera />,
    categoryTitle: "Камера",
    photoBefore: phoneBefore,
    photoAfter: phoneAfter,
    device: "Iphone 15",
    problem: "Трещина на стекле и сбои сенсора.",
    solution: "Заменили дисплей и проверили работу устройства",
  },
  {
    category: "faceId",
    icon: <ScanFace />,
    categoryTitle: "Face ID",
    photoBefore: phoneBefore,
    photoAfter: phoneAfter,
    device: "Iphone 15",
    problem: "Трещина на стекле и сбои сенсора.",
    solution: "Заменили дисплей и проверили работу устройства",
  },
];

const HomeWorksExamples = () => {
  const [selectedCategory, setSelectedCategory] = useState("screenRepair");
  const selectedCategoryInfo = examplesConfig.find(
    (item) => item.category === selectedCategory,
  );

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-8">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-between items-center">
              <p className="uppercase text-sm text-blue-500 font-semibold">
                наши работы
              </p>
              <Link
                className="text-blue-500 hidden md:flex items-center justify-start gap-2 text-sm font-semibold md:mt-4"
                to={"/"}
              >
                Все работы
                <ArrowUpRight />
              </Link>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Результат, который видно.
            </h2>

            <p className="md:mt-4 mt-2 text-pretty text-gray-700">
              Посмотрите, как меняется устройство после ремонта.
            </p>
          </div>

          <div>
            {/* Category selection buttons */}
            <div className="w-full flex justify-start items-center overflow-x-scroll overflow-y-hidden gap-4 mt-5">
              {examplesConfig.map((item) => (
                <button
                  key={item.category}
                  onClick={() => setSelectedCategory(item.category)}
                  className={`btn rounded-3xl ${selectedCategory === item.category && "bg-blue-50 text-blue-500"}`}
                >
                  {item.icon}
                  {item.categoryTitle}
                </button>
              ))}
            </div>

            {/* Service example */}
            <div className="w-full mt-5">
              {/* Images */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                <figure className="w-full relative">
                  <div className="badge badge-lg absolute mt-5 ml-5 rounded-3xl p-4">
                    До ремонта
                  </div>
                  <img
                    className="rounded-3xl"
                    src={selectedCategoryInfo?.photoBefore}
                  />
                </figure>
                <figure className="w-full relative">
                  <div className="badge bg-blue-500 text-white border-blue-500 badge-lg absolute mt-5 ml-5 rounded-3xl p-4">
                    После ремонта
                  </div>
                  <img
                    className="rounded-3xl"
                    src={selectedCategoryInfo?.photoAfter}
                  />
                </figure>
              </div>

              {/* Description */}
              <div className="w-full grid grid-cols-1 md:grid-cols-3 bg-blue-50 rounded-3xl mt-5 md:mt-3 p-4 md:p-6 gap-5 md:items-center">
                <div className="md:col-span-2">
                  <p className="text-pretty text-gray-700 text-sm">
                    Пример ремонта
                  </p>
                  <p className="font-bold text-2xl text-gray-900 md:flex md:gap-3">
                    {selectedCategoryInfo?.device}{" "}
                    <span className="hidden md:flex md:items-center md:gap-3">
                      <Circle size={10} fill="#101828" />{" "}
                      <span className="md:font-semibold md:text-xl">
                        {selectedCategoryInfo?.categoryTitle}
                      </span>
                    </span>
                  </p>
                  <p className="text-pretty text-gray-700 text-lg md:hidden">
                    {" "}
                    {selectedCategoryInfo?.categoryTitle}
                  </p>
                  <p className="text-pretty text-gray-700 text-md mt-3">
                    {selectedCategoryInfo?.solution}
                  </p>
                </div>
                <div className="md:col-start-3 md:col-span-1 flex justify-end">
                  <button
                    type="button"
                    className="
            btn btn-lg rounded-lg w-full lg:w-10/12 lg:py-6
            border-blue-500 bg-blue-500
            text-sm font-semibold text-white
            shadow-sm transition-colors
            hover:border-blue-700 hover:bg-blue-700
            focus-visible:outline-none
            focus-visible:ring-4 focus-visible:ring-blue-200
          "
                  >
                    Узнать стоимость <ArrowRight />
                  </button>
                </div>
              </div>

              {/* All works link (Mobile only) */}
              <Link
                className="text-blue-500 md:hidden flex items-center justify-center w-full gap-2 font-semibold mt-5"
                to={"/"}
              >
                Все работы
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWorksExamples;
