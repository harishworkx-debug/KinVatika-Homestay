import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { ArrowRight } from "lucide-react";
import kinnaurKailash from "../assets/Kinnaur-Kailash Viewpoint.png";

export const Route = createFileRoute("/things-to-do-in-kalpa")({
  head: () => ({
    meta: [
      { title: "Things to Do in Kalpa, Kinnaur | KinVatika Homestay" },
      {
        name: "description",
        content:
          "Explore the best things to do in Kalpa, Kinnaur — from Kinnaur Kailash viewpoints and village walks to apple orchards, temples and Himalayan sunsets.",
      },
      { property: "og:title", content: "Things to Do in Kalpa, Kinnaur" },
      {
        property: "og:description",
        content: "A practical guide to the best experiences around Kalpa, including viewpoints, temples and village walks.",
      },
      { property: "og:url", content: "https://kinvatika.com/things-to-do-in-kalpa" },
    ],
    links: [{ rel: "canonical", href: "https://kinvatika.com/things-to-do-in-kalpa" }],
  }),
  component: ThingsToDoInKalpa,
});

const items = [
  "Watch the sunrise over Kinnaur Kailash from the ridge or terrace in the Kalpa valley.",
  "Walk through Kalpa village and look at local homes, wooden balconies and Himalayan architecture.",
  "Explore the Narayan Nagini temple area and learn more about Kinnauri culture in the region.",
  "Spend time in apple orchards and enjoy the valley atmosphere during the harvest season.",
  "Drive to nearby viewpoints and valley roads for panoramic Himalayan scenery and photography.",
  "Enjoy a slow evening with homemade food, tea and a mountain sunset at your homestay.",
];

function ThingsToDoInKalpa() {
  return (
    <>
      <PageHero
        image={kinnaurKailash}
        alt="Kinnaur Kailash view in Kalpa during sunrise"
        eyebrow="Travel guide"
        title="Things to Do in Kalpa, Kinnaur"
        subtitle="A slower, more beautiful way to experience the Kinnaur valley — with mountain views, village charm and peaceful local culture."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="text-lg leading-relaxed text-charcoal/80">
            Kalpa is one of the most rewarding places to stay in Kinnaur because it combines dramatic mountain views with a calmer village rhythm. The best days here are not packed with rush; they are built around viewpoints, local walks, temple visits and long afternoons with a cup of tea.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {items.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
                <ArrowRight className="mt-1 shrink-0 text-pine" size={18} />
                <p className="text-base leading-relaxed text-charcoal/80">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 rounded-3xl bg-secondary/60 p-8 shadow-soft">
          <h2 className="text-3xl">Why travellers stay longer in Kalpa</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            The valley’s value lies in its silence, mountain light and local culture. Many visitors come for a night and end up staying longer because the pace suits them perfectly. A family homestay like KinVatika adds warmth, comfort and home-cooked food to that slower rhythm.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Stay in Kalpa and explore it at your own pace"
        text="Book a room at KinVatika Homestay and let us help you plan the best view points and village visits."
        message="Hello KinVatika Homestay! I would like to plan a Kalpa trip and need help choosing a room."
      />
    </>
  );
}
