import React from "react";
import {
  Menu,
  Phone,
  ChevronDown,
  X,
  Blocks,
  Tag,
  Image,
  Info,
  FileText,
  MapPin,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link, NavLink } from "react-router";

const drawerMenuConfig = {
  langSelector: [
    { text: "EE", code: "et" },
    { text: "RU", code: "ru" },
    { text: "EN", code: "en" },
  ],
  navLinks: [
    {
      text: "Услуги",
      icon: <Blocks />,
      to: "/",
    },
    {
      text: "Цены",
      icon: <Tag />,
      to: "/",
    },
    {
      text: "Наши работы",
      icon: <Image />,
      to: "/",
    },
    {
      text: "О компании",
      icon: <Info />,
      to: "/",
    },
    {
      text: "Блог",
      icon: <FileText />,
      to: "/",
    },
    {
      text: "Контакты",
      icon: <MapPin />,
      to: "/",
    },
  ],
};
const DrawerMenu = () => {
  return (
    <ul className="menu bg-base-200 min-h-full w-11/12 md:w-6/12 p-4 rounded-bl-lg rounded-tl-lg [--menu-active-bg:transparent] [--menu-active-fg:inherit] overflow-y-scroll">
      <li>
        <div className="w-full flex justify-between items-center">
          <p className="font-bold text-xl">GadgetFix</p>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-square flex justify-center items-center rounded-lg bg-base-300"
          >
            <X />
          </label>
        </div>
        <div className="w-full h-px p-0 m-0 bg-gray-300 mt-3"></div>
      </li>

      {/* Language selector */}
      <li>
        <div className="w-full flex justify-between items-center mt-3">
          <p className="text-gray-600">Язык:</p>
          <div className="inline-flex">
            {drawerMenuConfig.langSelector.map((item) => (
              <NavLink
                key={item.code}
                to={`/${item.code}`}
                className={({ isActive }) =>
                  `${isActive ? "bg-blue-500 text-white" : "bg-gray-100 "} -ms-px rounded-e-sm border border-gray-200 px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 disabled:pointer-events-auto disabled:opacity-50`
                }
              >
                {item.text}
              </NavLink>
            ))}
          </div>
        </div>
      </li>

      {/* Links */}
      {drawerMenuConfig.navLinks.map((item, i, arr) => (
        <li
          key={item.text}
          className={`${i === 0 && "mt-3"} ${i < arr.length - 1 && "border-b"} py-2 border-gray-200`}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `w-full flex justify-start items-center gap-5 font-bold text-lg`
            }
          >
            {({ isActive }) => (
              <>
                {item.icon} {item.text}{" "}
                <span className="ml-auto">
                  {isActive ? <ArrowRight /> : <ChevronRight />}
                </span>
              </>
            )}
          </NavLink>
        </li>
      ))}

      {/* Footer */}
      <li className="mt-auto">
        <div className="w-full h-px p-0 m-0 bg-gray-300"></div>
        <p className="uppercase text-gray-600 mt-3">свяжитесь с нами</p>
        <p className="flex justify-start items-center gap-5 mt-3 text-xl">
          <span className="text-blue-500">
            <Phone />
          </span>{" "}
          +372 58059524
        </p>
        <div className="grid grid-cols-2 gap-x-5 mt-3">
          <button className="btn w-full flex justify-start items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1.25em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#26A5E4"
                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.5.5 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024q-.159.037-5.061 3.345q-.72.495-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789q.04-.324.893-.663q5.247-2.286 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635"
              ></path>
            </svg>
            <p>Telegram</p>
          </button>

          <button className="btn w-full flex justify-start items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1.25em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#25D366"
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"
              ></path>
            </svg>
            <p>WhatsApp</p>
          </button>
        </div>
        <button className="inline-flex mt-3 items-center justify-center rounded-lg border border-blue-500 bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:outline-none">
          Оставить заявку
        </button>
        <Link to={"/"} className="mx-auto mt-5">
          Политика конфиденциальности
        </Link>
      </li>
    </ul>
  );
};

const NavBar = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-gray-700 font-bold" href="#">
          <span className="sr-only">Home</span>
          GadgetFix
        </a>

        <div className="flex flex-1 items-center justify-end lg:justify-between">
          <nav aria-label="Global" className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Услуги{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Цены{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Наши работы{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  О компании{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Блог{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Контакты{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex justify-end items-center gap-2">
            {/* Make a request button */}
            <button className="cursor-pointer hidden lg:inline-flex items-center justify-center rounded-lg border border-blue-500 bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:outline-none">
              Оставить заявку
            </button>

            {/* Mobile language selector */}
            <details className="dropdown dropdown-center mr-1 lg:hidden">
              <summary className="btn btn-ghost active:bg-transparent hover:bg-transparent bg-transparent p-0 m-0 flex justify-center items-center">
                RU <ChevronDown />{" "}
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 p-2 shadow-sm w-40">
                <li>
                  <a className="w-full flex justify-between items-center">
                    Eesti <span>EE</span>
                  </a>
                </li>
                <li>
                  <a className="w-full flex justify-between items-center">
                    English <span>EN</span>
                  </a>
                </li>
                <li>
                  <a className="w-full flex justify-between items-center">
                    Русский <span>RU</span>
                  </a>
                </li>
              </ul>
            </details>

            {/* Tel to */}
            <button className="btn btn-square flex justify-center items-center text-blue-500 btn-ghost lg:hidden">
              <Phone />
            </button>

            {/* Open drawer */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost active:bg-transparent hover:bg-transparent bg-transparent btn-square flex justify-center items-center lg:hidden"
            >
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle lg:hidden"
              />
              <span className="sr-only">Toggle menu</span>
              <Menu strokeWidth={2.5} className="w-full" />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle lg:hidden"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <NavBar />
        {/* Page content here */}
        <main className="flex-1 shrink-0">{children}</main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <DrawerMenu />
      </div>
    </div>
  );
};

export default Navigation;
