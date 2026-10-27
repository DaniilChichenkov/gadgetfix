import React from "react";

import {
  RouteHeroSection,
  RepairProcessSection,
  FaqSection,
  UsefulToKnowSection,
  RepairHelpSection,
  RepairPreFooter,
} from "~/components";
import {
  RepairPriceSection,
  DeviceIssuesSection,
  WhenRepairNeededSection,
} from "~/pages/device-category-services";

import type { Route } from "./+types/deviceCategoryService";

import imageExample from "~/src/smarthponeServices.png";

export const loader = async ({ params }: Route.LoaderArgs) => {
  // Return dummy data for now
  return {
    hero: {
      title: "Ремонт смартфонов в Нарве и по всей Эстонии",
      description: "Поможем с экраном, аккумулятором и другими неисправностями",
      image: imageExample,
    },
  };
};

const DeviceCategoryService = ({ loaderData }: Route.ComponentProps) => {
  return (
    <>
      <RouteHeroSection
        title={loaderData.hero.title}
        description={loaderData.hero.description}
        image={loaderData.hero.image}
      />
      <RepairPriceSection
        onRequest={() => {
          console.log("Smartphone service");
        }}
        categoryId="smartphones"
      />
      <DeviceIssuesSection />
      <WhenRepairNeededSection
        imageSrc={imageExample}
        imageAlt="Мастер ремонтирует смартфон в сервисном центре"
        sections={[
          {
            title: "Когда смартфону нужен ремонт",
            text: "Трещины на экране, быстрый разряд или нестабильная зарядка — повод проверить устройство. У одинаковых симптомов могут быть разные причины, поэтому начинаем с диагностики.",
          },
          {
            title: "От чего зависит стоимость",
            text: "Стоимость зависит от модели смартфона, неисправности и необходимых деталей. Объём работ и окончательную цену согласуем до начала ремонта.",
          },
        ]}
      />
      <RepairProcessSection />
      <FaqSection
        title="Вопросы о ремонте смартфонов"
        imageSrc={imageExample}
        imageAlt="Мастер заменяет экран смартфона"
        items={[
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
        ]}
      />
      <UsefulToKnowSection
        title="Полезно знать"
        allArticlesHref="/blog"
        articles={[
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
        ]}
      />
      <RepairHelpSection
        imageSrc={imageExample}
        imageAlt="Смартфоны для ремонта"
        title="Не знаете, что сломалось?"
        description="Опишите проблему — поможем разобраться."
      />
      <RepairPreFooter />
    </>
  );
};

export default DeviceCategoryService;
