import { useEffect, useId, useState } from "react";
import type { LucideIcon } from "lucide-react";

export type RepairDetailItem = {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type RepairDetailsSectionProps = {
  id?: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  items: RepairDetailItem[];
  highlights?: RepairDetailItem[];
};

export default function RepairDetailsSection({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  items,
  highlights = [],
}: RepairDetailsSectionProps) {
  const headingId = useId();
  const [isMounted, setMountedState] = useState(false);
  useEffect(() => {
    setMountedState(true);
  }, []);

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-8">
        <header className="min-w-0 lg:col-start-2 lg:row-start-1">
          <h2
            id={headingId}
            className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
          >
            {title}
          </h2>

          {description && (
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600 sm:text-base">
              {description}
            </p>
          )}
        </header>

        {/* Image */}
        <div
          className="
            relative aspect-[4/3] overflow-hidden
            rounded-2xl bg-slate-100
            lg:col-start-1 lg:row-start-1 lg:row-span-2
            lg:aspect-auto lg:min-h-80
          "
        >
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>

        {/* Content */}
        <div className="min-w-0 lg:col-start-2 lg:row-start-2">
          <div className="space-y-3">
            {items.map(({ id: itemId, title, description, icon: Icon }) => (
              <article
                key={itemId}
                className="
                    flex items-start gap-3
                    rounded-2xl bg-blue-50/60 p-4
                    sm:gap-4 sm:p-5
                  "
              >
                {Icon && isMounted && (
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-100/60 text-blue-500 sm:size-12">
                    <Icon
                      aria-hidden="true"
                      className="size-6"
                      strokeWidth={1.8}
                    />
                  </span>
                )}

                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-snug text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-slate-600">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Optional information blocks */}
          {highlights.length > 0 && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {highlights.map(
                ({ id: itemId, title, description, icon: Icon }) => (
                  <article key={itemId} className="flex items-start gap-3">
                    {Icon && isMounted && (
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 size-6 shrink-0 text-blue-500"
                        strokeWidth={1.8}
                      />
                    )}

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold leading-snug text-slate-950">
                        {title}
                      </h3>

                      <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-slate-600">
                        {description}
                      </p>
                    </div>
                  </article>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
