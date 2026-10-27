import { useState } from "react";
import { ArrowUpRight, Camera, ChevronDown, Search } from "lucide-react";

import imageExample from "~/src/smarthponeServices.png";

type Category = {
  deviceTitle: string;
  deviceCategoryId: string;
};

type Brand = {
  brandTitle: string;
  brandId: string;
};

type DeviceModel = {
  modelTitle: string;
  modelId: string;
};

type Service = {
  serviceTitle: string;
  serviceId: string;
  price: number;
};

// Categories
export const CategoriesMap: Category[] = [
  { deviceTitle: "Смартфоны", deviceCategoryId: "smartphones" },
  { deviceTitle: "Ноутбуки", deviceCategoryId: "laptops" },
  { deviceTitle: "Планшеты", deviceCategoryId: "tablets" },
  { deviceTitle: "Консоли", deviceCategoryId: "consoles" },
  { deviceTitle: "Умные часы", deviceCategoryId: "smartwatches" },
];

// Key: deviceCategoryId
// Brand IDs include the category so Apple phones and laptops have separate models.
export const BrandsMap: Record<string, Brand[]> = {
  smartphones: [
    { brandTitle: "Apple", brandId: "smartphones-apple" },
    { brandTitle: "Samsung", brandId: "smartphones-samsung" },
  ],
  laptops: [
    { brandTitle: "Apple", brandId: "laptops-apple" },
    { brandTitle: "Lenovo", brandId: "laptops-lenovo" },
  ],
  tablets: [
    { brandTitle: "Apple", brandId: "tablets-apple" },
    { brandTitle: "Samsung", brandId: "tablets-samsung" },
  ],
  consoles: [
    { brandTitle: "PlayStation", brandId: "consoles-playstation" },
    { brandTitle: "Xbox", brandId: "consoles-xbox" },
  ],
  smartwatches: [
    { brandTitle: "Apple", brandId: "smartwatches-apple" },
    { brandTitle: "Samsung", brandId: "smartwatches-samsung" },
  ],
};

// Key: brandId
export const ModelMap: Record<string, DeviceModel[]> = {
  "smartphones-apple": [
    { modelTitle: "iPhone 15 Pro", modelId: "iphone-15-pro" },
    { modelTitle: "iPhone 15", modelId: "iphone-15" },
  ],
  "smartphones-samsung": [{ modelTitle: "Galaxy S24", modelId: "galaxy-s24" }],
  "laptops-apple": [
    { modelTitle: "MacBook Air M2", modelId: "macbook-air-m2" },
  ],
  "laptops-lenovo": [{ modelTitle: "IdeaPad 5", modelId: "ideapad-5" }],
  "tablets-apple": [{ modelTitle: "iPad Air 5", modelId: "ipad-air-5" }],
  "tablets-samsung": [
    { modelTitle: "Galaxy Tab S9", modelId: "galaxy-tab-s9" },
  ],
  "consoles-playstation": [{ modelTitle: "PlayStation 5", modelId: "ps5" }],
  "consoles-xbox": [{ modelTitle: "Xbox Series X", modelId: "xbox-series-x" }],
  "smartwatches-apple": [
    { modelTitle: "Apple Watch Series 9", modelId: "apple-watch-9" },
  ],
  "smartwatches-samsung": [
    { modelTitle: "Galaxy Watch 6", modelId: "galaxy-watch-6" },
  ],
};

// Key: modelId
// All prices are illustrative.
export const ServicesMap: Record<string, Service[]> = {
  "iphone-15-pro": [
    { serviceTitle: "Замена экрана", serviceId: "15-pro-screen", price: 249 },
    {
      serviceTitle: "Замена аккумулятора",
      serviceId: "15-pro-battery",
      price: 89,
    },
    {
      serviceTitle: "Ремонт разъёма зарядки",
      serviceId: "15-pro-port",
      price: 99,
    },
  ],
  "iphone-15": [
    { serviceTitle: "Замена экрана", serviceId: "15-screen", price: 199 },
    { serviceTitle: "Замена аккумулятора", serviceId: "15-battery", price: 79 },
  ],
  "galaxy-s24": [
    { serviceTitle: "Замена экрана", serviceId: "s24-screen", price: 219 },
    {
      serviceTitle: "Замена аккумулятора",
      serviceId: "s24-battery",
      price: 69,
    },
  ],
  "macbook-air-m2": [
    {
      serviceTitle: "Замена аккумулятора",
      serviceId: "air-m2-battery",
      price: 149,
    },
    {
      serviceTitle: "Замена клавиатуры",
      serviceId: "air-m2-keyboard",
      price: 189,
    },
  ],
  "ideapad-5": [
    {
      serviceTitle: "Чистка системы охлаждения",
      serviceId: "ideapad-cleaning",
      price: 59,
    },
    {
      serviceTitle: "Замена клавиатуры",
      serviceId: "ideapad-keyboard",
      price: 89,
    },
  ],
  "ipad-air-5": [
    { serviceTitle: "Замена экрана", serviceId: "ipad-air-screen", price: 199 },
    {
      serviceTitle: "Замена аккумулятора",
      serviceId: "ipad-air-battery",
      price: 99,
    },
  ],
  "galaxy-tab-s9": [
    { serviceTitle: "Замена экрана", serviceId: "tab-s9-screen", price: 229 },
    {
      serviceTitle: "Ремонт разъёма зарядки",
      serviceId: "tab-s9-port",
      price: 79,
    },
  ],
  ps5: [
    {
      serviceTitle: "Чистка системы охлаждения",
      serviceId: "ps5-cleaning",
      price: 69,
    },
    { serviceTitle: "Замена HDMI-разъёма", serviceId: "ps5-hdmi", price: 99 },
  ],
  "xbox-series-x": [
    {
      serviceTitle: "Чистка системы охлаждения",
      serviceId: "xbox-cleaning",
      price: 69,
    },
    { serviceTitle: "Замена HDMI-разъёма", serviceId: "xbox-hdmi", price: 99 },
  ],
  "apple-watch-9": [
    { serviceTitle: "Замена экрана", serviceId: "watch-9-screen", price: 159 },
    {
      serviceTitle: "Замена аккумулятора",
      serviceId: "watch-9-battery",
      price: 79,
    },
  ],
  "galaxy-watch-6": [
    { serviceTitle: "Замена экрана", serviceId: "watch-6-screen", price: 129 },
    {
      serviceTitle: "Замена аккумулятора",
      serviceId: "watch-6-battery",
      price: 59,
    },
  ],
};

const priceFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const inputClassName =
  "min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15";

type SelectStepProps = {
  step: number;
  label: string;
  placeholder: string;
  value: string;
  options: { id: string; title: string }[];
  onChange: (value: string) => void;
  disabled?: boolean;
};

function SelectStep({
  step,
  label,
  placeholder,
  value,
  options,
  onChange,
  disabled = false,
}: SelectStepProps) {
  return (
    <label className="block min-w-0">
      <span className="mb-3 flex items-center gap-2">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
            value
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 ring-1 ring-blue-100"
          }`}
        >
          {step}
        </span>

        <span className="text-sm font-semibold text-slate-900">{label}</span>
      </span>

      <span className="relative block">
        <select
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
          className={`${inputClassName} appearance-none truncate pr-10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
          ))}
        </select>

        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
        />
      </span>
    </label>
  );
}

export default function RepairFinderSection() {
  // Prefilled example matching the design.
  const [categoryId, setCategoryId] = useState("smartphones");
  const [brandId, setBrandId] = useState("smartphones-apple");
  const [modelId, setModelId] = useState("iphone-15-pro");
  const [serviceId, setServiceId] = useState("15-pro-screen");

  const availableBrands = BrandsMap[categoryId] ?? [];
  const availableModels = ModelMap[brandId] ?? [];
  const availableServices = ServicesMap[modelId] ?? [];

  const selectedModel = availableModels.find(
    (model) => model.modelId === modelId,
  );

  const selectedService = availableServices.find(
    (service) => service.serviceId === serviceId,
  );

  function handleCategoryChange(value: string) {
    setCategoryId(value);
    setBrandId("");
    setModelId("");
    setServiceId("");
  }

  function handleBrandChange(value: string) {
    setBrandId(value);
    setModelId("");
    setServiceId("");
  }

  function handleModelChange(value: string) {
    setModelId(value);
    setServiceId("");
  }

  return (
    <section
      id="repair-finder"
      aria-labelledby="repair-finder-title"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="grid gap-6 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/60 p-4 sm:p-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8 lg:p-8">
        {/* Device and service selection */}
        <div className="flex min-w-0 flex-col">
          <div>
            <h2
              id="repair-finder-title"
              className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
            >
              Найдите услугу и узнайте стоимость
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Выберите категорию, бренд, модель и нужную услугу.
            </p>
          </div>

          <div className="my-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <SelectStep
              step={1}
              label="Категория"
              placeholder="Выберите устройство"
              value={categoryId}
              onChange={handleCategoryChange}
              options={CategoriesMap.map((category) => ({
                id: category.deviceCategoryId,
                title: category.deviceTitle,
              }))}
            />

            <SelectStep
              step={2}
              label="Бренд"
              placeholder="Выберите бренд"
              value={brandId}
              disabled={!categoryId}
              onChange={handleBrandChange}
              options={availableBrands.map((brand) => ({
                id: brand.brandId,
                title: brand.brandTitle,
              }))}
            />

            <SelectStep
              step={3}
              label="Модель"
              placeholder="Выберите модель"
              value={modelId}
              disabled={!brandId}
              onChange={handleModelChange}
              options={availableModels.map((model) => ({
                id: model.modelId,
                title: model.modelTitle,
              }))}
            />

            <SelectStep
              step={4}
              label="Услуга"
              placeholder="Выберите услугу"
              value={serviceId}
              disabled={!modelId}
              onChange={setServiceId}
              options={availableServices.map((service) => ({
                id: service.serviceId,
                title: service.serviceTitle,
              }))}
            />
          </div>

          <button
            type="button"
            className="mt-auto inline-flex min-h-11 items-center gap-2 self-start text-left text-sm font-medium text-blue-500 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Не нашли модель или услугу? Напишите нам
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          </button>
        </div>

        {/* Price and request form */}
        <div className="min-w-0 rounded-2xl bg-white p-5 sm:p-6">
          {selectedModel && selectedService ? (
            <>
              <div
                aria-live="polite"
                aria-atomic="true"
                className="mb-6 flex items-center gap-4"
              >
                <div className="h-28 w-20 shrink-0 overflow-hidden rounded-xl bg-blue-50">
                  <img
                    src={imageExample}
                    alt={selectedModel.modelTitle}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-slate-950">
                    {selectedModel.modelTitle}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    {selectedService.serviceTitle}
                  </p>

                  <p className="mt-3 text-xs text-slate-500">
                    Пример стоимости
                  </p>

                  <p className="mt-1 text-4xl font-extrabold tracking-tight text-slate-950">
                    {priceFormatter.format(selectedService.price)}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    Точную стоимость согласуем до ремонта.
                  </p>
                </div>
              </div>

              {/* UI only — no submission or validation */}
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-slate-700">
                      Ваше имя
                    </span>

                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Введите ваше имя"
                      className={inputClassName}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-slate-700">
                      Телефон
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+372 5555 5555"
                      className={inputClassName}
                    />
                  </label>
                </div>

                <label className="block cursor-pointer">
                  <span className="mb-2 block text-xs font-medium text-slate-700">
                    Фото устройства{" "}
                    <span className="font-normal text-slate-400">
                      (необязательно)
                    </span>
                  </span>

                  <input
                    type="file"
                    name="devicePhoto"
                    accept="image/jpeg,image/png"
                    className="peer sr-only"
                  />

                  <span className="flex min-h-24 items-center justify-center gap-3 rounded-xl border border-dashed border-blue-200 bg-blue-50/60 p-4 transition hover:border-blue-500 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2">
                    <Camera
                      aria-hidden="true"
                      className="h-7 w-7 shrink-0 text-blue-500"
                      strokeWidth={1.7}
                    />

                    <span>
                      <span className="block text-sm font-medium text-blue-500">
                        Добавить фото
                      </span>
                      <span className="mt-1 block text-xs text-slate-400">
                        JPG, PNG
                      </span>
                    </span>
                  </span>
                </label>

                <label className="flex cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    className="mt-0.5 h-4 w-4 shrink-0 accent-blue-500"
                  />

                  <span className="text-xs leading-relaxed text-slate-500">
                    Я согласен на обработку персональных данных
                  </span>
                </label>

                <button
                  type="button"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Оставить заявку
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            <div
              role="status"
              className="flex min-h-80 flex-col items-center justify-center px-4 text-center"
            >
              <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
                <Search aria-hidden="true" className="h-7 w-7" />
              </span>

              <h3 className="text-lg font-bold text-slate-950">
                Подберём ремонт для вашего устройства
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
                Выберите категорию, бренд, модель и услугу — здесь появятся
                стоимость и форма заявки.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
