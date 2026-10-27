import type { Route } from "./+types/services";

import { RepairProcessSection, RouteHeroSection } from "~/components";

import imageExample from "~/src/smarthponeServices.png";

import {
  DeviceCategoriesSection,
  RepairFinderSection,
  RepairServicesSection,
  RepairInformationSection,
  RepairFaqAndGuidesSection,
  RepairPreFooter,
} from "~/pages/services";

export async function loader({ params }: Route.LoaderArgs) {
  // Return dummy data for now
  return {
    hero: {
      title: "Все услуги по ремонту электроники",
      description:
        "Смартфоны, ноутбуки, планшеты, консоли и умные часы. Ремонт в Таллине и через почтомат по Эстонии.",
      image: imageExample,
    },
  };
}

export default function ServicesRoute({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <RouteHeroSection
        title={loaderData.hero.title}
        description={loaderData.hero.description}
        image={loaderData.hero.image}
      />
      {/* Select device category */}
      <DeviceCategoriesSection />
      <RepairFinderSection />
      <RepairServicesSection />
      <RepairInformationSection />
      <RepairProcessSection />
      <RepairFaqAndGuidesSection />
      <RepairPreFooter />
    </>
  );
}
