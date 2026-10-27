import imageExample from "~/src/smarthponeServices.png";

export default function RepairInformationSection() {
  return (
    <section
      aria-labelledby="repair-information-title"
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Introduction */}
        <div className="lg:col-start-1 lg:row-start-1">
          <h2
            id="repair-information-title"
            className="max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl"
          >
            Ремонт электроники в Таллине и по всей Эстонии
          </h2>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              Мы ремонтируем смартфоны, ноутбуки, планшеты, консоли и умные
              часы. Проводим диагностику, согласуем стоимость и выполняем ремонт
              только после вашего подтверждения.
            </p>

            <p>
              Вы можете обратиться в наш салон в Таллине или отправить
              устройство через почтомат из любой точки Эстонии. Поможем
              разобраться в неисправности и подобрать подходящий вариант
              ремонта.
            </p>
          </div>
        </div>

        {/* Repair photo */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-blue-50 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:aspect-auto lg:min-h-[340px]">
          <img
            src={imageExample}
            alt="Мастер ремонтирует электронное устройство в сервисном центре"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Helpful information */}
        <div className="grid gap-6 sm:grid-cols-2 lg:col-start-1 lg:row-start-2">
          <article>
            <h3 className="text-base font-bold text-slate-950 sm:text-lg">
              От чего зависит стоимость?
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Стоимость ремонта зависит от модели устройства, характера
              неисправности и необходимых деталей. После диагностики объясним,
              какие работы нужны, и согласуем точную цену до начала ремонта.
            </p>
          </article>

          <article className="border-t border-slate-200 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
            <h3 className="text-base font-bold text-slate-950 sm:text-lg">
              Что подготовить перед ремонтом?
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Если это возможно, создайте резервную копию важных данных.
              Опишите, что не работает и при каких условиях проявляется проблема
              — это поможет быстрее провести диагностику.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
