import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import heroTerrace from "../assets/kinvatika-views14.png";

export const Route = createFileRoute("/mountain-view-homestay-kalpa")({
  head: () => ({
    meta: [
      { title: "Mountain View Homestay in Kalpa | KinVatika" },
      {
        name: "description",
        content:
          "Find a mountain view homestay in Kalpa at KinVatika Homestay. Enjoy Kinnaur Kailash views, a quiet terrace, orchard surroundings and warm Himalayan hospitality.",
      },
      { property: "og:title", content: "Mountain View Homestay in Kalpa | KinVatika" },
      {
        property: "og:description",
        content:
          "A peaceful mountain-view homestay in Kalpa with Kinnaur Kailash scenery, balconies and orchard surroundings.",
      },
      { property: "og:url", content: "/mountain-view-homestay-kalpa" },
    ],
    links: [{ rel: "canonical", href: "/mountain-view-homestay-kalpa" }],
  }),
  component: MountainViewHomestayKalpa,
});

function MountainViewHomestayKalpa() {
  return (
    <LocationPage
      image={heroTerrace}
      alt="Mountain view homestay in Kalpa with Kinnaur Kailash skyline"
      eyebrow="Mountain view homestay"
      title="Mountain View Homestay in Kalpa"
      subtitle="A scenic stay with open mountain views, quiet surroundings and the comfort of a true family homestay."
      intro="KinVatika Homestay is the kind of place travellers look for when they want a mountain-view stay in Kalpa without the rush of a hotel. The views are expansive, the air is quiet, and the property is set among orchard and valley landscapes that give you a real sense of Kinnaur."
      features={[
        "Balcony and terrace seating for open-air views",
        "Kinnaur Kailash views from the property and surrounding spaces",
        "Quiet apple orchard surroundings and calm mountain air",
        "Comfortable rooms for couples, families and slow travellers",
        "Fresh homemade food and warm family hospitality",
        "Beautiful Himalayan scenery throughout the day",
      ]}
      whyStay={[
        "A mountain-view homestay in Kalpa is about more than the room — it is about the way the whole property feels. Here, the sunrise, the sound of the valley and the view of the peaks are part of the stay itself.",
        "The terrace and balconies are ideal for tea, quiet reading and photography. In the evenings, the valley turns golden and the snow line glows against the sky.",
        "The property keeps a warm, respectful family atmosphere, which makes it especially suitable for guests who want a personal and authentic Himalayan stay.",
      ]}
      faqs={[
        { q: "Does KinVatika have mountain views?", a: "Yes. The homestay is situated in a location that allows guests to enjoy mountain views and the Kinnaur Kailash range from the terrace and bedrooms." },
        { q: "Is it good for a quiet mountain stay?", a: "Yes. The area is peaceful, and the property is ideal for travellers seeking calm, privacy and scenic surroundings." },
        { q: "Is there a balcony or terrace?", a: "Yes. The property has open spaces and balconies where guests can sit and enjoy the view with tea or meals." },
      ]}
      relatedLinks={[
        { label: "Best homestay in Kalpa", href: "/homestay-in-kalpa" },
        { label: "Homestay near Kinnaur Kailash", href: "/homestay-near-kinnaur-kailash" },
        { label: "Family homestay in Kalpa", href: "/family-homestay-in-kalpa" },
        { label: "Kinnaur Kailash travel guide", href: "/kinnaur-kailash-travel-guide" },
      ]}
      ctaTitle="Enjoy a mountain-view stay in Kalpa"
      ctaText="Book your room today and wake up to the Kinnaur valley and sacred mountain light."
      ctaMessage="Hello KinVatika Homestay! I am looking for a mountain view room in Kalpa and would like availability."
    />
  );
}
