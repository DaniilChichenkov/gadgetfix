import React from "react";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";

const DeviceCategoryCard = ({
  id,
  title,
  img,
}: {
  title: string;
  img: string;
  id: string;
}) => {
  return (
    <li key={id} className="min-w-0 last:col-span-2 lg:last:col-span-1">
      <button
        type="button"
        className="group flex h-full w-full flex-col rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 text-left transition-colors hover:border-blue-500/30 hover:bg-blue-500/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 sm:p-5"
      >
        <div className="mb-5 flex h-28 w-full items-center justify-center overflow-hidden sm:h-36 lg:h-40">
          <img
            src={img}
            alt=""
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="mt-auto w-full flex items-center justify-between">
          <h3 className="text-sm leading-snug font-bold text-slate-900 transition-colors group-hover:text-blue-500 sm:text-base">
            {title}
          </h3>
          <ChevronRight
            aria-hidden="true"
            className="size-4 shrink-0 text-blue-500"
          />
        </div>
      </button>
    </li>
  );
};

export default DeviceCategoryCard;
