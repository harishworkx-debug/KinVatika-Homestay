import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { ArrowRight } from "lucide-react";
import heroTerrace from "../assets/kinvatika-views14.png";

export const Route = createFileRoute("/kalpa-travel-guide")({
  head: () => ({
    meta: [
      { title: "Kalpa Travel Guide | KinVatika Homestay" },
      {
        name: "description",
        content:
          "Read our Kalpa travel guide for mountain views, villages, temple visits, local food and practical tips for staying near Kinnaur Kailash.",
      },
      { property: "og:title", content: "Kalpa Travel Guide | KinVatika Homestay" },
      {
        property: "og:description",
        content: "A practical Kalpa travel guide with local tips, best viewpoints and a stay recommendation in Kinnaur.",
      },
      { property: "og:url", content: "https://kinvatika.com/kalpa-travel-guide" },
    ],
    links: [{ rel: "canonical", href: "https://kinvatika.com/kalpa-travel-guide" }],
  }),
  component: KalpaTravelGuide,
});

const tips = [
  "Plan your stay around sunrise and sunset, when the Kinnaur Kailash range looks its most dramatic.",
  "Keep a little flexibility for road travel; weather can shift quickly in Kinnaur and mountain roads can be slow.",
  "Take time to explore the village lanes, orchard roads and local food spots rather than rushing between viewpoints.",
  "A family homestay is often the most comfortable choice for a slow Kinnaur trip, especially in colder months.",
];

function KalpaTravelGuide() {
  return (
    <>
      <PageHero
        image={heroTerrace}
        alt="View over Kalpa and the Kinnaur valley"
        eyebrow="Travel guide"
        title="Kalpa Travel Guide"
        subtitle="Everything you need to know before visiting Kalpa, from local routes to mountain views and family stays."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">Why Kalpa is worth the journey</h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/80">
            Kalpa is one of the most beautiful villages in Kinnaur, known for its mountain scenery, orchard surroundings and clear views of the sacred Kinnaur Kailash peak. It is a place where travellers can slow down, photograph the valley and enjoy the simple pleasures of a Himalayan village.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {tips.map((tip, index) => (
            <Reveal key={tip} delay={index * 0.05}>
              <div className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
                <ArrowRight className="mt-1 shrink-0 text-pine" size={18} />
                <p className="text-base leading-relaxed text-charcoal/80">{tip}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 rounded-3xl bg-secondary/60 p-8 shadow-soft">
          <h2 className="text-3xl">Best way to experience Kalpa</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            For many travellers, the best experience comes from staying in a family-run property near the valley rather than pushing through the day in a rush. A slow stay allows you to enjoy local food, mountain light and the quiet rhythm of the village without effort.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Plan your next Kalpa getaway"
        text="Stay close to the mountains and let us help you choose the right room and travel plan."
        message="Hello KinVatika Homestay! I am planning a Kalpa trip and would like to check the best room options."
      />
    </>
  );
}
