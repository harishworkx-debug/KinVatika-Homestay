import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { BookingForm } from "@/components/site/BookingForm";
import heroTerrace from "../assets/kinvatika-views14.png";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Stay | KinVatika Homestay, Kalpa, Kinnaur" },
      {
        name: "description",
        content:
          "Book KinVatika Homestay in Kalpa directly on WhatsApp. Share your dates, guests and room type for the best available price — no commission, instant reply.",
      },
      { property: "og:title", content: "Book Your Stay — KinVatika Homestay, Kalpa" },
      {
        property: "og:description",
        content: "Direct WhatsApp booking for mountain-view rooms in Kalpa, Kinnaur.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/book" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/book" }],
  }),
  component: Book,
});

function Book() {
  return (
    <>
      <PageHero
        image={heroTerrace}
        alt="Terrace with panoramic Himalayan views at KinVatika Homestay"
        eyebrow="Book Your Stay"
        title="Direct booking. Best price. Instant reply."
        subtitle="Fill in your details and we'll confirm on WhatsApp — usually within a few minutes."
      />

      <section className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <Reveal>
          <BookingForm />
        </Reveal>
      </section>
    </>
  );
}
