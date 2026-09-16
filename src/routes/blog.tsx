import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import blogImage from "../assets/gallery7.png";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Kalpa & Kinnaur Travel Blog | KinVatika Homestay" },
      {
        name: "description",
        content:
          "Read useful Kalpa and Kinnaur travel guides, local stay tips and destination ideas from KinVatika Homestay.",
      },
      { property: "og:title", content: "Kalpa & Kinnaur Travel Blog | KinVatika Homestay" },
      {
        property: "og:description",
        content: "Useful travel articles on Kalpa, Kinnaur, mountain stays and the best things to do in the valley.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/blog" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/blog" }],
  }),
  component: Blog,
});

const articles = [
  {
    title: "Best Homestays in Kalpa: Complete Stay Guide",
    description:
      "A practical guide to choosing the right stay in Kalpa, with a focus on serenity, mountain views and local hospitality.",
    href: "/homestay-in-kalpa",
  },
  {
    title: "Best Places to Visit in Kalpa, Kinnaur",
    description:
      "The valley’s most rewarding viewpoints, village walks and cultural stops for your Kinnaur itinerary.",
    href: "/things-to-do-in-kalpa",
  },
  {
    title: "Things to Do in Kalpa, Himachal Pradesh",
    description:
      "From sunrise to village evenings, see how slow travellers enjoy the best of Kalpa without rushing.",
    href: "/things-to-do-in-kalpa",
  },
  {
    title: "Kinnaur Kailash Travel Guide",
    description:
      "A simple travel guide to the sacred range, surrounding viewpoints and the best way to experience the mountain from Kalpa.",
    href: "/kinnaur-kailash-travel-guide",
  },
  {
    title: "Best Time to Visit Kalpa and Kinnaur",
    description:
      "Seasonal advice for travel timing, snowfall, orchard views and the best atmospheric conditions for your stay.",
    href: "/kalpa-travel-guide",
  },
  {
    title: "How to Reach Kalpa from Delhi, Chandigarh and Shimla",
    description:
      "A practical overview of routes, road conditions and travel planning for visiting Kalpa by car or bus.",
    href: "/kalpa-travel-guide",
  },
  {
    title: "Kalpa vs Reckong Peo: Where Should You Stay?",
    description:
      "Compare two Kinnaur bases and understand which one suits your travel style, itinerary and desired mountain atmosphere.",
    href: "/homestay-in-reckong-peo",
  },
  {
    title: "Traditional Food to Try in Kinnaur",
    description:
      "A look at the comforting, local flavours that make a mountain stay in Kinnaur memorable.",
    href: "/homestay-in-kalpa",
  },
  {
    title: "A Complete Kalpa Kinnaur Travel Itinerary",
    description:
      "A slower, scenic travel plan built around villages, viewpoints, food and mountain time.",
    href: "/kalpa-travel-guide",
  },
  {
    title: "Why Stay in a Homestay in Kalpa?",
    description:
      "Understand why a family-run homestay creates a more personal and memorable mountain experience in Kinnaur.",
    href: "/homestay-in-kalpa",
  },
];

function Blog() {
  return (
    <>
      <PageHero
        image={blogImage}
        alt="Kinnaur mountain scenery and terrace view from Kalpa"
        eyebrow="Travel blog"
        title="Kalpa & Kinnaur Travel Blog"
        subtitle="Useful guides, local insight and practical travel advice for guests planning a stay near the Kinnaur Kailash range."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.04}>
              <article className="h-full rounded-3xl border border-border/70 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <p className="eyebrow text-pine">Travel guide</p>
                <h2 className="mt-4 text-2xl leading-snug">{article.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{article.description}</p>
                <Link
                  to={article.href}
                  className="mt-6 inline-flex items-center gap-2 text-[0.72rem] tracking-widest text-pine uppercase"
                >
                  Read article
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Plan your stay in Kalpa"
        text="Need help picking a room or planning the best route around Kinnaur? We are happy to help."
        message="Hello KinVatika Homestay! I am planning a trip to Kinnaur and would like to know the best place to stay."
      />
    </>
  );
}
