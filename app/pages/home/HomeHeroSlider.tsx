import React, { useRef, useState } from "react";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imageExample from "~/src/heroExample.png";

const slidersConfig = [
  {
    eyebrow: "сервисный центр",
    title: "Ваши устройства. В надежных руках",
    description: "Ремонт смартфонов, планшетов и ноутбуков.",
    image: imageExample,
  },
  {
    eyebrow: "сервисный центр",
    title: "Ваши устройства. В надежных руках",
    description: "Ремонт смартфонов, планшетов и ноутбуков.",
    image: imageExample,
  },
  {
    eyebrow: "сервисный центр",
    title: "Ваши устройства. В надежных руках",
    description: "Ремонт смартфонов, планшетов и ноутбуков.",
    image: imageExample,
  },
];
const HomeHeroSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
      >
        {slidersConfig.map((item, i) => (
          <SwiperSlide key={item.eyebrow + item.description + i}>
            <section
              className="
    relative isolate overflow-hidden rounded-3xl
    bg-linear-to-b md:bg-linear-to-r
    from-[#EAF4FF] via-[#F5F9FF] to-white
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
                  <p className="text-sm text-pretty text-gray-700 uppercase sm:text-lg/relaxed text-center md:text-left">
                    {item.eyebrow}
                  </p>

                  <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl text-center md:text-left">
                    {item.title}
                  </h1>

                  <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed text-center md:text-left">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-col items-start">
                    <div className="flex flex-col gap-3 md:flex-row w-full">
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
                        Оставить заявку
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
                        Посмотреть цены
                      </button>
                    </div>

                    <div className="w-full justify-start items-center gap-8 hidden md:flex mt-10">
                      <button
                        className="btn btn-circle flex justify-center items-center"
                        onClick={() => swiperRef.current?.slidePrev()}
                      >
                        <ChevronLeft />
                      </button>

                      <div className="flex items-center gap-5">
                        {slidersConfig.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() =>
                              swiperRef.current?.slideToLoop(index)
                            }
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={
                              activeSlide === index ? "true" : undefined
                            }
                            className={`px-2 font-semibold cursor-pointer rounded-full transition-all relative ${activeSlide === index ? "text-blue-500 after:content-[''] after:absolute after:w-full after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-blue-500" : "text-gray-400"}`}
                          >
                            0{index + 1}
                          </button>
                        ))}
                      </div>

                      <button
                        className="btn btn-circle flex justify-center items-center"
                        onClick={() => swiperRef.current?.slideNext()}
                      >
                        <ChevronRight />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Photo: below the text on mobile, full-height on desktop */}
                <div className="relative h-72 sm:h-96 md:static md:h-auto">
                  <img
                    src={item.image}
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile navigation / pagination */}
      <div className="w-full flex justify-center items-center gap-5 md:hidden mt-5">
        <button
          className="btn btn-circle flex justify-center items-center"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft />
        </button>

        <div className="flex items-center gap-3">
          {slidersConfig.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => swiperRef.current?.slideToLoop(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
              className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-colors ${
                activeSlide === index
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          className="btn btn-circle flex justify-center items-center"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default HomeHeroSlider;
