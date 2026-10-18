import React, { useRef, useState } from "react";
import { Link } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import imageExample from "~/src/whyChooseUs.png";

const blogConfig = [
  {
    title: "Как продлить жизнь аккумулятора смартфона",
    category: "Советы",
    image: imageExample,
  },
  {
    title: "5 признаков, что пора менять батарею",
    category: "Полезное",
    image: imageExample,
  },
  {
    title: "Что делать, если телефон упал в воду?",
    category: "Советы",
    image: imageExample,
  },
  {
    title: "Почему смартфон перегревается?",
    category: "Диагностика",
    image: imageExample,
  },
  {
    title: "Оригинальный экран или аналог: что выбрать?",
    category: "Ремонт",
    image: imageExample,
  },
];
const HomeBlog = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-8">
          <div className="flex justify-between items-center mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Полезно знать.
            </h2>

            <Link
              to={"/"}
              className="text-sm text-blue-500 flex justify-end items-center gap-2"
            >
              Все статьи <ArrowRight size={20} className="shrink-0" />
            </Link>
          </div>

          <div className="">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {blogConfig.map((item, i) => (
                <SwiperSlide className="p-1" key={`blog-${item.title}`}>
                  <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                    <img
                      alt="Blog image"
                      src={item.image}
                      className="h-56 w-full object-cover"
                    />

                    <div className="bg-white p-4 sm:p-6">
                      <p className="block text-xs text-blue-500 uppercase">
                        {item.category}
                      </p>

                      <div className="w-full flex justify-between items-center">
                        <h3 className="mt-0.5 text-lg text-gray-900font-bold w-10/12">
                          {item.title}
                        </h3>
                        <ArrowRight className="text-blue-500 shrink-0 w-2/12" />
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="w-full flex justify-center items-center gap-5 mt-5">
              <button
                className="btn btn-circle flex justify-center items-center"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ChevronLeft />
              </button>

              <div className="flex items-center gap-3 md:hidden">
                {blogConfig.map((_, index) => (
                  <button
                    key={`blog-navigation-${index}`}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
