import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import heroTerrace from "../assets/kinvatika-views14.png";
import gardenValley from "../assets/kinvatika-gardan.png";
import interiorLobby from "../assets/kinvatika-views2.png";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining | Homemade Himachali Food at KinVatika Homestay, Kalpa" },
      {
        name: "description",
        content:
          "Traditional Himachali thalis, fresh Indian and continental breakfast, vegetarian options and open terrace dining at KinVatika Homestay in Kalpa, Kinnaur.",
      },
      { property: "og:title", content: "Dining at KinVatika Homestay, Kalpa" },
      {
        property: "og:description",
        content: "Homemade mountain meals served with a Kinnaur Kailash view.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/dining" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/dining" }],
  }),
  component: Dining,
});

function Dining() {
  return (
    <>
      <PageHero
        image={heroTerrace}
        alt="Open terrace dining with panoramic Himalayan views at KinVatika Homestay"
        eyebrow="Dining Experience"
        title="Food from our kitchen, served where the view is best."
        subtitle="No menus printed months ago. We cook what the valley gives us that week, and we cook it fresh."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-pine">Mountain Table</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Traditional Himachali, cooked at home</h2>
            <p className="mt-6 text-[0.95rem] leading-loose text-muted-foreground">
              Siddu steamed and served with ghee, rajma from the valley farms, chana madra on
              festive days, fresh rotis, seasonal saag and local apples straight from the orchard.
              Breakfast can be a hot Indian spread or a simple continental plate before an early
              trek.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-charcoal/80">
              <li>· Traditional Himachali dishes</li>
              <li>· Homemade daily meals</li>
              <li>· Fresh Indian breakfast</li>
              <li>· Continental breakfast</li>
              <li>· Pure vegetarian options</li>
              <li>· Local organic ingredients</li>
              <li>· Open terrace dining</li>
              <li>· Evening tea &amp; bonfire snacks</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-4">
            <img
              src={gardenValley}
              alt="Flowering terrace garden overlooking the Kinnaur valley"
              loading="lazy"
              className="h-72 w-full rounded-3xl object-cover shadow-soft"
            />
            <img
              src={interiorLobby}
              alt="Warm wooden dining hall at KinVatika Homestay"
              loading="lazy"
              className="h-72 w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ask about meal plans"
        text="Tell us your dates and preferences — vegetarian, Jain, light meals for children — and we'll arrange it."
        message="Hello KinVatika Homestay! I'd like to know about meal plans and breakfast options."
      />
    </>
  );
}
