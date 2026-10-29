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
        content:
          "A practical Kalpa travel guide with local tips, best viewpoints and a stay recommendation in Kinnaur.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/kalpa-travel-guide" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/kalpa-travel-guide" }],
  }),
  component: KalpaTravelGuide,
});

const tips = [
  "Plan your days around sunrise and golden hour: The Kinnaur Kailash massif faces east and turns vivid orange-gold between 6:00 AM and 6:45 AM.",
  "Altitude adjustment: Kalpa sits at 2,900m (9,500 ft). Spend the first afternoon resting and drinking plenty of water before taking uphill walks.",
  "Connectivity: Jio and Airtel offer reliable 4G/5G mobile connectivity in Kalpa and Reckong Peo. BSNL also has wide voice coverage.",
  "Cash & Fuel: Withdraw cash and refuel in Reckong Peo (9 km downhill); there are no petrol pumps or ATMs in Kalpa village itself.",
  "Clothing: Temperatures drop sharply after sunset even in summer. Carry a warm fleece or light down jacket for spring/autumn, and heavy woollens with thermals for winter.",
];

function KalpaTravelGuide() {
  return (
    <>
      <PageHero
        image={heroTerrace}
        alt="View over Kalpa and the Kinnaur valley"
        eyebrow="Practical Travel Guide"
        title="Kalpa Travel Guide"
        subtitle="Complete, verified guidance on how to reach, best seasons, road conditions, and local insights for visiting Kalpa, Kinnaur."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">Why Kalpa is the Jewel of Kinnaur</h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/80">
            Perched at 2,900 metres (9,500 feet) above sea level in Himachal Pradesh, Kalpa is
            world-renowned for its heritage apple orchards, traditional deodar-wood architecture,
            and direct panoramic views of the sacred Kinnaur Kailash peak. Once the favoured summer
            retreat of Lord Dalhousie, Kalpa remains an unhurried, authentic mountain haven where
            travellers come to disconnect, photograph dramatic peaks, and experience true Himachali
            village hospitality.
          </p>
        </Reveal>

        {/* Practical Transport & Planning Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full rounded-3xl border border-border/80 bg-card p-8 shadow-soft">
              <h3 className="text-2xl text-forest">How to Reach Kalpa</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <strong className="text-charcoal">From Shimla:</strong> 230 km (approx. 8–9 hours)
                  via NH-5 through Theog, Narkanda, Rampur Bushahr, Jeori, and Powari to Reckong
                  Peo, then 9 km uphill to Kalpa.
                </li>
                <li>
                  <strong className="text-charcoal">From Chandigarh:</strong> 340 km (approx. 11–12
                  hours) via Himalayan Expressway to Shimla, then NH-5.
                </li>
                <li>
                  <strong className="text-charcoal">By Public Bus:</strong> Daily ordinary and
                  deluxe HRTC buses operate from ISBT Tutikandi (Shimla) to Reckong Peo. From Peo,
                  local buses and private taxis run uphill to Kalpa every 30–45 mins.
                </li>
                <li>
                  <strong className="text-charcoal">Nearest Airport / Train:</strong> Shimla
                  (Jubarhati) Airport (250 km) or Kalka Railway Station (320 km).
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border/80 bg-card p-8 shadow-soft">
              <h3 className="text-2xl text-forest">Best Time to Visit</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <strong className="text-charcoal">Spring & Summer (April – June):</strong>{" "}
                  Pleasant daytime weather (12°C to 22°C), blooming apple and apricot blossoms, snow
                  on the high peaks. Ideal for families and sightseeing.
                </li>
                <li>
                  <strong className="text-charcoal">Autumn (September – November):</strong>{" "}
                  Crystal-clear deep blue skies, red apple harvest season, golden foliage, and the
                  sharpest mountain views of the year.
                </li>
                <li>
                  <strong className="text-charcoal">Winter (December – March):</strong> For snowfall
                  lovers. Temperatures range between -5°C and 8°C. Rooms require heating; check road
                  conditions between Narkanda and Jeori before travelling.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Road Conditions and Permits */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.12}>
            <div className="h-full rounded-3xl border border-border/80 bg-card p-8 shadow-soft">
              <h3 className="text-2xl text-forest">NH-5 Road Conditions & Driving</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The Hindustan-Tibet Highway (NH-5) is double-laned and generally well maintained by
                BRO. The stretch between Rampur and Powari follows the Sutlej river gorge with
                spectacular cliff-carved rock tunnels. Avoid night driving in the mountains, check
                monsoon landslide updates in July–August, and maintain steady low gears when
                ascending the 9 km twisty incline from Reckong Peo to Kalpa.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full rounded-3xl border border-border/80 bg-card p-8 shadow-soft">
              <h3 className="text-2xl text-forest">Permits & Regulations</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-charcoal">Indian Nationals:</strong> No permits required for
                Kalpa, Reckong Peo, or Sangla Valley. Simply carry valid government ID.
                <br />
                <strong className="text-charcoal">Foreign Nationals:</strong> No permit required up
                to Reckong Peo and Kalpa. However, an Inner Line Permit (ILP) is required if
                travelling onward towards Spiti Valley (beyond Jangi / Akpa), obtainable from the
                SDM office in Reckong Peo or online via Himachal e-District.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl text-forest">Local Travel & Photography Tips</h3>
          <div className="mt-6 space-y-4">
            {tips.map((tip, index) => (
              <Reveal key={tip} delay={index * 0.05}>
                <div className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
                  <ArrowRight className="mt-1 shrink-0 text-pine" size={18} />
                  <p className="text-base leading-relaxed text-charcoal/80">{tip}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="mt-12 rounded-3xl bg-secondary/60 p-8 shadow-soft">
          <h3 className="text-2xl text-forest">Staying at KinVatika Homestay</h3>
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            Located in Village Shudharang just below the central Kalpa ridge, KinVatika Homestay
            offers quiet apple orchard surroundings, private balconies with Kinnaur Kailash views,
            heated rooms for cold nights, and genuine home-cooked Himachali meals. Our family hosts
            are always on hand to advise on daily road updates, arrange trusted local taxis, and
            share hidden trails around the valley.
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
