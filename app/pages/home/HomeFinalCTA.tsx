import React from "react";

import telegramLogo from "~/src/telegramTransparentLogo.png";
import whatsAppLogo from "~/src/whatsAppTransparentLogo.png";

const HomeFinalCTA = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-blue-500 rounded-3xl">
        <div className="flex flex-col items-center gap-4 md:gap-8">
          <div>
            <div className="max-w-prose md:max-w-none">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl text-center">
                Вернем устройство в привычный ритм.
              </h2>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:items-center gap-4">
            <button className="btn btn-lg rounded-lg shadow-none">
              Оставить заявку
            </button>

            <div className="w-full grid grid-cols-2 items-center gap-4">
              <button className="btn text-white font-normal bg-transparent shadow-none rounded-lg flex justify-around items-center py-6">
                <img
                  className="object-contain size-10"
                  src={telegramLogo}
                  alt="Telegram logo"
                />
                Telegram
              </button>
              <button className="btn text-white font-normal bg-transparent shadow-none rounded-lg flex justify-around items-center py-6">
                <img
                  className="object-contain size-10"
                  src={whatsAppLogo}
                  alt="Telegram logo"
                />
                WhatsApp
              </button>
            </div>

            <p className="text-2xl font-normal text-center text-white md:col-span-2 lg:col-start-3 lg:col-span-1">
              +372 555555555
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFinalCTA;
