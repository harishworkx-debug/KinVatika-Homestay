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
      subtitle="A mountain stay in Kalpa with panoramic views of the Kinnaur Kailash range."
      intro="The Kinnaur Kailash range is one of the most important mountain landscapes in Kinnaur. KinVatika Homestay is located in Village Shudharang in the Kalpa area, where guests can enjoy panoramic views of the range from the property when weather and visibility are clear, along with a quiet village setting and comfortable rooms."
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
        { label: "Things to Do in Kalpa", href: "/things-to-do-in-kalpa" },
      ]}
      contentSections={[
        { title: "About the Kinnaur Kailash region", text: "Kinnaur Kailash is a revered Himalayan range and an important part of Kinnaur's landscape and culture. Visitors come to Kalpa for mountain views, photography, village life and a quieter way to appreciate the region." },
        { title: "KinVatika's actual location", text: "KinVatika is in Village Shudharang, Post Office & Tehsil Reckong Peo, Kalpa, Kinnaur, Himachal Pradesh – 172107. It is in the Kalpa area above Reckong Peo, not in central Reckong Peo and not at the mountain itself." },
        { title: "Views and photography", text: "When visibility is clear, guests can enjoy panoramic views of the Kinnaur Kailash range from the property's mountain-facing spaces. Early mornings and changing weather often create the best natural light, while nearby viewpoints provide additional photography opportunities." },
        { title: "Planning nearby sightseeing", text: "Use KinVatika as a comfortable base for Kalpa village, local temples, orchard walks and scenic roads towards Roghi. Ask the family about current road conditions and practical sightseeing order before setting out." },
        { title: "A respectful mountain visit", text: "Kinnaur is a culturally significant region. Travellers should follow local guidance, respect temple customs, avoid restricted areas and leave mountain roads and village spaces clean." },
      ]}
      ctaTitle="Book a stay near Kinnaur Kailash"
      ctaText="Experience the mountains in calm, comfortable rooms with a warm family welcome in Kalpa."
      ctaMessage="Hello KinVatika Homestay! I would like to stay near Kinnaur Kailash and want to know about availability."
    />
  );
}
