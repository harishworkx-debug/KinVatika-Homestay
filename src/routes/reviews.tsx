import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import familyRoom from "../assets/family-room.png";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Guest Reviews | KinVatika Homestay, Kalpa, Kinnaur" },
      {
        name: "description",
        content:
          "Guests rate KinVatika Homestay 4.9/5 for mountain views, homemade food, spotless rooms and warm family hosts in Kalpa, Kinnaur.",
      },
      { property: "og:title", content: "Guest Reviews — KinVatika Homestay" },
      {
        property: "og:description",
        content: "What families and travellers say about staying at KinVatika in Kalpa.",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "KinVatika Homestay",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "68",
          },
          review: [
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Ananya Sharma" },
              reviewRating: { "@type": "Rating", ratingValue: "5" },
              reviewBody:
                "We opened the curtains and Kinnaur Kailash was just there. Warm hosts and wonderful food.",
            },
          ],
        }),
      },
    ],
  }),
  component: Reviews,
});

const reviews = [
  {
    n: "Ananya Sharma",
    c: "Delhi",
    r: "We opened the curtains and Kinnaur Kailash was just there. The family looked after my parents so warmly, and the home-cooked food was the highlight of our Kinnaur trip.",
  },
  {
    n: "Rohit Menon",
    c: "Bengaluru",
    r: "Spotless rooms, proper heating during snowfall and hot water all day. Booked directly on WhatsApp in two minutes and got a better rate than any app.",
  },
  {
    n: "Priya & Karan",
    c: "Chandigarh",
    r: "The terrace at sunrise is unreal. Peaceful, clean and genuinely hospitable hosts. We already know where we're staying next year.",
  },
  {
    n: "Meera Joshi",
    c: "Pune",
    r: "Travelled with a toddler and a dog — both were welcomed. The family suite is big, warm and safe, and the garden was perfect in the afternoons.",
  },
  {
    n: "Aditya Rana",
    c: "Shimla",
    r: "As a local I'm picky about Himachali food. The siddu and rajma here are the real thing. The wooden interiors are beautifully done too.",
  },
  {
    n: "Sarah Whitmore",
    c: "London",
    r: "Quiet, honest and beautiful. Our host helped with taxis, treks and even a bonfire evening. One of the warmest stays I've had in India.",
  },
];

function Reviews() {
  return (
    <>
      <PageHero
        image={familyRoom}
        alt="Comfortable family room at KinVatika Homestay"
        eyebrow="Guest Reviews"
        title="4.9 out of 5, mostly for the food and the sunrise."
        subtitle="Reviews from families, couples and solo travellers who stayed with us in Kalpa."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.06}>
              <figure className="h-full rounded-3xl bg-card p-8 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex gap-1 text-gold">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-charcoal/80">
                  “{t.r}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-xl text-forest">{t.n}</p>
                  <p className="text-xs text-muted-foreground">{t.c}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Write your own Kinnaur story" />
    </>
  );
}
