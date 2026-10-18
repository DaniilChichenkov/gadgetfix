import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";

import screenProtector from "~/src/screenProtector.png";

const HomeProtectScreen = () => {
  return (
    <section
      className="
  relative isolate overflow-hidden rounded-3xl
  bg-linear-to-b md:bg-linear-to-r
  from-[#EEF0F2] via-[#F7F8FA] to-white
  mt-8 max-w-7xl mx-auto
"
    >
      <div
        className="
      mx-auto grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 md:items-center
    "
      >
        {/* Text */}
        <div
          className="
        relative z-10
        px-6 pt-12 pb-6
        sm:pt-16
        md:py-24
        lg:px-8 lg:py-32
      "
        >
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl text-center md:text-left">
            Защитите то, что важно
          </h2>

          <p className="md:mt-4 mt-2 text-pretty text-gray-700 text-center md:text-left">
            Защитные стекла и пленки с точной установкой
          </p>

          <div className="mt-6 flex flex-col items-start">
            <div className="w-full flex flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row w-full gap-3">
                <button
                  type="button"
                  className="
            btn btn-lg rounded-lg
            border-blue-500 bg-blue-500
            text-sm font-semibold text-white
            shadow-sm transition-colors
            hover:border-blue-700 hover:bg-blue-700
            focus-visible:outline-none
            focus-visible:ring-4 focus-visible:ring-blue-200
          "
                >
                  Защитное стекло
                </button>

                <button
                  type="button"
                  className="
            btn btn-lg rounded-lg
            border-gray-200 bg-white
            text-sm font-semibold text-gray-900
            shadow-sm transition-colors
            hover:bg-gray-50
          "
                >
                  Бронепленка
                </button>
              </div>

              {/* Other protection variants */}
              <Link
                to={"/"}
                className="text-blue-500 text-sm flex justify-start items-center gap-2 mt-4"
              >
                Подберите защиту <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Photo: below the text on mobile, full-height on desktop */}
        <div className="relative h-72 sm:h-96 md:static md:h-auto">
          <img
            src={screenProtector}
            alt="Ремонт смартфона"
            draggable={false}
            className="
          pointer-events-none absolute inset-0
          h-full w-full object-cover object-center
          md:left-auto md:w-[58%]
          mask-[linear-gradient(to_bottom,transparent_0%,black_25%)]
          md:mask-[linear-gradient(to_right,transparent_0%,black_35%)]
        "
          />
        </div>
      </div>
    </section>
  );
};

export default HomeProtectScreen;
