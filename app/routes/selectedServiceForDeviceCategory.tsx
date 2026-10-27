import React from "react";
import type { Route } from "./+types/selectedServiceForDeviceCategory";

import {
  RouteHeroSection,
  RepairProcessSection,
  FaqSection,
  UsefulToKnowSection,
  RepairHelpSection,
  RepairPreFooter,
} from "~/components";

import {
  ServicePriceSection,
  RepairSignsSection,
} from "~/pages/selected-service-for-device-category";
import {
  type BrandOption,
  type ModelOption,
  type ServicePrice,
} from "~/pages/selected-service-for-device-category/ServicePriceSection";

import imageExample from "~/src/smarthponeServices.png";
import { ClipboardCheck, Settings2, Smartphone } from "lucide-react";

// Example data: all prices are illustrative.
const exampleBrands: BrandOption[] = [
  { id: "apple", title: "Apple", logoSrc: "" },
  { id: "samsung", title: "Samsung", logoSrc: "" },
  { id: "xiaomi", title: "Xiaomi", logoSrc: "" },
  { id: "google", title: "Google", logoSrc: "" },
];

const exampleModels: ModelOption[] = [
  { id: "iphone-15", brandId: "apple", title: "iPhone 15", imageSrc: "" },
  {
    id: "iphone-15-pro",
    brandId: "apple",
    title: "iPhone 15 Pro",
    imageSrc: "",
  },
  { id: "galaxy-s23", brandId: "samsung", title: "Galaxy S23", imageSrc: "" },
  { id: "galaxy-s24", brandId: "samsung", title: "Galaxy S24", imageSrc: "" },
  { id: "xiaomi-14", brandId: "xiaomi", title: "Xiaomi 14", imageSrc: "" },
  { id: "pixel-8", brandId: "google", title: "Pixel 8", imageSrc: "" },
];

const examplePrices: ServicePrice[] = [
  { modelId: "iphone-15", serviceId: "screen-replacement", price: 199 },
  { modelId: "iphone-15-pro", serviceId: "screen-replacement", price: 249 },
  { modelId: "galaxy-s23", serviceId: "screen-replacement", price: 189 },
  { modelId: "galaxy-s24", serviceId: "screen-replacement", price: 229 },
  { modelId: "xiaomi-14", serviceId: "screen-replacement", price: 179 },
  { modelId: "pixel-8", serviceId: "screen-replacement", price: 219 },
];

export const loader = async ({ params }: Route.LoaderArgs) => {
  return {
    hero: {
      title: "Замена экрана смартфона в Нарве и по всей Эстонии",
      description:
        "Разбилось стекло, появились трещины или не работает сенсор? Подберем вариант ремонта для вашей модели. Принимаем смартфоны в салоне и через почтомат по Эстонии",
      image: imageExample,
    },
    calculatePriceSection: {
      categoryTitle: "Смартфоны",
      categoryId: "smartphones",
      serviceId: "screen-replacement",
      serviceTitle: "Замена экрана",
      title: "Сколько стоит замена экрана смартфона?",
      brands: exampleBrands,
      models: exampleModels,
      prices: examplePrices,
    },
    whenRepairIsNeeded: {
      id: "screen-replacement-signs",
      title: "Когда смартфону нужна замена экрана?",
      note: "Точную причину неисправности определим после диагностики.",
      items: [
        {
          id: "cracks",
          title: "Трещины и сколы",
          description:
            "На стекле появились трещины, сколы или повреждения после падения.",
          imageSrc: imageExample,
          imageAlt: "Трещины на экране смартфона",
        },
        {
          id: "display-defects",
          title: "Полосы и пятна",
          description:
            "На дисплее видны полосы, пятна или искажения изображения.",
          imageSrc: imageExample,
          imageAlt: "Полосы и пятна на дисплее смартфона",
        },
        {
          id: "touch-issues",
          title: "Не работает сенсор",
          description:
            "Экран не реагирует на касания или срабатывает самопроизвольно.",
          imageSrc: imageExample,
          imageAlt: "Проверка сенсора смартфона",
        },
        {
          id: "black-screen",
          title: "Чёрный экран",
          description:
            "Смартфон включается, но изображение отсутствует или периодически пропадает.",
          imageSrc: imageExample,
          imageAlt: "Смартфон с чёрным экраном",
        },
      ],
    },
    faq: {
      title: "Вопросы о замене экрана смартфона",
      imageSrc: imageExample,
      imageAlt: "Мастер заменяет экран смартфона",
      items: [
        {
          id: "price",
          question: "Можно ли узнать стоимость заранее?",
          answer:
            "Выберите бренд, модель и услугу — стоимость появится автоматически. Если причина неисправности неясна, уточним цену после диагностики и согласуем её до начала ремонта.",
        },
        {
          id: "missing-model",
          question: "Что делать, если моей модели нет в списке?",
          answer:
            "Напишите нам или оставьте заявку, указав модель смартфона и описав проблему. Мы уточним возможность ремонта и подскажем дальнейшие шаги.",
        },
        {
          id: "repair-time",
          question: "Сколько времени занимает ремонт?",
          answer:
            "Срок зависит от неисправности, сложности работ и наличия деталей. После диагностики сообщим ориентировочное время ремонта.",
        },
        {
          id: "personal-data",
          question: "Сохранятся ли данные на телефоне?",
          answer:
            "Это зависит от неисправности и необходимых работ. По возможности заранее создайте резервную копию важных данных. Если потребуется сброс устройства, обсудим это с вами до начала ремонта.",
        },
        {
          id: "postal-delivery",
          question: "Можно ли отправить телефон через почтомат?",
          answer:
            "Да, вы можете отправить смартфон из любой точки Эстонии. Перед отправкой свяжитесь с нами, чтобы согласовать доставку и получить инструкции по упаковке.",
        },
      ],
    },
    usefulToKnow: {
      title: "Полезно знать",
      allArticlesHref: "/blog",
      articles: [
        {
          id: "prepare-phone",
          title: "Как подготовить телефон к ремонту",
          excerpt:
            "Несколько простых шагов, чтобы ремонт прошёл быстрее и безопаснее.",
          imageSrc: imageExample,
          imageAlt: "Подготовка смартфона к ремонту",
          href: "/blog/prepare-phone-for-repair",
        },
        {
          id: "battery-drain",
          title: "Почему смартфон быстро разряжается",
          excerpt:
            "Разбираем основные причины и рассказываем, что с этим можно сделать.",
          imageSrc: imageExample,
          imageAlt: "Смартфон с низким уровнем заряда",
          href: "/blog/phone-battery-drains-fast",
        },
        {
          id: "charging-problems",
          title: "Если телефон не заряжается",
          excerpt:
            "Возможные причины проблем с зарядкой и когда стоит обратиться в сервис.",
          imageSrc: imageExample,
          imageAlt: "Проверка разъёма зарядки смартфона",
          href: "/blog/phone-not-charging",
        },
      ],
    },
    finalCtaForm: {
      imageSrc: imageExample,
      imageAlt: "Смартфоны для ремонта",
      title: "Нужна замена экрана смартфона?",
      description: "Оставьте заявку - уточним детали и согласуем ремонт",
    },
  };
};

const SelectedServiceForDeviceCategory = ({
  loaderData,
}: Route.ComponentProps) => {
  return (
    <>
      <RouteHeroSection {...loaderData.hero} />
      <ServicePriceSection
        {...loaderData.calculatePriceSection}
        onRequest={(selection) => {
          // Open your modal here and pass it the selected device/service.
          console.log(selection);
        }}
      />
      <RepairSignsSection
        {...loaderData.whenRepairIsNeeded}
        id="screen-replacement-signs"
      />
      <RepairProcessSection />
      <FaqSection {...loaderData.faq} />
      <UsefulToKnowSection {...loaderData.usefulToKnow} />
      <RepairHelpSection {...loaderData.finalCtaForm} />
      <RepairPreFooter />
    </>
  );
};

export default SelectedServiceForDeviceCategory;
