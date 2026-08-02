import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import kinnaurKailash from "../assets/kinnaur-kailash-snow.png";
import homestayExterior from "../assets/homestay-exterior.png";
import gardenValley from "../assets/garden-valley-view.webp";
import homestaySummer from "../assets/homestay-summer.png";
import homestaySnow from "../assets/homestay-snow.png";
import heroTerrace from "../assets/hero-terrace-view.png";

export const Route = createFileRoute("/attractions")({
  head: () => ({
    meta: [
      { title: "Nearby Attractions in Kalpa & Kinnaur | KinVatika Homestay" },
      {
        name: "description",
        content:
          "Kinnaur Kailash viewpoint, Kalpa village, Suicide Point, Roghi, Reckong Peo and Narayan Nagini Temple — distances and travel times from KinVatika Homestay.",
      },
      { property: "og:title", content: "Nearby Attractions — Kalpa & Kinnaur" },
      {
        property: "og:description",
        content: "The best places around Kalpa, minutes from KinVatika Homestay.",
      },
      { property: "og:url", content: "/attractions" },
    ],
    links: [{ rel: "canonical", href: "/attractions" }],
  }),
  component: Attractions,
});

function Card({
  image,
  alt,
  name,
  meta,
  desc,
  delay = 0,
}: {
  image: string;
  alt: string;
  name: string;
  meta: string;
  desc: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-64 w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
          />
        </div>
        <div className="p-7">
          <h2 className="text-2xl">{name}</h2>
          <p className="mt-2 text-xs tracking-widest text-gold uppercase">{meta}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        </div>
      </article>
    </Reveal>
  );
}

function Attractions() {
  return (
    <>
      <PageHero
        image={homestayExterior}
        alt="Kalpa village and the Kinnaur Kailash range"
        eyebrow="Nearby Attractions"
        title="The best of Kinnaur, within half an hour."
        subtitle="Viewpoints, old wooden temples and orchard villages — all reachable on a short drive or an easy walk from the homestay."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2 lg:grid-cols-3 lg:px-10 lg:py-32">
        <Card
          image={kinnaurKailash}
          alt="Kinnaur Kailash viewpoint in winter"
          name="Kinnaur Kailash View Point"
          meta="1.5 km · 5 min drive"
          desc="The classic vantage for the sacred 79-foot rock formation. Best at sunrise, when the range turns gold before the valley wakes."
        />
        <Card
          delay={0.06}
          image={homestaySummer}
          alt="Traditional homes of Kalpa village"
          name="Kalpa Village"
          meta="2 km · 7 min drive"
          desc="Slate roofs, wooden balconies, the Narayan Nagini temple complex and orchard lanes that smell of apple in autumn."
        />
        <Card
          delay={0.12}
          image={gardenValley}
          alt="Cliff road towards Suicide Point near Roghi"
          name="Suicide Point"
          meta="7 km · 20 min drive"
          desc="A sheer cliff edge above the Sutlej gorge with one of the most dramatic drops in Kinnaur. Go in clear weather."
        />
        <Card
          delay={0.18}
          image={homestaySnow}
          alt="Roghi village houses in snow"
          name="Roghi Village"
          meta="6 km · 18 min drive"
          desc="A tiny orchard village on the way to Suicide Point, with old Kinnauri architecture and near-total quiet."
        />
        <Card
          delay={0.24}
          image={heroTerrace}
          alt="Reckong Peo town below Kalpa"
          name="Reckong Peo"
          meta="9 km · 25 min drive"
          desc="The district headquarters — market, ATMs, bus stand and permits for onward travel to Spiti or Nako."
        />
        <Card
          delay={0.3}
          image={homestayExterior}
          alt="Traditional wooden temple architecture in Kalpa"
          name="Narayan Nagini Temple"
          meta="2 km · 7 min drive"
          desc="Beautifully carved wood-and-stone temple in the heart of Kalpa, and the centre of local festivals through the year."
        />
      </section>

      <CtaBand
        title="Let us plan your days"
        text="Tell us how long you're staying and we'll suggest an itinerary, arrange a taxi and book your room."
        message="Hello KinVatika Homestay! Please help me plan sightseeing around Kalpa and book a room."
      />
    </>
  );
}
