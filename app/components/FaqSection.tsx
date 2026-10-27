import { ChevronRight, Minus, Plus } from "lucide-react";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
  imageSrc: string;
  imageAlt: string;
  title?: string;
  id?: string;
};

export default function FaqSection({
  items,
  imageSrc,
  imageAlt,
  title = "Частые вопросы",
  id = "repair-faq",
}: FaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
        {/* Questions */}
        <div className="min-w-0">
          <h2
            id={`${id}-title`}
            className="mb-5 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
          >
            {title}
          </h2>

          <div className="space-y-2">
            {items.map(({ id: itemId, question, answer }, index) => (
              <details
                key={itemId}
                open={index === 0}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors open:border-blue-100 open:bg-blue-50"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3 rounded-xl px-4 py-3.5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 [&::-webkit-details-marker]:hidden">
                  <ChevronRight
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-90 group-open:text-blue-500"
                  />

                  <span className="flex-1 text-sm font-semibold leading-relaxed text-slate-900 group-open:text-blue-500">
                    {question}
                  </span>

                  <Plus
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 group-open:hidden"
                  />

                  <Minus
                    aria-hidden="true"
                    className="mt-0.5 hidden h-4 w-4 shrink-0 text-blue-500 group-open:block"
                  />
                </summary>

                <div className="pb-4 pl-11 pr-4">
                  <p className="whitespace-pre-line text-sm leading-relaxed text-slate-600">
                    {answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Dynamic image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-blue-50 lg:aspect-auto lg:min-h-[320px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
