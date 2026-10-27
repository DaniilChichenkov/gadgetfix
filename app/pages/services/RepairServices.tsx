import {
  ArrowUpRight,
  BatteryCharging,
  Camera,
  Droplets,
  Fan,
  Keyboard,
  Search,
  Smartphone,
  Usb,
  type LucideIcon,
} from "lucide-react";

type RepairService = {
  title: string;
  description: string;
  devices: string;
  icon: LucideIcon;
};

const repairServices: RepairService[] = [
  {
    title: "Замена экрана",
    description: "Трещины, нет изображения или не работает сенсор.",
    devices: "Смартфоны · Планшеты · Часы",
    icon: Smartphone,
  },
  {
    title: "Замена аккумулятора",
    description: "Быстро разряжается или не держит заряд.",
    devices: "Смартфоны · Ноутбуки · Часы",
    icon: BatteryCharging,
  },
  {
    title: "Ремонт разъёмов",
    description: "Проблемы с зарядкой, USB-C или HDMI.",
    devices: "Смартфоны · Ноутбуки · Консоли",
    icon: Usb,
  },
  {
    title: "Чистка и охлаждение",
    description: "Перегрев, шум вентилятора и снижение производительности.",
    devices: "Ноутбуки · Консоли",
    icon: Fan,
  },
  {
    title: "Клавиатура и тачпад",
    description: "Не работают клавиши или возникают проблемы с управлением.",
    devices: "Ноутбуки",
    icon: Keyboard,
  },
  {
    title: "После попадания воды",
    description: "Диагностика и восстановление после попадания жидкости.",
    devices: "Смартфоны · Планшеты · Ноутбуки",
    icon: Droplets,
  },
  {
    title: "Камера и звук",
    description: "Проблемы с камерой, микрофоном или динамиком.",
    devices: "Смартфоны · Планшеты",
    icon: Camera,
  },
  {
    title: "Диагностика",
    description: "Проверим устройство и найдём причину неисправности.",
    devices: "Все устройства",
    icon: Search,
  },
];

export default function RepairServicesSection() {
  return (
    <section
      id="repair-services"
      aria-labelledby="repair-services-title"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mb-6">
        <h2
          id="repair-services-title"
          className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
        >
          С чем мы можем вам помочь?
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Популярные услуги по ремонту электроники. Выберите устройство в
          подборе ремонта, чтобы узнать доступные услуги и стоимость.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {repairServices.map(({ title, description, devices, icon: Icon }) => (
          <article
            key={title}
            className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-sm sm:p-5"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-500 transition-colors group-hover:bg-blue-100">
                <Icon
                  aria-hidden="true"
                  className="h-6 w-6"
                  strokeWidth={1.7}
                />
              </span>

              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-blue-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>

            <h3 className="text-sm font-bold leading-snug text-slate-950 sm:text-base">
              <a
                href="#repair-finder"
                className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-blue-500 focus-visible:after:ring-offset-2"
              >
                {title}
              </a>
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              {description}
            </p>

            <p className="mt-auto pt-5 text-[11px] leading-relaxed text-slate-400 sm:text-xs">
              {devices}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-5 text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
        Доступность услуг и стоимость зависят от модели устройства.
      </p>
    </section>
  );
}
