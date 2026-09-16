import { createFileRoute } from "@tanstack/react-router";
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
          "Learn about the stay experience at KinVatika Homestay in Kalpa, Kinnaur, and contact the family directly for current guest information.",
      },
      { property: "og:title", content: "Guest Reviews — KinVatika Homestay" },
      {
        property: "og:description",
        content: "What families and travellers say about staying at KinVatika in Kalpa.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/reviews" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHero
        image={familyRoom}
        alt="Comfortable family room at KinVatika Homestay"
        eyebrow="Guest Reviews"
        title="A stay shaped by mountain views and family hospitality"
        subtitle="Contact KinVatika directly for current guest information and availability in Kalpa."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl">Stay with us and make your own Kinnaur memories</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            We are building this page around verified guest feedback rather than publishing unattributed testimonials.
            Ask the KinVatika family about recent guest experiences, rooms, food and current availability before booking.
          </p>
        </Reveal>
      </section>

      <CtaBand title="Write your own Kinnaur story" />
    </>
  );
}
