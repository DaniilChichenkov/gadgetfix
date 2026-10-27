import { ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router";

export type DeviceIssue = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

import imageExample from "~/src/smarthponeServices.png";

const smartphoneIssues: DeviceIssue[] = [
  {
    id: "screen",
    title: "Замена экрана",
    description:
      "Трещины, не работает сенсор или появились искажения на изображении.",
    imageSrc: imageExample,
    href: "/services/smartphones/screen-replacement",
  },
  {
    id: "battery",
    title: "Замена аккумулятора",
    description:
      "Быстро разряжается, не держит заряд или самостоятельно выключается.",
    imageSrc: imageExample,
    href: "/services/smartphones/battery-replacement",
  },
  {
    id: "charging",
    title: "Ремонт разъёма зарядки",
    description: "Плохо заряжается или приходится менять положение кабеля.",
    imageSrc: imageExample,
    href: "/services/smartphones/charging-port-repair",
  },
  {
    id: "water",
    title: "После попадания воды",
    description: "Не включается, работает нестабильно или появились ошибки.",
    imageSrc: imageExample,
    href: "/services/smartphones/water-damage",
  },
  {
    id: "camera",
    title: "Ремонт камеры",
    description:
      "Не фокусируется, делает размытые фотографии или не работает камера.",
    imageSrc: imageExample,
    href: "/services/smartphones/camera-repair",
  },
  {
    id: "diagnostics",
    title: "Диагностика",
    description: "Проверим устройство и найдём причину неисправности.",
    imageSrc: imageExample,
    href: "/services/smartphones/diagnostics",
  },
];

type DeviceIssuesSectionProps = {
  title?: string;
  items?: DeviceIssue[];
};

export default function DeviceIssuesSection({
  title = "Что случилось со смартфоном?",
  items = smartphoneIssues,
}: DeviceIssuesSectionProps) {
  const { lang, deviceCategory } = useParams();

  return (
    <section
      id="device-issues"
      aria-labelledby="device-issues-title"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8"
    >
      <h2
        id="device-issues-title"
        className="mb-6 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
      >
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {items.map(({ id, title, description, imageSrc, href }) => (
          <article key={id} className="h-full">
            <Link
              to={`/${lang}/${href}`}
              className="group grid h-full grid-cols-1 gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-3 transition duration-200 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:grid-cols-[0.9fr_1.1fr]"
            >
              {/* Issue image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-blue-50 lg:aspect-auto lg:min-h-40">
                <img
                  src={imageSrc}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card content */}
              <div className="flex min-w-0 flex-col py-1">
                <h3 className="text-sm font-bold leading-snug text-slate-950 sm:text-base">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {description}
                </p>

                <span className="mt-auto inline-flex items-center gap-1.5 self-start pt-4 text-xs font-semibold text-blue-500 sm:text-sm">
                  Подробнее
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
