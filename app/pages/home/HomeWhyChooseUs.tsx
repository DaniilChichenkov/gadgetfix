import React from "react";

import {
  Settings,
  User,
  ShieldCheck,
  FileText,
  Search,
  UserCheck,
} from "lucide-react";

import whyChooseUsImage from "~/src/whyChooseUs.png";

const whyChooseUsConfig = [
  {
    icon: <Settings size={35} />,
    title: "Проверенные компоненты",
    desc: "Используем качественные и совместимые запчасти.",
  },
  {
    icon: <User size={35} />,
    title: "Опытные мастера",
    desc: "Аккуратный и профессиональный ремонт.",
  },
  {
    icon: <ShieldCheck size={35} />,
    title: "Гарантия на работу",
    desc: "Уверены в качестве наших услуг.",
  },
  {
    icon: <FileText size={35} />,
    title: "Цена до начала ремонта",
    desc: "Согласовываем стоимость до старта работ.",
  },
  {
    icon: <Search size={35} />,
    title: "Диагностика устройства",
    desc: "Выявляем причину неисправности перед ремонтом.",
  },
  {
    icon: <UserCheck size={35} />,
    title: "Индивидуальный подход",
    desc: "Подбираем оптимальное решение для каждого клиента.",
  },
];
const HomeWhyChooseUs = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-blue-50 rounded-3xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-start md:items-center lg:items-start md:gap-8">
          <div>
            <div className="max-w-prose md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl text-center md:text-left">
                Точность в работе. <br />
                Прозрачность в деталях.
              </h2>

              <img
                src={whyChooseUsImage}
                alt="Why choose us image"
                className="rounded-3xl w-full mt-5"
              />
              <img
                src={whyChooseUsImage}
                alt="Why choose us image"
                className="rounded-3xl w-full mt-5 hidden md:block xl:hidden"
              />
              <div className="xl:grid w-full grid-cols-2 hidden gap-4">
                <img
                  src={whyChooseUsImage}
                  alt="Why choose us image"
                  className="rounded-3xl w-full mt-5 hidden md:block"
                />
                <img
                  src={whyChooseUsImage}
                  alt="Why choose us image"
                  className="rounded-3xl w-full mt-5 hidden md:block"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl text-center md:text-left invisible hidden lg:block">
              Точность в работе. <br />
              Прозрачность в деталях.
            </h2>
            <div className="grid grid-cols-1 gap-4 justify-between mt-0 lg:mt-5">
              {whyChooseUsConfig.map((item) => (
                <div
                  key={`who-choose-us-${item.title}`}
                  className="rounded-3xl bg-base-100 px-4 py-6 border border-base-300 flex items-center gap-4"
                >
                  <div className="inline-flex rounded-lg text-blue-500 shrink-0">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-pretty text-gray-700">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-blue-50 rounded-3xl">
//     <div className="mx-auto text-center">
//       <h2 className="text-2xl/tight font-bold sm:text-3xl max-w-lg mx-auto">
//         Точность в работе. Прозрачность в деталях
//       </h2>

//       {/* Image */}
//       <img
//         src={whyChooseUsImage}
//         className="rounded-3xl mt-5 w-[1160px] mx-auto"
//         alt=""
//       />
//     </div>

//     <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//       {whyChooseUsConfig.map((item) => (
//         <div
//           key={`who-choose-us-${item.title}`}
//           className="rounded-3xl bg-base-100 p-6 border border-base-300"
//         >
//           <div className="inline-flex rounded-lg text-blue-500">
//             {item.icon}
//           </div>

//           <h3 className="mt-4 text-lg font-semibold text-gray-900">
//             {item.title}
//           </h3>

//           <p className="mt-2 text-pretty text-gray-700">{item.desc}</p>
//         </div>
//       ))}
//     </div>
//   </div>

export default HomeWhyChooseUs;
