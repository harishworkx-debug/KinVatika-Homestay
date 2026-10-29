import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { ArrowRight } from "lucide-react";
import kinnaurKailash from "../assets/Kinnaur-Kailash Viewpoint.png";

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
        content:
          "A useful travel guide for Kinnaur Kailash, Kalpa and mountain sightseeing in the region.",
      },
      {
        property: "og:url",
        content: "https://www.kinvatikahomestay.com/kinnaur-kailash-travel-guide",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.kinvatikahomestay.com/kinnaur-kailash-travel-guide" },
    ],
  }),
  component: KinnaurKailashTravelGuide,
});

const points = [
  "Spiritual Reverence: The 79-foot natural monolith rock atop Kinnaur Kailash is revered as the sacred Shivling, changing colours from white-grey to orange-gold and deep brown as the sun traverses the sky.",
  "Viewpoint vs Trek: The strenuous pilgrimage trek (Yatra) starts from Tangling village (near Shongtong, 25 km from Peo) and is only permitted in July/August with medical certification. For general tourists, Kalpa offers the supreme panoramic view without trekking.",
  "Elevation & Massif: The Kinnaur Kailash range is dominated by Mount Kinnaur Kailash (6,050m) and the towering Jorkanden peak (6,473m), rising steeply above the Sutlej river canyon.",
  "Photographic Golden Hours: The massif faces east. Sunrise (6:00 AM – 6:45 AM) casts the famous golden alpenglow, while moonlit nights create silver silhouettes across the snow ridge.",
];

function KinnaurKailashTravelGuide() {
  return (
    <>
      <PageHero
        image={kinnaurKailash}
        alt="Kinnaur Kailash mountain range seen from Kalpa"
        eyebrow="Kinnaur Sacred Peaks Guide"
        title="Kinnaur Kailash Travel Guide"
        subtitle="Complete guide to the sacred 6,050m massif, sunrise viewpoints, photography tips, and the pilgrimage Yatra distinction."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">The Sacred Mountain of the Himalayas</h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
            Revered by Hindus as the mythical winter home of Lord Shiva and sacred to Buddhists as a
            spiritual guardian of the Western Himalayas, the Kinnaur Kailash range is the majestic
            centrepiece of Kinnaur district. For visitors to Kalpa, the sheer granite walls and
            hanging glaciers of Kailash dominate the horizon from every terrace and window.
          </p>
        </Reveal>

        {/* Essential Facts & Yatra Breakdown */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full rounded-3xl border border-border/80 bg-card p-8 shadow-soft">
              <h3 className="text-2xl text-forest">The Holy Yatra vs Kalpa Darshan</h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-charcoal">The Pilgrimage Trek (Yatra):</strong> A rigorous
                  high-altitude trek organized by the Kinnaur District Administration, typically
                  during July–August. It starts from Tangling village (across the Sutlej river) and
                  takes 2 to 3 days of steep climbing up to 4,800m. Mandatory medical fitness
                  certificates and online permits are enforced.
                </p>
                <p>
                  <strong className="text-charcoal">Kalpa Viewpoint (Darshan):</strong> For
                  families, couples, and leisure travellers, Kalpa (where KinVatika Homestay is
                  based) is situated directly across the valley, offering unobstructed, front-row
                  panoramic views of the entire sacred massif without any trekking strain.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border/80 bg-card p-8 shadow-soft">
              <h3 className="text-2xl text-forest">Best Vantage Points in Kalpa</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <strong className="text-charcoal">KinVatika Homestay Terrace:</strong> Rooftop and
                  private balcony views directly facing east across Village Shudharang.
                </li>
                <li>
                  <strong className="text-charcoal">Kalpa Viewpoint (1.5 km):</strong> The classic
                  viewing platform on the main Kalpa ridge looking straight at the 79-foot rock
                  Shivling.
                </li>
                <li>
                  <strong className="text-charcoal">Roghi Village Road (7 km):</strong> Offers deep
                  vertical perspectives of the Sutlej canyon with the snow peaks towering above.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Key Points */}
        <div className="mt-12 space-y-4">
          <h3 className="text-2xl text-forest">Key Facts & Travel Insights</h3>
          {points.map((point, index) => (
            <Reveal key={point} delay={index * 0.05}>
              <div className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
                <ArrowRight className="mt-1 shrink-0 text-pine" size={18} />
                <p className="text-base leading-relaxed text-charcoal/80">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 rounded-3xl bg-secondary/60 p-8 shadow-soft">
          <h3 className="text-2xl text-forest">Experience the Kailash Sunrise at KinVatika</h3>
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            Staying in Village Shudharang allows you to experience the stillness of the sacred range
            away from commercial noise. Wake up to fresh mountain air, watch the alpenglow
            illuminate the snow peaks, and enjoy hot Himachali tea on the viewing terrace.
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
