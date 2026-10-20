import React, { useRef, useState } from "react";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Settings2,
  ShieldCheck,
  Zap,
} from "lucide-react";

import imageExample from "~/src/smarthponeServices.png";

const slidersConfig = [
  {
    eyebrow: "сервисный центр",
    header: "Ваши устройства.",
    headerHighlight: "В надежных руках",
    description: "Ремонт смартфонов, планшетов и ноутбуков.",
    image: imageExample,
  },
  {
    eyebrow: "сервисный центр",
    header: "Ваши устройства.",
    headerHighlight: "В надежных руках",
    description: "Ремонт смартфонов, планшетов и ноутбуков.",
    image: imageExample,
  },
  {
    eyebrow: "сервисный центр",
    header: "Ваши устройства.",
    headerHighlight: "В надежных руках",
    description: "Ремонт смартфонов, планшетов и ноутбуков.",
    image: imageExample,
  },
];

const benefits = [
  { icon: ShieldCheck, title: "Гарантия", description: "на ремонт" },
  { icon: Zap, title: "Быстрая", description: "диагностика" },
  { icon: Settings2, title: "Качественные", description: "компоненты" },
];
function Slide({
  eyebrow,
  header,
  headerHighlight,
  desc,
  image,
}: {
  eyebrow: string;
  header: string;
  headerHighlight: string;
  desc: string;
  image: string;
}) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate mx-auto grid w-full max-w-7xl rounded-3xl bg-gradient-to-br from-blue-500/5 via-white to-blue-500/15 text-slate-950 md:block md:min-h-[470px] lg:min-h-[500px]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-24 -top-32 size-[520px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-48 top-20 size-[460px] rotate-30 rounded-[60px] border-[48px] border-white/50 md:-top-40 md:size-[600px] md:border-[72px]" />
        <div className="absolute -bottom-40 left-1/3 h-[420px] w-32 -rotate-45 bg-white/40" />
      </div>

      <div className="contents md:relative md:z-20 md:block md:w-[62%] md:px-8 md:py-10 lg:pl-11 lg:pr-0 lg:pt-12">
        <p className="relative z-20 row-start-1 mx-6 mt-6 inline-flex items-center gap-2 text-[11px] md:text-sm leading-relaxed font-medium text-slate-600 md:m-0 md:rounded-full md:border md:border-white/80 md:bg-white/60 md:px-3 md:py-1.5">
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 rounded-full bg-blue-500 ring-4 ring-blue-500/5"
          />
          {eyebrow}
        </p>

        <h1
          id="hero-title"
          className="relative z-20 row-start-2 mx-6 mt-4 text-[clamp(2rem,9vw,3.125rem)] leading-[1.06] font-extrabold tracking-[-0.045em] md:mx-0 md:mt-5 md:text-5xl lg:text-[54px] xl:text-[64px]"
        >
          {header}
          <br />
          <span className="text-blue-500">{headerHighlight}</span>
        </h1>

        <p className="relative z-20 row-start-3 mx-6 mt-4 max-w-[340px] text-[13px] leading-relaxed text-slate-600 md:mx-0 md:mt-5 md:max-w-[460px] md:text-sm lg:text-base">
          {desc}
        </p>

        <div className="relative z-30 row-start-4 mx-6 mt-5 flex flex-col items-start gap-3 md:mx-0 md:mt-6 md:flex-row">
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-500/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 lg:px-7 lg:text-sm"
          >
            Оставить заявку
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </button>

          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-500 bg-white/80 px-5 py-3 text-xs font-semibold text-blue-500 transition-colors hover:bg-blue-500/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 lg:px-7 lg:text-sm"
          >
            Посмотреть цены
          </button>
        </div>

        <ul className="relative z-30 row-start-6 m-0 grid list-none grid-cols-3 gap-2 rounded-t-3xl bg-white/85 px-3 py-5 backdrop-blur-md md:mt-8 md:flex md:gap-4 md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-none lg:gap-7">
          {benefits.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex min-w-0 flex-col items-center gap-2 text-center md:flex-row md:text-left"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full border-4 border-white/60 bg-blue-500/10 text-blue-500">
                <Icon
                  aria-hidden="true"
                  className="size-[22px]"
                  strokeWidth={1.8}
                />
              </span>

              <p className="text-[10px] leading-relaxed font-semibold lg:text-xs">
                {title}
                <span className="block font-normal text-slate-600">
                  {description}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Product visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-10 row-start-5 -mt-20 h-[240px] overflow-hidden md:absolute md:inset-y-0 md:right-0 md:mt-0 md:h-auto md:w-[47%] md:overflow-visible"
      >
        <img
          src={image}
          alt=""
          width={1145}
          height={1374}
          fetchPriority="high"
          className="absolute -right-5 -bottom-20 w-[280px] max-w-none -rotate-6 hue-rotate-[-40deg] drop-shadow-xl md:-right-8 md:-bottom-12 md:w-[370px] md:-rotate-4 lg:right-2 lg:-bottom-24 lg:w-[450px] xl:right-10 xl:-bottom-32 xl:w-[500px]"
        />

        <div className="absolute top-20 right-5 hidden -rotate-12 font-[cursive] text-xl leading-snug text-blue-500 italic xl:block">
          Больше,
          <br />
          чем ремонт
          <svg viewBox="0 0 90 100" fill="none" className="mt-3 ml-4 h-20 w-16">
            <path
              d="M70 6C70 35 53 70 14 82m1-17L9 84l22 1"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

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
            <Slide
              eyebrow={item.eyebrow}
              desc={item.description}
              header={item.header}
              headerHighlight={item.headerHighlight}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile navigation / pagination */}
      <div className="w-full flex justify-center items-center gap-5 lg:hidden mt-5">
        <button
          className="btn btn-circle flex justify-center items-center bg-blue-500 text-white"
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
          className="btn btn-circle flex justify-center items-center bg-blue-500 text-white"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default HomeHeroSlider;
