import { ArrowRight } from "lucide-react";

export type BlogArticle = {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt?: string;
  href: string;
};

type UsefulToKnowSectionProps = {
  articles: BlogArticle[];
  title?: string;
  allArticlesHref?: string;
  allArticlesLabel?: string;
  readMoreLabel?: string;
  id?: string;
};

export default function UsefulToKnowSection({
  articles,
  title = "Полезно знать",
  allArticlesHref,
  allArticlesLabel = "Все статьи",
  readMoreLabel = "Читать статью",
  id = "useful-to-know",
}: UsefulToKnowSectionProps) {
  if (articles.length === 0) return null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8"
    >
      {/* Section header */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2
          id={`${id}-title`}
          className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
        >
          {title}
        </h2>

        {allArticlesHref && (
          <a
            href={allArticlesHref}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-sm text-xs font-medium text-blue-500 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:text-sm"
          >
            {allArticlesLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        )}
      </div>

      {/* Mobile scroll / desktop grid */}
      <ul className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 py-2 [scrollbar-width:none] lg:grid lg:snap-none lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
        {articles.map((article) => (
          <li
            key={article.id}
            className="w-[85%] max-w-sm shrink-0 snap-start lg:w-auto lg:max-w-none"
          >
            <article className="h-full">
              <a
                href={article.href}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 transition-colors hover:border-blue-200 hover:bg-blue-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:flex-row"
              >
                {/* Article thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-blue-50 lg:aspect-auto lg:w-28 lg:shrink-0">
                  <img
                    src={article.imageSrc || undefined}
                    alt={article.imageAlt ?? ""}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Article content */}
                <div className="flex min-w-0 flex-1 flex-col py-1">
                  <h3 className="text-base font-bold leading-snug text-slate-950 transition-colors group-hover:text-blue-500 lg:text-sm">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500 lg:text-xs">
                    {article.excerpt}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 self-start pt-4 text-xs font-semibold text-blue-500">
                    {readMoreLabel}
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
