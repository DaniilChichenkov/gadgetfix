import React from "react";

import { ArrowRight, Euro } from "lucide-react";

import imageExample from "~/src//smarthponeServices.png";

const HomeHowMuchDoesItCost = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-blue-50 rounded-3xl">
        <div className="grid grid-cols-1 gap-x-4">
          <div
            className="
              text-center
              bg-no-repeat
              bg-[position:center_calc(100%_+_130px)]
              md:bg-[position:center_calc(100%_+_100px)]
              xl:bg-[position:center_calc(100%_+_50px)]
              bg-[length:360px_auto]
              min-h-[300px]
              md:min-h-[350px]
            "
            style={{ backgroundImage: `url(${imageExample})` }}
          >
            <p className="uppercase text-sm text-blue-500 font-semibold">
              цена на ремонт
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Сколько это стоит?
            </h2>

            <p className="md:mt-4 mt-2 text-pretty text-gray-700">
              Выберите бренд, модель и услугу - узнайте стоимость ремонта.
            </p>
          </div>

          <div className="card bg-base-100 w-full lg:w-9/12 mx-auto shadow-sm rounded-3xl">
            <div className="card-body">
              {/* Steps */}
              <ul className="steps py-4 hidden md:grid">
                <li className="step [--step-bg:#3b82f6] [--step-fg:white]">
                  Бренд
                </li>
                <li className="step [--step-bg:#3b82f6] [--step-fg:white]">
                  Модель
                </li>
                <li className="step [--step-bg:#3b82f6] [--step-fg:white]">
                  Услуга
                </li>
              </ul>

              {/* Selectors */}
              <div className="w-full flex flex-col md:flex-row md:gap-x-5 items-center gap-y-3">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">1. Бренд</legend>
                  <select defaultValue="Pick a browser" className="select">
                    <option disabled={true}>Выберите бренд</option>
                    <option>Apple</option>
                    <option>Samsung</option>
                    <option>Xiaomi</option>
                  </select>
                </fieldset>

                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">2. Модель</legend>
                  <select defaultValue="Pick a browser" className="select">
                    <option disabled={true}>Выберите модель</option>
                    <option>Iphone 15</option>
                    <option>S22</option>
                    <option>Redmi note 15</option>
                  </select>
                </fieldset>

                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">3. Услуга</legend>
                  <select defaultValue="Pick a browser" className="select">
                    <option disabled={true}>Выберите услугу</option>
                    <option>Замена экрана</option>
                    <option>Замена аккумулятора</option>
                    <option>Замена заднего стекла</option>
                  </select>
                </fieldset>
              </div>

              {/* Price estimate */}
              <div className="w-full rounded-3xl bg-blue-50 p-4 py-6 mt-5">
                <p className="text-pretty text-gray-700 text-md md:text-lg">
                  Стоимость ремонта
                </p>
                <p className="text-gray-900 font-bold text-3xl md:text-6xl flex justify-start items-center gap-x-1 mt-1">
                  150 <Euro className="md:size-12" />
                </p>
                <p className="text-gray-700 text-sm mt-3 md:text-md">
                  Выберите услугу, чтобы увидеть цену.
                </p>
              </div>

              <div className="divider hidden md:flex"></div>

              <div className="flex justify-center md:justify-between">
                <div className="w-full md:flex flex-col items-start hidden">
                  <p className="text-gray-700 text-sm text-pretty">
                    Не нашли модель?
                  </p>
                  <p className="text-blue-500 flex justify-end items-center gap-2">
                    Напишите нам <ArrowRight size={20} />
                  </p>
                </div>

                <button
                  type="button"
                  className="
            btn btn-lg rounded-lg w-full md:w-5/12 lg:py-6
            border-blue-500 bg-blue-500
            text-sm font-semibold text-white
            shadow-sm transition-colors
            hover:border-blue-700 hover:bg-blue-700
            focus-visible:outline-none
            focus-visible:ring-4 focus-visible:ring-blue-200 mt-5 md:mt-0
          "
                >
                  Оставить заявку <ArrowRight />
                </button>
              </div>

              <div className="divider md:hidden"></div>

              <div className="w-full flex justify-between items-center md:hidden">
                <p className="text-gray-700 text-sm text-pretty">
                  Не нашли модель?
                </p>
                <p className="text-blue-500 flex justify-end items-center gap-2 text-sm">
                  Напишите нам <ArrowRight size={20} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowMuchDoesItCost;
