import React, { useRef, useState } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Quote,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";
import { Link } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

const HomeFeedback = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section aria-label="Защита экрана" className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-100 bg-blue-50 p-5 sm:p-8 lg:p-10 xl:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/70 to-blue-100/60"
        />

        {/* Header */}
        <div className="min-w-0 flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <div className="">
            <p className="mb-2 text-xs font-semibold tracking-widest text-blue-500 uppercase flex justify-start items-center gap-2">
              <MessageCircle aria-hidden="true" className="size-6 shrink-0" />
              отзывы клиентов
            </p>

            <h2 className="text-2xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]">
              Что говорят наши клиенты
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
              Спасибо, что доверяете нам свои устройства.
            </p>
          </div>
          {/* Make a review button */}
          <button
            type="button"
            className="hidden md:inline-flex mt-2 min-h-11 items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-500/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 lg:px-7 lg:text-sm"
          >
            Оставить отзыв
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-start mt-5 gap-4">
          {/* Overall score card */}
          <div className="card w-full bg-blue-100 card-xs shadow-sm border border-blue-200 shadow-blue-100 rounded-2xl">
            <div className="card-body p-4">
              <div className="w-full grid grid-cols-2">
                <div className="flex w-full h-full justify-center items-center">
                  <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                    <span className="text-2xl mobile-m:text-3xl mobile-l:text-4xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]">
                      4,9
                    </span>{" "}
                    из 5
                  </p>
                </div>

                <div className="w-full flex flex-col items-center">
                  <div className="w-full mobile-m:w-10/12 mobile-l:w-8/12 rating rating-sm flex justify-between">
                    <div
                      className="mask mask-star bg-blue-500"
                      aria-label="1 star"
                    ></div>
                    <div
                      className="mask mask-star bg-blue-500"
                      aria-label="2 star"
                    ></div>
                    <div
                      className="mask mask-star bg-blue-500"
                      aria-label="3 star"
                      aria-current="true"
                    ></div>
                    <div
                      className="mask mask-star bg-blue-500"
                      aria-label="4 star"
                    ></div>
                    <div
                      className="mask mask-star bg-blue-500"
                      aria-label="5 star"
                    ></div>
                  </div>
                  <p className="max-w-xl text-xs leading-relaxed text-slate-600 mt-1">
                    Оценка клиентов
                  </p>
                </div>
              </div>
              <div className="divider m-0 p-0"></div>
              <div className="w-full flex justify-start items-center gap-2">
                <ShieldCheck className="text-blue-500 size-6 shrink-0" />
                <p className="text-xs leading-relaxed text-slate-600">
                  Ваше доверие - наша ответственность
                </p>
              </div>
              <Link
                to={"/"}
                className="flex justify-start items-center gap-2 font-semibold text-blue-500 text-base mt-1"
              >
                Все отзывы <ArrowUpRight />
              </Link>
            </div>
          </div>

          {/* Reviews slider */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            slidesPerView={1}
            loop={true}
            className="w-full md:col-start-2 lg:col-start-2 md:col-span-2 lg:col-span-3"
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="w-full">
              <div className="card w-full bg-base-100 card-md shadow-sm">
                <div className="card-body rounded-2xl p-4">
                  {/* Rating */}
                  <div className="w-full flex justify-between items-center">
                    <div className="rating rating-xs">
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="1 star"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="2 star"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="3 star"
                        aria-current="true"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="4 star"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="5 star"
                      ></div>
                    </div>
                    <Quote
                      className="text-blue-200"
                      fill="oklch(88.2% 0.059 254.128)"
                    />
                  </div>

                  {/* Text */}
                  <p className="w-full mt-2 wrap-break-word text-sm leading-relaxed text-slate-600 max-h-[10rem] overflow-y-scroll">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure fugiat modi, aliquam architecto itaque, omnis aperiam
                    veniam totam dolorum natus ad pariatur! Ea dolore
                    repellendus tempora deserunt dolorem aspernatur in.
                  </p>

                  {/* Category badge */}
                  <span className="badge bg-blue-100 rounded-3xl p-4 mt-2">
                    Замена экрана
                  </span>

                  <div className="divider m-0 p-0 mt-2"></div>

                  {/* Profile */}
                  <div className="w-full flex justify-start gap-3 items-center">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          alt="Tailwind-CSS-Avatar-component"
                          src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="leading-tight font-extrabold tracking-tight text-slate-950 ">
                        Анна К.
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">
                        Клиент сервиса
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <div className="card w-full bg-base-100 card-md shadow-sm">
                <div className="card-body rounded-2xl p-4">
                  {/* Rating */}
                  <div className="w-full flex justify-between items-center">
                    <div className="rating rating-xs">
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="1 star"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="2 star"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="3 star"
                        aria-current="true"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="4 star"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="5 star"
                      ></div>
                    </div>
                    <Quote
                      className="text-blue-200"
                      fill="oklch(88.2% 0.059 254.128)"
                    />
                  </div>

                  {/* Text */}
                  <p className="w-full mt-2 wrap-break-word text-sm leading-relaxed text-slate-600 max-h-[10rem] overflow-y-scroll">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure fugiat modi, aliquam architecto itaque, omnis aperiam
                    veniam totam dolorum natus ad pariatur! Ea dolore
                    repellendus tempora deserunt dolorem aspernatur in.
                  </p>

                  {/* Category badge */}
                  <span className="badge bg-blue-100 rounded-3xl p-4 mt-2">
                    Замена экрана
                  </span>

                  <div className="divider m-0 p-0 mt-2"></div>

                  {/* Profile */}
                  <div className="w-full flex justify-start gap-3 items-center">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          alt="Tailwind-CSS-Avatar-component"
                          src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="leading-tight font-extrabold tracking-tight text-slate-950 ">
                        Анна К.
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">
                        Клиент сервиса
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <div className="card w-full bg-base-100 card-md shadow-sm">
                <div className="card-body rounded-2xl p-4">
                  {/* Rating */}
                  <div className="w-full flex justify-between items-center">
                    <div className="rating rating-xs">
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="1 star"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="2 star"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="3 star"
                        aria-current="true"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="4 star"
                      ></div>
                      <div
                        className="mask mask-star bg-blue-500"
                        aria-label="5 star"
                      ></div>
                    </div>
                    <Quote
                      className="text-blue-200"
                      fill="oklch(88.2% 0.059 254.128)"
                    />
                  </div>

                  {/* Text */}
                  <p className="w-full mt-2 wrap-break-word text-sm leading-relaxed text-slate-600 max-h-[10rem] overflow-y-scroll">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure fugiat modi, aliquam architecto itaque, omnis aperiam
                    veniam totam dolorum natus ad pariatur! Ea dolore
                    repellendus tempora deserunt dolorem aspernatur in.
                  </p>

                  {/* Category badge */}
                  <span className="badge bg-blue-100 rounded-3xl p-4 mt-2">
                    Замена экрана
                  </span>

                  <div className="divider m-0 p-0 mt-2"></div>

                  {/* Profile */}
                  <div className="w-full flex justify-start gap-3 items-center">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          alt="Tailwind-CSS-Avatar-component"
                          src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="leading-tight font-extrabold tracking-tight text-slate-950 ">
                        Анна К.
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">
                        Клиент сервиса
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Controls buttons */}
          <div className="w-full flex justify-end items-center gap-4 md:col-start-3 lg:col-start-4">
            <button
              className="btn btn-circle flex justify-center items-center border border-blue-500"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft />
            </button>
            <button
              className="btn btn-circle flex justify-center items-center border border-blue-500"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight />
            </button>
          </div>

          {/* Make a review button */}
          <button
            type="button"
            className="md:hidden inline-flex mt-2 min-h-11 items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-500/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 lg:px-7 lg:text-sm"
          >
            Оставить отзыв
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </button>

          {/* Nice text */}
          <p className="mt-2 md:col-start-1 md:col-span-2 md:row-start-2 max-w-xl text-sm leading-relaxed text-slate-600 flex justify-start gap-2 items-center wrap-break-word">
            <Heart className="size-6 shrink-0 text-blue-500" />
            Каждый отзыв помогает нам становится лучше
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeFeedback;
