import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import gardenValley from "../assets/kinvatika-gardan.png";

export const Route = createFileRoute("/homestay-in-shudharang")({
  head: () => ({
    meta: [
      { title: "Homestay in Shudharang, Kalpa | KinVatika Homestay" },
      {
        name: "description",
        content:
          "Stay in the scenic village of Shudharang, Kalpa at KinVatika Homestay. Enjoy orchard views, Kinnaur Kailash scenery and warm Himalayan hospitality.",
      },
      { property: "og:title", content: "Homestay in Shudharang, Kalpa | KinVatika Homestay" },
      {
        property: "og:description",
        content:
          "A peaceful homestay in Shudharang, near Kalpa and Kinnaur Kailash views.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/homestay-in-shudharang" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/homestay-in-shudharang" }],
  }),
  component: HomestayInShudharang,
});

function HomestayInShudharang() {
  return (
    <LocationPage
      image={gardenValley}
      alt="Scenic Shudharang valley area with orchard view near Kalpa"
      eyebrow="Homestay in Shudharang"
      title="Homestay in Shudharang, Kalpa"
      subtitle="A quiet village stay wrapped in orchards, mountain air and panoramic Himalayan views."
      intro="Shudharang is one of the most atmospheric places to stay in the Kalpa region. As a village tucked into the valley, it offers the feel of a local Himalayan community without losing access to the region’s major viewpoints, roads and restaurants. KinVatika Homestay sits here as a welcoming family-run stay where you can slow down, look at the peaks and settle into a peaceful rhythm."
      features={[
        "Quiet village location with orchard surroundings",
        "Mountain-facing rooms and valley ambience",
        "Direct access to Kalpa and Kinnaur viewpoints",
        "Warm rooms, family care and homemade meals",
        "Perfect for families, couples and photographers",
        "Authentic local setting with a peaceful atmosphere",
      ]}
      whyStay={[
        "Shudharang feels more personal than a busy town centre, which is a big part of why many travellers prefer it for a longer Kinnaur stay.",
        "The region gives you clear views of the Himalayas, orchard walks, village atmosphere and a slower pace that is ideal for mountain travellers.",
        "At KinVatika, you have all of that combined with comfortable rooms, genuine hospitality and the ability to reach local destinations without a stressful drive.",
      ]}
      faqs={[
        { q: "Is Shudharang in Kalpa?", a: "Yes. Shudharang is part of the Kalpa region and is close to the main attractions and viewpoints of Kinnaur." },
        { q: "Is KinVatika in Shudharang?", a: "Yes. The homestay is located in Village Shudharang, near Kalpa and above Reckong Peo." },
        { q: "Why stay in Shudharang instead of the town centre?", a: "It offers a more peaceful setting, local village feel and a strong mountain-view atmosphere while still staying connected to major routes." },
      ]}
      relatedLinks={[
        { label: "Best homestay in Kalpa", href: "/homestay-in-kalpa" },
        { label: "Homestay near Reckong Peo", href: "/homestay-in-reckong-peo" },
        { label: "Kinnaur travel guide", href: "/things-to-do-in-kalpa" },
        { label: "Family homestay in Kalpa", href: "/family-homestay-in-kalpa" },
      ]}
      ctaTitle="Stay in the quieter side of Kalpa"
      ctaText="Book a room in Shudharang and enjoy a restful mountain stay with valley views and local warmth."
      ctaMessage="Hello KinVatika Homestay! I am interested in staying in Shudharang, Kalpa and would like to know about room availability."
    />
  );
}
