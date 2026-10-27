export type RepairContentBlock = {
  title: string;
  text: string;
};

type WhenRepairNeededSectionProps = {
  imageSrc: string;
  imageAlt: string;
  sections: RepairContentBlock[];
  id?: string;
};

export default function WhenRepairNeededSection({
  imageSrc,
  imageAlt,
  sections,
  id = "when-repair-needed",
}: WhenRepairNeededSectionProps) {
  if (sections.length === 0) return null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
        {/* Repair image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-blue-50 md:aspect-auto md:min-h-[320px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Dynamic content */}
        <div className="flex flex-col justify-center divide-y divide-slate-200">
          {sections.map(({ title, text }, index) => {
            const Heading = index === 0 ? "h2" : "h3";

            return (
              <div
                key={`${id}-${index}`}
                className="py-5 first:pt-0 last:pb-0 sm:py-6"
              >
                <Heading
                  id={index === 0 ? `${id}-title` : undefined}
                  className={`font-extrabold leading-tight tracking-tight text-slate-950 ${
                    index === 0 ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                  }`}
                >
                  {title}
                </Heading>

                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600 sm:text-base">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
