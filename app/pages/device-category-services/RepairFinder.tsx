import { useId, useState } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";

type Brand = {
  brandId: string;
  brandTitle: string;
  logoSrc?: string;
};

type DeviceModel = {
  modelId: string;
  modelTitle: string;
};

type RepairService = {
  serviceId: string;
  serviceTitle: string;
  price: number;
};

export type RepairPriceData = {
  BrandsMap: Record<string, Brand[]>;
  ModelMap: Record<string, DeviceModel[]>;
  ServicesMap: Record<string, RepairService[]>;
};

export type RepairSelection = {
  categoryId: string;
  brand: Brand;
  model: DeviceModel;
  service: RepairService;
};

type RepairPriceSectionProps = {
  categoryId: string;
  data?: RepairPriceData;
  onRequest: (selection: RepairSelection) => void;
};

// Demonstration data — replace with your actual data.
// Brand IDs are category-specific to keep their models separate.
export const dummyRepairData: RepairPriceData = {
  BrandsMap: {
    smartphones: [
      { brandId: "smartphones-apple", brandTitle: "Apple", logoSrc: "" },
      { brandId: "smartphones-samsung", brandTitle: "Samsung", logoSrc: "" },
      { brandId: "smartphones-xiaomi", brandTitle: "Xiaomi", logoSrc: "" },
      { brandId: "smartphones-google", brandTitle: "Google", logoSrc: "" },
      { brandId: "smartphones-honor", brandTitle: "Honor", logoSrc: "" },
    ],
    laptops: [
      { brandId: "laptops-apple", brandTitle: "Apple", logoSrc: "" },
      { brandId: "laptops-lenovo", brandTitle: "Lenovo", logoSrc: "" },
    ],
    tablets: [{ brandId: "tablets-apple", brandTitle: "Apple", logoSrc: "" }],
    consoles: [
      { brandId: "consoles-sony", brandTitle: "PlayStation", logoSrc: "" },
    ],
    smartwatches: [
      { brandId: "smartwatches-apple", brandTitle: "Apple", logoSrc: "" },
    ],
  },

  ModelMap: {
    "smartphones-apple": [
      { modelId: "iphone-15-pro", modelTitle: "iPhone 15 Pro" },
      { modelId: "iphone-15", modelTitle: "iPhone 15" },
    ],
    "smartphones-samsung": [
      { modelId: "galaxy-s24", modelTitle: "Galaxy S24" },
    ],
    "smartphones-xiaomi": [{ modelId: "xiaomi-14", modelTitle: "Xiaomi 14" }],
    "smartphones-google": [{ modelId: "pixel-8", modelTitle: "Pixel 8" }],
    "smartphones-honor": [{ modelId: "honor-90", modelTitle: "Honor 90" }],
    "laptops-apple": [
      { modelId: "macbook-air-m2", modelTitle: "MacBook Air M2" },
    ],
    "laptops-lenovo": [{ modelId: "ideapad-5", modelTitle: "IdeaPad 5" }],
    "tablets-apple": [{ modelId: "ipad-air-5", modelTitle: "iPad Air 5" }],
    "consoles-sony": [{ modelId: "ps5", modelTitle: "PlayStation 5" }],
    "smartwatches-apple": [
      { modelId: "apple-watch-9", modelTitle: "Apple Watch Series 9" },
    ],
  },

  ServicesMap: {
    "iphone-15-pro": [
      { serviceId: "15-pro-screen", serviceTitle: "Замена экрана", price: 249 },
      {
        serviceId: "15-pro-battery",
        serviceTitle: "Замена аккумулятора",
        price: 89,
      },
    ],
    "iphone-15": [
      { serviceId: "15-screen", serviceTitle: "Замена экрана", price: 199 },
      {
        serviceId: "15-battery",
        serviceTitle: "Замена аккумулятора",
        price: 79,
      },
    ],
    "galaxy-s24": [
      { serviceId: "s24-screen", serviceTitle: "Замена экрана", price: 219 },
      {
        serviceId: "s24-battery",
        serviceTitle: "Замена аккумулятора",
        price: 69,
      },
    ],
    "xiaomi-14": [
      { serviceId: "xiaomi-screen", serviceTitle: "Замена экрана", price: 169 },
      {
        serviceId: "xiaomi-battery",
        serviceTitle: "Замена аккумулятора",
        price: 59,
      },
    ],
    "pixel-8": [
      { serviceId: "pixel-screen", serviceTitle: "Замена экрана", price: 189 },
      {
        serviceId: "pixel-battery",
        serviceTitle: "Замена аккумулятора",
        price: 69,
      },
    ],
    "honor-90": [
      { serviceId: "honor-screen", serviceTitle: "Замена экрана", price: 149 },
      {
        serviceId: "honor-battery",
        serviceTitle: "Замена аккумулятора",
        price: 59,
      },
    ],
    "macbook-air-m2": [
      {
        serviceId: "macbook-battery",
        serviceTitle: "Замена аккумулятора",
        price: 149,
      },
      {
        serviceId: "macbook-keyboard",
        serviceTitle: "Замена клавиатуры",
        price: 189,
      },
    ],
    "ideapad-5": [
      {
        serviceId: "ideapad-cleaning",
        serviceTitle: "Чистка системы охлаждения",
        price: 59,
      },
      {
        serviceId: "ideapad-keyboard",
        serviceTitle: "Замена клавиатуры",
        price: 89,
      },
    ],
    "ipad-air-5": [
      { serviceId: "ipad-screen", serviceTitle: "Замена экрана", price: 199 },
      {
        serviceId: "ipad-battery",
        serviceTitle: "Замена аккумулятора",
        price: 99,
      },
    ],
    ps5: [
      {
        serviceId: "ps5-cleaning",
        serviceTitle: "Чистка системы охлаждения",
        price: 69,
      },
      { serviceId: "ps5-hdmi", serviceTitle: "Замена HDMI-разъёма", price: 99 },
    ],
    "apple-watch-9": [
      { serviceId: "watch-screen", serviceTitle: "Замена экрана", price: 159 },
      {
        serviceId: "watch-battery",
        serviceTitle: "Замена аккумулятора",
        price: 79,
      },
    ],
  },
};

const selectClassName =
  "min-h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-4 pr-10 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";

const buttonClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500";

const priceFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function StepLabel({ number, title }: { number: number; title: string }) {
  return (
    <span className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white"
      >
        {number}
      </span>

      <span className="text-sm font-semibold text-slate-900">{title}</span>
    </span>
  );
}

export default function RepairPriceSection({
  categoryId,
  data = dummyRepairData,
  onRequest,
}: RepairPriceSectionProps) {
  return (
    <RepairPriceContent
      key={categoryId}
      categoryId={categoryId}
      data={data}
      onRequest={onRequest}
    />
  );
}

function RepairPriceContent({
  categoryId,
  data,
  onRequest,
}: Omit<RepairPriceSectionProps, "data"> & {
  data: RepairPriceData;
}) {
  const id = useId();

  const [brandId, setBrandId] = useState(
    () => data.BrandsMap[categoryId]?.[0]?.brandId ?? "",
  );
  const [modelId, setModelId] = useState("");
  const [serviceId, setServiceId] = useState("");

  const brands = data.BrandsMap[categoryId] ?? [];

  const selectedBrand = brands.find((brand) => brand.brandId === brandId);

  const models = selectedBrand
    ? (data.ModelMap[selectedBrand.brandId] ?? [])
    : [];

  const selectedModel = models.find((model) => model.modelId === modelId);

  const services = selectedModel
    ? (data.ServicesMap[selectedModel.modelId] ?? [])
    : [];

  const selectedService = services.find(
    (service) => service.serviceId === serviceId,
  );

  // Derived directly from the current selections.
  const selection: RepairSelection | null =
    selectedBrand && selectedModel && selectedService
      ? {
          categoryId,
          brand: selectedBrand,
          model: selectedModel,
          service: selectedService,
        }
      : null;

  function handleBrandChange(nextBrandId: string) {
    if (nextBrandId === brandId) return;

    setBrandId(nextBrandId);
    setModelId("");
    setServiceId("");
  }

  function handleModelChange(nextModelId: string) {
    setModelId(nextModelId);
    setServiceId("");
  }

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-4 sm:p-6 lg:bg-white lg:p-8">
        <h2
          id={`${id}-title`}
          className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
        >
          Узнайте стоимость ремонта
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Выберите бренд, модель и нужную услугу.
        </p>

        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <fieldset className="min-w-0">
            <legend className="mb-3">
              <StepLabel number={1} title="Бренд" />
            </legend>

            {brands.length > 0 ? (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(72px,1fr))] gap-2">
                {brands.map((brand) => {
                  const isSelected = brand.brandId === brandId;

                  return (
                    <button
                      key={brand.brandId}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => handleBrandChange(brand.brandId)}
                      className={`relative flex min-h-24 min-w-0 flex-col items-center justify-center gap-2 rounded-xl border px-2 py-4 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                        isSelected
                          ? "border-blue-500 bg-blue-50 text-blue-500"
                          : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50"
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white">
                          <Check
                            aria-hidden="true"
                            className="h-3 w-3"
                            strokeWidth={3}
                          />
                        </span>
                      )}

                      {brand.logoSrc && (
                        <img
                          src={brand.logoSrc}
                          alt=""
                          className="h-7 max-w-full object-contain"
                        />
                      )}

                      <span className="break-words text-xs font-semibold">
                        {brand.brandTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-slate-500">
                Для этой категории пока нет брендов.
              </p>
            )}
          </fieldset>

          {/* Model */}
          <div className="min-w-0">
            <label htmlFor={`${id}-model`} className="mb-3 block">
              <StepLabel number={2} title="Модель" />
            </label>

            <div className="relative">
              <select
                id={`${id}-model`}
                value={selectedModel?.modelId ?? ""}
                disabled={!selectedBrand || models.length === 0}
                onChange={(event) => handleModelChange(event.target.value)}
                className={selectClassName}
              >
                <option value="" disabled>
                  {!selectedBrand
                    ? "Сначала выберите бренд"
                    : models.length === 0
                      ? "Модели пока не добавлены"
                      : "Выберите модель"}
                </option>

                {models.map((model) => (
                  <option key={model.modelId} value={model.modelId}>
                    {model.modelTitle}
                  </option>
                ))}
              </select>

              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
              />
            </div>

            <a
              href="#contacts"
              className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-blue-500 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Не нашли модель? Напишите нам
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Service */}
          <div className="min-w-0">
            <label htmlFor={`${id}-service`} className="mb-3 block">
              <StepLabel number={3} title="Услуга" />
            </label>

            <div className="relative">
              <select
                id={`${id}-service`}
                value={selectedService?.serviceId ?? ""}
                disabled={!selectedModel || services.length === 0}
                onChange={(event) => setServiceId(event.target.value)}
                className={selectClassName}
              >
                <option value="" disabled>
                  {!selectedModel
                    ? "Сначала выберите модель"
                    : services.length === 0
                      ? "Услуги пока не добавлены"
                      : "Выберите услугу"}
                </option>

                {services.map((service) => (
                  <option key={service.serviceId} value={service.serviceId}>
                    {service.serviceTitle}
                  </option>
                ))}
              </select>

              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
              />
            </div>
          </div>
        </div>

        {/* Appears immediately when a service is selected */}
        <div aria-live="polite" aria-atomic="true">
          {selection && (
            <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  {selection.model.modelTitle}
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  {selection.service.serviceTitle}
                </p>

                <p className="mt-3 text-xs text-slate-500">
                  Ориентировочная стоимость
                </p>

                <p className="mt-1 text-3xl font-extrabold tracking-tight text-blue-500">
                  {priceFormatter.format(selection.service.price)}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Окончательную стоимость согласуем до начала ремонта.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onRequest(selection)}
                className={`${buttonClassName} shrink-0`}
              >
                Оставить заявку
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
