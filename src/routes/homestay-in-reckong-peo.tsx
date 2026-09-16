import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import homestayExterior from "../assets/kinvatika-views3.png";

export const Route = createFileRoute("/homestay-in-reckong-peo")({
  head: () => ({
    meta: [
      { title: "Homestay in Reckong Peo, Kinnaur | KinVatika" },
      {
        name: "description",
        content:
          "Stay near Reckong Peo at KinVatika Homestay, a peaceful Kinnaur stay with mountain views, family hospitality and access to Kalpa and nearby attractions.",
      },
      { property: "og:title", content: "Homestay Near Reckong Peo | KinVatika Homestay" },
      {
        property: "og:description",
        content:
          "A quiet homestay near Reckong Peo, ideal for travellers visiting Kalpa, Kinnaur and the Himalayan valley.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/homestay-in-reckong-peo" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/homestay-in-reckong-peo" }],
  }),
  component: HomestayInReckongPeo,
});

function HomestayInReckongPeo() {
  return (
    <LocationPage
      image={homestayExterior}
      alt="KinVatika Homestay near Reckong Peo in the Kinnaur valley"
      eyebrow="Homestay near Reckong Peo"
      title="Homestay Near Reckong Peo, Kinnaur"
      subtitle="A comfortable stay above Reckong Peo, close to Kalpa and the wider Kinnaur region."
      intro="KinVatika Homestay is located in Village Shudharang, near Kalpa and above Reckong Peo in Kinnaur. This puts guests within easy reach of the district headquarter, scenic valley roads and some of the most dramatic mountain views in Himachal Pradesh while still offering a quieter, more personal setting than a busy town stay."
      features={[
        "Close to Reckong Peo and Kalpa routes",
        "Quiet Himalayan setting above the town centre",
        "Warm, comfortable rooms with mountain ambience",
        "Excellent base for local sightseeing and valley drives",
        "Traditional Kinnauri hospitality and home-cooked food",
        "Great for families, couples and road travellers",
      ]}
      whyStay={[
        "Travellers often prefer a stay near Reckong Peo for its practical access to markets, transport and nearby sightseeing, but a hillside property like KinVatika adds a calmer atmosphere and direct mountain views.",
        "Our location offers the right balance: access to the district without the noise and congestion of staying directly in the centre.",
        "From here, guests can explore Kalpa, approach Kinnaur Kailash viewpoints, and return to a restful homestay at the end of the day.",
      ]}
      faqs={[
        { q: "Is KinVatika Homestay near Reckong Peo?", a: "Yes, it is located in Shudharang, above Reckong Peo and within the Kalpa area of Kinnaur." },
        { q: "Is it better to stay in Kalpa or Reckong Peo?", a: "For mountain views and a quieter setting, a stay close to Kalpa and Shudharang is often preferred. Reckong Peo is more central, while this property offers a calmer valley stay." },
        { q: "Can I reach the property easily from Reckong Peo?", a: "Yes. The property is accessible by road and is a convenient base for visitors moving around Kinnaur." },
      ]}
      relatedLinks={[
        { label: "Best homestay in Kalpa", href: "/homestay-in-kalpa" },
        { label: "Homestay in Kinnaur", href: "/homestay-in-kinnaur" },
        { label: "Homestay in Shudharang", href: "/homestay-in-shudharang" },
        { label: "Kalpa travel guide", href: "/things-to-do-in-kalpa" },
      ]}
      ctaTitle="Book a homestay near Reckong Peo"
      ctaText="Planning a Kalpa or Kinnaur trip? We can help you choose a room and plan the best route from Reckong Peo."
      ctaMessage="Hello KinVatika Homestay! I am visiting Reckong Peo and Kalpa and would like to check room availability."
    />
  );
}
