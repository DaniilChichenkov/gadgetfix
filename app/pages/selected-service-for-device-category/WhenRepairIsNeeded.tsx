import { useId } from "react";
import { Info } from "lucide-react";

export type RepairSign = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

export type RepairSignsSectionProps = {
  id?: string;
  title: string;
  description?: string;
  items: RepairSign[];
  note?: string;
};

export default function RepairSignsSection({
  id,
  title,
  description,
  items,
  note,
}: RepairSignsSectionProps) {
  const headingId = useId();

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mb-6">
        <h2
          id={headingId}
          className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
        >
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-slate-600 sm:text-base">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="
              min-w-0 overflow-hidden rounded-2xl
              border border-slate-100 bg-blue-50/40
            "
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              {item.imageSrc && (
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <div className="p-3 sm:p-4">
              <h3 className="text-sm font-semibold leading-snug text-slate-950 sm:text-base">
                {item.title}
              </h3>

              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {note && (
        <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-slate-500">
          <Info
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-blue-500"
          />

          <span>{note}</span>
        </p>
      )}
    </section>
  );
}
