import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import homestaySummer from "../assets/kinvatika-views4.png";
import interiorLobby from "../assets/gallery10.png";
import gardenValley from "../assets/kinvatika-views6.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KinVatika Homestay | Family Homestay in Kalpa, Kinnaur" },
      {
        name: "description",
        content:
          "The story of KinVatika Homestay — a family-run boutique homestay in Village Shudharang, Kalpa, built in traditional Kinnauri wood with panoramic Himalayan views when visibility is clear.",
      },
      { property: "og:title", content: "About KinVatika Homestay, Kalpa" },
      {
        property: "og:description",
        content: "A Kinnauri family home turned boutique homestay above Reckong Peo.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        image={homestaySummer}
        alt="KinVatika Homestay exterior with Himalayan peaks behind"
        eyebrow="About KinVatika"
        title="A Kinnauri family home, opened to travellers."
        subtitle="One hillside, a family welcome, and a belief that a guest should be fed and warmed before being asked anything at all."
      />

      <section className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        <Reveal>
          <p className="text-lg leading-loose text-charcoal/80">
            KinVatika sits in Village Shudharang, a quiet cluster of orchard homes above Reckong
            Peo, facing the sacred Kinnaur Kailash range. What began as our family house — deodar
            beams, hand-cut panelling, a garden that fights the frost every winter — slowly became a
            place for guests who wanted the valley without the noise of a hotel.
          </p>
          <p className="mt-6 text-lg leading-loose text-charcoal/80">
            We kept the wood, the rugs, the chandelier in the hall and the apple trees outside. We
            added heating, hot water, fast Wi-Fi, private bathrooms and beds you sink into after a
            long mountain drive.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-14 grid gap-6 sm:grid-cols-2">
          <img
            src={interiorLobby}
            alt="Wooden hall interior of KinVatika Homestay"
            loading="lazy"
            className="h-80 w-full rounded-3xl object-cover shadow-soft"
          />
          <img
            src={gardenValley}
            alt="Garden and valley view from the homestay"
            loading="lazy"
            className="h-80 w-full rounded-3xl object-cover shadow-soft"
          />
        </Reveal>
        <Reveal delay={0.15} className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            { t: "Our promise", d: "Clean rooms, honest pricing and a host who answers the phone." },
            { t: "Our kitchen", d: "Local produce, family recipes, meals cooked to order." },
            { t: "Our valley", d: "Guidance on treks, temples, orchards and the best sunrise spots." },
          ].map((c) => (
            <div key={c.t}>
              <p className="font-display text-2xl text-forest">{c.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <CtaBand title="Come stay with our family" />
    </>
  );
}
