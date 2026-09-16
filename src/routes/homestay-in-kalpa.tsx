import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import heroTerrace from "../assets/KalpaVillage.png";

export const Route = createFileRoute("/homestay-in-kalpa")({
  head: () => ({
    meta: [
      { title: "Best Homestay in Kalpa | KinVatika Homestay" },
      {
        name: "description",
        content:
          "Stay at KinVatika Homestay, one of the best homestays in Kalpa, Kinnaur. Enjoy mountain views, Kinnaur Kailash views, warm family hospitality and homemade Himalayan food.",
      },
      { property: "og:title", content: "Best Homestay in Kalpa | KinVatika Homestay" },
      {
        property: "og:description",
        content:
          "A welcoming family homestay in Kalpa with Kinnaur Kailash mountain views and traditional hospitality.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/homestay-in-kalpa" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/homestay-in-kalpa" }],
  }),
  component: HomeStayInKalpa,
});

function HomeStayInKalpa() {
  return (
    <LocationPage
      image={heroTerrace}
      alt="KinVatika Homestay terrace in Kalpa with Kinnaur Kailash mountain view"
      eyebrow="Best homestay in Kalpa"
      title="Best Homestay in Kalpa, Kinnaur"
      subtitle="A peaceful mountain stay in Village Shudharang with sunrise views, family hospitality and warm Himalayan food."
      intro="KinVatika Homestay is a family-run stay in Kalpa, Kinnaur, built for travellers who want the mountain experience without sacrificing comfort. Wake to a clear view of Kinnaur Kailash, enjoy quiet mornings in the orchard and settle into evenings with homemade food, warm blankets and honest Kinnauri hospitality."
      features={[
        "Mountain view rooms with large windows and natural light",
        "Family-friendly accommodation for couples, parents and groups",
        "Traditional Himalayan meals cooked in our own kitchen",
        "Private balcony spaces and open terrace seating",
        "Warm rooms with heating for Kalpa winters",
        "Easy access to Kalpa village, viewpoints and local temples",
      ]}
      whyStay={[
        "The property sits just above Reckong Peo in the scenic village of Shudharang, making it a convenient base for Kalpa and Kinnaur sightseeing.",
        "Guests can step out onto the terrace and enjoy views of the snow-capped Kinnaur Kailash range as the sky changes color through the day.",
        "We serve home-cooked Himachali and Indian meals, vegetarian options and simple comfort food made for mountain travel days.",
        "The homestay is ideal for slow travellers, families and photographers looking for a calm, authentic stay in the Himalayas.",
      ]}
      faqs={[
        { q: "Is KinVatika Homestay in Kalpa?", a: "Yes. The property is in Village Shudharang, near Kalpa and above Reckong Peo in Kinnaur district." },
        { q: "Does the property have mountain views?", a: "Yes. Guests can enjoy excellent Kinnaur Kailash views and Himalayan scenery from the terrace, balconies and bedrooms." },
        { q: "Is this a family homestay in Kalpa?", a: "Yes. We welcome families, couples and groups seeking a peaceful and comfortable stay in the valley." },
      ]}
      relatedLinks={[
        { label: "Homestay in Kinnaur", href: "/homestay-in-kinnaur" },
        { label: "Homestay near Kinnaur Kailash", href: "/homestay-near-kinnaur-kailash" },
        { label: "Mountain view homestay in Kalpa", href: "/mountain-view-homestay-kalpa" },
        { label: "Family homestay in Kalpa", href: "/family-homestay-in-kalpa" },
      ]}
      ctaTitle="Book the best homestay in Kalpa"
      ctaText="Message us for room availability, direct rates and a warm welcome in the heart of Kinnaur."
      ctaMessage="Hello KinVatika Homestay! I would like to book a stay in Kalpa and would like availability and pricing."
    />
  );
}
