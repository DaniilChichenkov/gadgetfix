import React, { useRef, useState } from "react";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Image,
  Wrench,
} from "lucide-react";

import phoneBefore from "~/src/phoneBefore.png";
import phoneAfter from "~/src/phoneAfter.png";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import { Link } from "react-router";

const HomeWorksExamples = () => {
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
              <Image aria-hidden="true" className="size-6 shrink-0" />
              Примеры ремонта
            </p>

            <h2 className="text-2xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]">
              Наши работы: до и после
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
              Посмотрите, как меняются устройства после ремонта.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-start mt-5 gap-4">
          {/* Slider with works examples */}
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
            <SwiperSlide className="w-full border border-blue-200 rounded-xl">
              <div className="card w-full bg-base-100 rounded-xl card-md shadow-sm">
                <div className="card-body rounded-xl p-4">
                  {/* Images */}
                  <div className="grid w-full grid-cols-1 gap-2 mobile-m:grid-cols-2">
                    {/* Before */}
                    <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
                      <img
                        src={phoneBefore}
                        alt="Before repair"
                        className="h-full w-full object-cover"
                      />

                      <span className="badge absolute top-3 left-3 border-blue-200">
                        До
                      </span>
                    </div>

                    {/* After */}
                    <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
                      <img
                        src={phoneAfter}
                        alt="After repair"
                        className="h-full w-full object-cover"
                      />

                      <span className="badge absolute top-3 left-3 border-blue-500 bg-blue-500 text-white">
                        После
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="w-full mt-2">
                    <h3 className="text-xl leading-tight font-bold tracking-tight text-slate-950 sm:text-2xl lg:text-[30px]">
                      Iphone 14
                    </h3>

                    <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                      Замена разбитого экрана
                    </p>

                    <Link
                      to={"/"}
                      className="max-w-xl text-sm leading-relaxed text-blue-500 flex justify-start items-center gap-1 mt-2"
                    >
                      Подробнее о ремонте <ArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full border border-blue-200 rounded-xl">
              <div className="card w-full bg-base-100 rounded-xl card-md shadow-sm">
                <div className="card-body rounded-xl p-4">
                  {/* Images */}
                  <div className="grid w-full grid-cols-1 gap-2 mobile-m:grid-cols-2">
                    {/* Before */}
                    <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
                      <img
                        src={phoneBefore}
                        alt="Before repair"
                        className="h-full w-full object-cover"
                      />

                      <span className="badge absolute top-3 left-3 border-blue-200">
                        До
                      </span>
                    </div>

                    {/* After */}
                    <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
                      <img
                        src={phoneAfter}
                        alt="After repair"
                        className="h-full w-full object-cover"
                      />

                      <span className="badge absolute top-3 left-3 border-blue-500 bg-blue-500 text-white">
                        После
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="w-full mt-2">
                    <h3 className="text-xl leading-tight font-bold tracking-tight text-slate-950 sm:text-2xl lg:text-[30px]">
                      Iphone 14
                    </h3>

                    <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                      Замена разбитого экрана
                    </p>

                    <Link
                      to={"/"}
                      className="max-w-xl text-sm leading-relaxed text-blue-500 flex justify-start items-center gap-1 mt-2"
                    >
                      Подробнее о ремонте <ArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full border border-blue-200 rounded-xl">
              <div className="card w-full bg-base-100 rounded-xl card-md shadow-sm">
                <div className="card-body rounded-xl p-4">
                  {/* Images */}
                  <div className="grid w-full grid-cols-1 gap-2 mobile-m:grid-cols-2">
                    {/* Before */}
                    <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
                      <img
                        src={phoneBefore}
                        alt="Before repair"
                        className="h-full w-full object-cover"
                      />

                      <span className="badge absolute top-3 left-3 border-blue-200">
                        До
                      </span>
                    </div>

                    {/* After */}
                    <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
                      <img
                        src={phoneAfter}
                        alt="After repair"
                        className="h-full w-full object-cover"
                      />

                      <span className="badge absolute top-3 left-3 border-blue-500 bg-blue-500 text-white">
                        После
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="w-full mt-2">
                    <h3 className="text-xl leading-tight font-bold tracking-tight text-slate-950 sm:text-2xl lg:text-[30px]">
                      Iphone 14
                    </h3>

                    <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                      Замена разбитого экрана
                    </p>

                    <Link
                      to={"/"}
                      className="max-w-xl text-sm leading-relaxed text-blue-500 flex justify-start items-center gap-1 mt-2"
                    >
                      Подробнее о ремонте <ArrowUpRight />
                    </Link>
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

          <Link
            to={"/"}
            className="btn bg-white border border-blue-500 rounded-xl text-blue-500"
          >
            Все работы <ArrowUpRight />{" "}
          </Link>

          {/* CTA */}
          <div className="w-full bg-white rounded-xl grid grid-cols-5 gap-5 p-4 border-blue-200 border">
            <div className="col-start-1 col-span-1 flex justify-center items-center text-blue-500">
              <Wrench size={32} className="shrink-0" />
            </div>
            <div className="col-start-2 col-span-4">
              <p className="text-lg leading-tight font-bold tracking-tight text-slate-950 sm:text-2xl lg:text-[30px]">
                Похожая проблема?
              </p>
              <p className="max-w-xl text-xs leading-relaxed text-slate-600">
                Поможем восстановить ваше устройство.
              </p>
            </div>
            <button className="btn col-start-1 col-span-5 text-white bg-blue-500 border-blue-500 gap-2 rounded-xl font-normal">
              Узнать стоимость <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWorksExamples;
