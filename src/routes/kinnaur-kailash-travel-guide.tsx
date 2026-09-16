import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { ArrowRight } from "lucide-react";
import kinnaurKailash from "../assets/Kinnaur Kailash Viewpoint.png";

export const Route = createFileRoute("/kinnaur-kailash-travel-guide")({
  head: () => ({
    meta: [
      { title: "Kinnaur Kailash Travel Guide | KinVatika Homestay" },
      {
        name: "description",
        content:
          "Learn about Kinnaur Kailash, nearby viewpoints and the best ways to experience the sacred mountain range during a stay in Kalpa, Kinnaur.",
      },
      { property: "og:title", content: "Kinnaur Kailash Travel Guide" },
      {
        property: "og:description",
        content: "A useful travel guide for Kinnaur Kailash, Kalpa and mountain sightseeing in the region.",
      },
      { property: "og:url", content: "/kinnaur-kailash-travel-guide" },
    ],
    links: [{ rel: "canonical", href: "/kinnaur-kailash-travel-guide" }],
  }),
  component: KinnaurKailashTravelGuide,
});

const points = [
  "The Kinnaur Kailash range is one of the region’s most revered mountain sights and is visible from several points around Kalpa.",
  "Early morning light gives the mountain a dramatic golden tone, making sunrise the best time for photographs and quiet views.",
  "The area around Kalpa is ideal for slow travel, with village walks, viewpoint stops and relaxed evenings at a mountain homestay.",
  "A local stay helps you understand the region better, especially when weather changes and movements between viewpoints become slower.",
];

function KinnaurKailashTravelGuide() {
  return (
    <>
      <PageHero
        image={kinnaurKailash}
        alt="Kinnaur Kailash mountain range seen from Kalpa"
        eyebrow="Kinnaur travel guide"
        title="Kinnaur Kailash Travel Guide"
        subtitle="A practical guide to the sacred mountains, nearby viewpoints and the best way to explore the valley from Kalpa."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="text-lg leading-relaxed text-charcoal/80">
            The Kinnaur Kailash range gives the whole valley a spiritual and visual presence. For visitors to Kalpa and Kinnaur, it is often the defining image of the trip — a mountain that appears different in every light, from sunrise to evening cloud.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {points.map((point, index) => (
            <Reveal key={point} delay={index * 0.05}>
              <div className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
                <ArrowRight className="mt-1 shrink-0 text-pine" size={18} />
                <p className="text-base leading-relaxed text-charcoal/80">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 rounded-3xl bg-secondary/60 p-8 shadow-soft">
          <h2 className="text-3xl">Stay close to the mountains</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            A homestay in Kalpa is often the most rewarding way to experience Kinnaur Kailash — it gives you the contrast of beautiful mornings, quiet evenings and the comfort of a warm room after daytime travel.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Stay close to Kinnaur Kailash"
        text="Book a room at KinVatika Homestay and enjoy a calm, scenic base for your Kinnaur trip."
        message="Hello KinVatika Homestay! I would like to stay near Kinnaur Kailash and need more information."
      />
    </>
  );
}
