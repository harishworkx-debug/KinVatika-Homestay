import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import kinnaurKailash from "../assets/Kinnaur Kailash Viewpoint.png";
import homestaySnow from "../assets/kinvatika-views12.png";
import gardenValley from "../assets/kinvatika-gardan.png";
import heroTerrace from "../assets/kinvatika-views14.png";
import homestayExterior from "../assets/kinvatika-views3.png";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Kinnaur Experience | Kailash Views, Orchards & Village Life" },
      {
        name: "description",
        content:
          "Kinnaur Kailash sunrises, apple orchard walks, village trails, bonfire evenings and star gazing — the Kinnaur experience from KinVatika Homestay in Kalpa.",
      },
      { property: "og:title", content: "The Kinnaur Experience — KinVatika Homestay" },
      {
        property: "og:description",
        content: "Sunrise on sacred peaks, orchards, festivals and quiet mountain life in Kalpa.",
      },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHero
        image={heroTerrace}
        alt="360° mountain view from KinVatika Homestay in Kalpa"
        eyebrow="360° Mountain View Experience"
        title="The peaks change colour six times before breakfast. You only have to look up."
        subtitle="Wake up to the wide Kinnaur skyline, warm wood interiors and a sunrise that keeps changing the whole valley."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={heroTerrace}
              alt="Guests watching sunrise over Kinnaur Kailash from the terrace"
              loading="lazy"
              className="h-[30rem] w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-pine">Sunrise Over Snow Peaks</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              The mountain wakes before you. Be there for it.
            </h2>
            <p className="mt-6 text-[0.95rem] leading-loose text-muted-foreground">
              At first light, the Kinnaur Kailash shivh-lingam rock catches a thin gold line that
              spreads until the whole range is burning. It lasts about eleven minutes. Guests set
              alarms for it, and nobody regrets it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-pine">Things to Live, Not Tick Off</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Ten slow Kinnauri days</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              { t: "Kinnaur Kailash Views", d: "Framed from your balcony, the terrace and the garden." },
              { t: "Apple Orchards", d: "Walk the terraces; in season, pick straight from the tree." },
              { t: "Himalayan Culture", d: "Wooden temples, Kinnauri caps, and slow village rhythm." },
              { t: "Village Walks", d: "Shudharang to Kalpa on quiet paths lined with deodar." },
              { t: "Local Festivals", d: "Drums, dance and the whole village out in traditional dress." },
              { t: "Nature Photography", d: "Golden hour twice a day, and clouds that behave like water." },
              { t: "Bonfire Evenings", d: "Arranged on request, with tea and stories from our family." },
              { t: "Star Gazing", d: "Almost no light pollution — bring a tripod or just look up." },
              { t: "Snowfall Season", d: "December to February turns the whole valley white." },
              { t: "Peaceful Mountain Life", d: "The real luxury here is how little there is to do." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.04}>
                <div className="h-full rounded-2xl bg-card p-6 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift">
                  <p className="font-display text-xl text-forest">{c.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-24 sm:grid-cols-3 lg:px-10">
        <Reveal className="overflow-hidden rounded-3xl">
          <img
            src={homestaySnow}
            alt="Kalpa under fresh snowfall around KinVatika Homestay"
            loading="lazy"
            className="h-80 w-full object-cover transition-transform duration-[1400ms] hover:scale-110"
          />
        </Reveal>
        <Reveal delay={0.07} className="overflow-hidden rounded-3xl">
          <img
            src={gardenValley}
            alt="Pine forests and valley views around Kalpa"
            loading="lazy"
            className="h-80 w-full object-cover transition-transform duration-[1400ms] hover:scale-110"
          />
        </Reveal>
        <Reveal delay={0.14} className="overflow-hidden rounded-3xl">
          <img
            src={homestayExterior}
            alt="Prayer flags and mountain homes in Kalpa, Kinnaur"
            loading="lazy"
            className="h-80 w-full object-cover transition-transform duration-[1400ms] hover:scale-110"
          />
        </Reveal>
      </section>

      <CtaBand
        title="Plan Your Kinnaur Trip"
        message="Hello KinVatika Homestay! Please help me plan a Kinnaur trip and share availability."
      />
    </>
  );
}
