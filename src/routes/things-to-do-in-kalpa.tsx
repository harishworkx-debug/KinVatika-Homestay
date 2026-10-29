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
        content:
          "A practical guide to the best experiences around Kalpa, including viewpoints, temples and village walks.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/things-to-do-in-kalpa" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/things-to-do-in-kalpa" }],
  }),
  component: ThingsToDoInKalpa,
});

const activities = [
  {
    title: "1. Watch the Kinnaur Kailash Alpenglow Sunrise",
    meta: "1.5 km from KinVatika · 5 min drive / 20 min walk · Best at 6:00 AM",
    description:
      "Stand on the Kalpa ridge or the KinVatika rooftop terrace as the 6,050m sacred monolith catches the first ray of dawn sunlight. The peak changes from steel-blue to fiery crimson-gold within minutes. Free entry.",
  },
  {
    title: "2. Explore Ancient Narayan Nagini Wooden Temple",
    meta: "2 km from KinVatika · 7 min drive · Kalpa Village centre",
    description:
      "A masterpiece of traditional Himachali Kath-Kuni wood and stone architecture with intricately carved dragon motifs and pagoda-style multi-tiered roofs. Please dress respectfully and remove footwear before entering the temple compound.",
  },
  {
    title: "3. Drive the Thrilling Cliff Road to Suicide Point & Roghi Village",
    meta: "7 km from KinVatika · 20 min drive towards Roghi",
    description:
      "A dramatic road literally carved into perpendicular granite cliffs dropping hundreds of metres into the Sutlej river gorge. Continue 1 km further to explore tranquil Roghi village with its historic slate houses and apple orchards. Exercise cautious, slow driving.",
  },
  {
    title: "4. Visit the 1,000-Year-Old Hu-Bu-Lan-Kar Buddhist Gompa",
    meta: "2 km from KinVatika · Located near Kalpa village",
    description:
      "Founded around 950–1055 AD by the great translator Lotsawa Rinchen Zangpo, this peaceful Buddhist monastery showcases ancient murals, brass prayer wheels, and red-robed lamas chanting amidst mountain silence.",
  },
  {
    title: "5. Walk Through Village Shudharang Apple Orchards",
    meta: "Right outside KinVatika Homestay · Gentle village walk",
    description:
      "Stroll along stone terrace walls between apple trees laden with blossoms (in April–May) or crimson Royal Delicious apples (in August–October). Meet local Kinnauri fruit growers and experience authentic village serenity.",
  },
  {
    title: "6. Evening Bonfire & Himalayan Stargazing",
    meta: "On-site at KinVatika Homestay · Post-dinner activity",
    description:
      "With high altitude (2,900m) and clean alpine air free of city light pollution, the night sky over Kalpa reveals thousands of stars and the Milky Way arching directly over the snow peaks. Warm up around an evening bonfire arranged by the hosts.",
  },
];

function ThingsToDoInKalpa() {
  return (
    <>
      <PageHero
        image={kinnaurKailash}
        alt="Kinnaur Kailash view in Kalpa during sunrise"
        eyebrow="Local Sightseeing Guide"
        title="Best Things to Do in Kalpa, Kinnaur"
        subtitle="Unmissable viewpoints, ancient wooden temples, cliff roads, and village walks — complete with verified travel times and local tips."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">Unforgettable Experiences in Kalpa</h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
            Unlike commercial hill stations crowded with malls, Kalpa’s charm lies in its stillness,
            dramatic mountain relief, and ancient tribal heritage. Here is our curated guide of the
            top activities with real, verified travel times from KinVatika Homestay in Village
            Shudharang.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {activities.map((act, index) => (
            <Reveal key={act.title} delay={index * 0.05}>
              <article className="rounded-3xl border border-border/80 bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <h3 className="text-2xl text-forest">{act.title}</h3>
                <p className="mt-2 text-xs font-semibold tracking-wider text-gold uppercase">
                  {act.meta}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {act.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* 2-Day Suggested Itinerary */}
        <Reveal delay={0.15} className="mt-16 rounded-3xl bg-secondary/60 p-8 shadow-soft sm:p-10">
          <h3 className="text-2xl font-bold text-forest sm:text-3xl">
            Suggested 2-Day Kalpa Itinerary
          </h3>
          <div className="mt-6 space-y-6 text-sm leading-relaxed text-charcoal/85">
            <div className="border-l-2 border-pine pl-4">
              <strong className="block text-base text-forest">
                Day 1: Arrival, Acclimatization & Sunset
              </strong>
              <p className="mt-1 text-muted-foreground">
                Arrive via Reckong Peo and check in at KinVatika Homestay in Shudharang. Spend the
                afternoon relaxing to adjust to the 2,900m elevation. Enjoy an evening stroll
                through the surrounding apple orchards, watch the peaks turn pink at sunset, and
                savour homemade Himachali Siddu for dinner.
              </p>
            </div>
            <div className="border-l-2 border-pine pl-4">
              <strong className="block text-base text-forest">
                Day 2: Kailash Sunrise, Temples & Suicide Point
              </strong>
              <p className="mt-1 text-muted-foreground">
                Wake at 6:00 AM for the Kinnaur Kailash sunrise. After a hearty breakfast, drive 7
                minutes to Kalpa village to explore Narayan Nagini Temple and Hu-Bu-Lan-Kar Gompa.
                After lunch, take the dramatic 20-minute cliff drive to Suicide Point and Roghi
                village. Return for an evening bonfire under the stars.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Stay in Kalpa and explore it at your own pace"
        text="Book a room at KinVatika Homestay and let our family help you plan the best viewpoints and local visits."
        message="Hello KinVatika Homestay! I would like to plan a Kalpa trip and need help choosing a room."
      />
    </>
  );
}
