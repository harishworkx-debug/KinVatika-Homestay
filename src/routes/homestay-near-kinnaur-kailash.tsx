import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import kinnaurKailash from "../assets/Kinnaur-Kailash Viewpoint.png";

export const Route = createFileRoute("/homestay-near-kinnaur-kailash")({
  head: () => ({
    meta: [
      { title: "Homestay Near Kinnaur Kailash | KinVatika Homestay" },
      {
        name: "description",
        content:
          "Stay near Kinnaur Kailash at KinVatika Homestay in Kalpa, where mountain views, valley warmth and a peaceful Himalayan setting create an unforgettable stay.",
      },
      { property: "og:title", content: "Homestay Near Kinnaur Kailash | KinVatika Homestay" },
      {
        property: "og:description",
        content:
          "A scenic Kalpa homestay near Kinnaur Kailash with mountain-view rooms and warm hospitality.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/homestay-near-kinnaur-kailash" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/homestay-near-kinnaur-kailash" }],
  }),
  component: HomestayNearKinnaurKailash,
});

function HomestayNearKinnaurKailash() {
  return (
    <LocationPage
      image={kinnaurKailash}
      alt="Kinnaur Kailash mountain view from KinVatika Homestay in Kalpa"
      eyebrow="Homestay near Kinnaur Kailash"
      title="Homestay Near Kinnaur Kailash"
      subtitle="A mountain stay in Kalpa with a front-row view of the sacred Kinnaur Kailash range."
      intro="The Kinnaur Kailash range is one of the most revered sights in the Himalayas, and in Kalpa it feels close enough to touch. KinVatika Homestay offers guests the chance to wake up within this landscape, with terraces, balconies and rooms that frame the mountain in a quiet and comfortable setting."
      features={[
        "Direct access to mountain-view rooms and terraces",
        "Ideal for sunrise and photography enthusiasts",
        "Comfortable Kinnaur stay in a quiet village setting",
        "Family-run hospitality with local food and advice",
        "Great base for exploring Kalpa and the valley roads",
        "Warm rooms and a peaceful atmosphere all year round",
      ]}
      whyStay={[
        "Travellers often choose a stay close to Kinnaur Kailash for the mountain experience — and KinVatika provides that without sacrificing comfort or easy accessibility.",
        "The property is positioned to enjoy the awe of the range while still being within reach of Kalpa village, the valley and the district’s tourist routes.",
        "If you want a premium mountain-view stay with practical comforts and a local family touch, this is the right kind of base for your Kinnaur journey.",
      ]}
      faqs={[
        { q: "Can guests see Kinnaur Kailash from the property?", a: "Yes. The property is positioned to offer scenic views of the Kinnaur Kailash range, both from the terrace and the rooms." },
        { q: "Is it a good location for mountain photography?", a: "Yes. Early morning light and the changing weather often make for memorable mountain shots from the property and nearby viewpoints." },
        { q: "Is this close to Kalpa village?", a: "Yes. The homestay is in the Kalpa region, making it a convenient base for village visits, sightseeing and travel around Kinnaur." },
      ]}
      relatedLinks={[
        { label: "Best homestay in Kalpa", href: "/homestay-in-kalpa" },
        { label: "Homestay in Kinnaur", href: "/homestay-in-kinnaur" },
        { label: "Mountain view homestay in Kalpa", href: "/mountain-view-homestay-kalpa" },
        { label: "Thinks to do in Kalpa", href: "/things-to-do-in-kalpa" },
      ]}
      ctaTitle="Book a stay near Kinnaur Kailash"
      ctaText="Experience the mountains in calm, comfortable rooms with a warm family welcome in Kalpa."
      ctaMessage="Hello KinVatika Homestay! I would like to stay near Kinnaur Kailash and want to know about availability."
    />
  );
}
