import { House, LayoutGrid, MapPin, PencilLine } from "lucide-react";

const dockItems = [
  { id: "home", label: "Главная", icon: House },
  { id: "services", label: "Услуги", icon: LayoutGrid },
  { id: "request", label: "Заявка", icon: PencilLine },
  { id: "contacts", label: "Контакты", icon: MapPin },
];

export default function MobileDock() {
  return (
    <>
      {/* Render after the footer to reserve space for the fixed dock. */}
      <div
        aria-hidden="true"
        className="h-[calc(4rem+env(safe-area-inset-bottom))] md:hidden"
      />

      <nav
        aria-label="Мобильная навигация"
        className="
          dock dock-md z-50
          border-t border-slate-200/80
          bg-white/95 text-slate-500
          shadow-[0_-8px_30px_rgba(15,23,42,0.05)]
          backdrop-blur-xl md:hidden
        "
      >
        {dockItems.map(({ id, label, icon: Icon }) => {
          const isActive = id === "home";

          return (
            <button
              key={id}
              type="button"
              aria-current={isActive ? "page" : undefined}
              className={`
                transition-colors
                focus-visible:outline-2
                focus-visible:outline-offset-[-2px]
                focus-visible:outline-blue-500
                ${
                  isActive ? "dock-active text-blue-500" : "hover:text-blue-500"
                }
              `}
            >
              <Icon
                aria-hidden="true"
                className="size-5"
                strokeWidth={isActive ? 2.2 : 1.8}
              />

              <span className="dock-label font-medium">{label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
