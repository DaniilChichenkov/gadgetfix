import { useId, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, ChevronDown, Layers, Wrench } from "lucide-react";

export type BrandOption = {
  id: string;
  title: string;
  logoSrc?: string;
};

export type ModelOption = {
  id: string;
  brandId: string;
  title: string;
  imageSrc?: string;
};

export type ServicePrice = {
  modelId: string;
  serviceId: string;
  price: number;
};

export type RepairSelection = {
  categoryId: string;
  categoryTitle: string;
  serviceId: string;
  serviceTitle: string;
  brand: BrandOption;
  model: ModelOption;
  price: number;
};

export type ServicePriceSectionProps = {
  categoryId: string;
  categoryTitle: string;
  serviceId: string;
  serviceTitle: string;
  title?: string;
  // Pass the brands and models belonging to the current category.
  brands: BrandOption[];
  models: ModelOption[];
  prices: ServicePrice[];
  onRequest: (selection: RepairSelection) => void;
  onMissingModel?: () => void;
};

const priceFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export default function ServicePriceSection(props: ServicePriceSectionProps) {
  return (
    <ServicePriceForm
      key={JSON.stringify([props.categoryId, props.serviceId])}
      {...props}
    />
  );
}

function ServicePriceForm({
  categoryId,
  categoryTitle,
  serviceId,
  serviceTitle,
  title = "Сколько стоит ремонт?",
  brands,
  models,
  prices,
  onRequest,
  onMissingModel,
}: ServicePriceSectionProps) {
  const id = useId();
  const [selection, setSelection] = useState({
    brandId: "",
    modelId: "",
  });

  const selectedBrand = brands.find((brand) => brand.id === selection.brandId);

  const availableModels = selectedBrand
    ? models.filter((model) => model.brandId === selectedBrand.id)
    : [];

  const selectedModel = availableModels.find(
    (model) => model.id === selection.modelId,
  );

  const selectedPrice = selectedModel
    ? prices.find(
        (item) =>
          item.modelId === selectedModel.id && item.serviceId === serviceId,
      )
    : undefined;

  function selectBrand(brandId: string) {
    setSelection((current) =>
      current.brandId === brandId ? current : { brandId, modelId: "" },
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedBrand || !selectedModel || !selectedPrice) return;

    onRequest({
      categoryId,
      categoryTitle,
      serviceId,
      serviceTitle,
      brand: selectedBrand,
      model: selectedModel,
      price: selectedPrice.price,
    });
  }

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-7xl px-4 lg:px-8"
    >
      <div className="w-full rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-white p-5 sm:p-8">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h2
              id={`${id}-title`}
              className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
            >
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Выберите бренд и модель — покажем стоимость ремонта.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2">
              <Layers
                aria-hidden="true"
                className="size-4 shrink-0 text-blue-500"
              />
              <span className="text-slate-500">
                Категория:{" "}
                <span className="font-medium text-blue-500">
                  {categoryTitle}
                </span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2">
              <Wrench
                aria-hidden="true"
                className="size-4 shrink-0 text-blue-500"
              />
              <span className="text-slate-500">
                Услуга:{" "}
                <span className="font-medium text-blue-500">
                  {serviceTitle}
                </span>
              </span>
            </span>
          </div>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start"
        >
          <div className="min-w-0">
            <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
              <fieldset className="min-w-0">
                <legend className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
                  <span className="grid size-7 place-items-center rounded-full bg-blue-500 text-white">
                    1
                  </span>
                  Бренд
                </legend>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {brands.map((brand) => {
                    const active = brand.id === selectedBrand?.id;

                    return (
                      <button
                        key={brand.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => selectBrand(brand.id)}
                        className={`relative flex min-h-20 min-w-0 flex-col items-center justify-center gap-2 rounded-xl border bg-white px-2 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                          active
                            ? "border-blue-500 ring-1 ring-blue-500"
                            : "border-slate-200 hover:border-blue-300"
                        }`}
                      >
                        {active && (
                          <span className="absolute right-1.5 top-1.5 grid size-4 place-items-center rounded-full bg-blue-500 text-white">
                            <Check
                              aria-hidden="true"
                              className="size-3"
                              strokeWidth={3}
                            />
                          </span>
                        )}
                        {brand.logoSrc && (
                          <img
                            src={brand.logoSrc}
                            alt=""
                            className="h-7 w-12 object-contain"
                          />
                        )}
                        <span className="text-center text-xs font-semibold text-slate-700">
                          {brand.title}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {brands.length === 0 && (
                  <p className="text-sm text-slate-500">
                    Список брендов пока пуст.
                  </p>
                )}
              </fieldset>

              <div>
                <label
                  htmlFor={`${id}-model`}
                  className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950"
                >
                  <span className="grid size-7 place-items-center rounded-full bg-blue-500 text-white">
                    2
                  </span>
                  Модель
                </label>

                <div className="relative">
                  <select
                    id={`${id}-model`}
                    name="modelId"
                    value={selectedModel?.id ?? ""}
                    disabled={!selectedBrand || availableModels.length === 0}
                    onChange={(event) => {
                      const modelId = event.target.value;
                      setSelection((current) => ({ ...current, modelId }));
                    }}
                    className="min-h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-4 pr-10 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                  >
                    <option value="">
                      {!selectedBrand
                        ? "Сначала выберите бренд"
                        : availableModels.length === 0
                          ? "Модели не найдены"
                          : "Выберите модель"}
                    </option>
                    {availableModels.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>
            </div>

            {onMissingModel && (
              <button
                type="button"
                onClick={onMissingModel}
                className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-left text-sm font-medium text-blue-500 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Не нашли свою модель? Напишите нам
                <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
              </button>
            )}
          </div>

          <aside className="rounded-2xl border border-blue-100 bg-white p-4 sm:p-5">
            <div aria-live="polite" aria-atomic="true">
              {selectedModel ? (
                <div className="flex items-start gap-4">
                  {selectedModel.imageSrc && (
                    <img
                      src={selectedModel.imageSrc}
                      alt={selectedModel.title}
                      className="h-28 w-20 shrink-0 object-contain"
                    />
                  )}
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-slate-950">
                      {selectedModel.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {serviceTitle}
                    </p>
                    {selectedPrice ? (
                      <>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-blue-500">
                          {priceFormatter.format(selectedPrice.price)}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-slate-500">
                          Окончательную стоимость согласуем до ремонта.
                        </p>
                      </>
                    ) : (
                      <p className="mt-3 text-sm text-slate-600">
                        Стоимость уточняется. Свяжитесь с нами для расчёта.
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="py-3">
                  <h3 className="font-semibold text-slate-950">
                    {selectedBrand
                      ? "Выберите модель"
                      : "Выберите бренд и модель"}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Здесь появится стоимость услуги для вашего устройства.
                  </p>
                </div>
              )}
            </div>

            {selectedPrice && (
              <button
                type="submit"
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Подтвердить заявку
                <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
              </button>
            )}
          </aside>
        </form>
      </div>
    </section>
  );
}
