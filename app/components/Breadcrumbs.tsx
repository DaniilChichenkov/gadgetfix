import React from "react";
import { ChevronRight } from "lucide-react";
import { useLocation, useParams } from "react-router";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const { lang } = useParams();
  const pathArr = pathname.split("/");
  const actualPath = pathArr.splice(2, pathArr.length);

  return (
    <nav
      aria-label="Хлебные крошки"
      className="mb-6 flex items-center flex-wrap gap-2 text-xs text-slate-500 sm:text-sm"
    >
      <span>Главная</span>
      {actualPath.map((item, i) => (
        <div
          className="flex justify-start items-center gap-2"
          key={`breadcrumbs-path-segment-${item}-${i}`}
        >
          <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
          <span aria-current="page" className="text-slate-700">
            {item}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
