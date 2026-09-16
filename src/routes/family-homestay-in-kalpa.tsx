import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import familyRoom from "../assets/family-room.png";

export const Route = createFileRoute("/family-homestay-in-kalpa")({
  head: () => ({
    meta: [
      { title: "Family Homestay in Kalpa, Kinnaur | KinVatika" },
      {
        name: "description",
        content:
          "Choose a family homestay in Kalpa at KinVatika Homestay for warm hospitality, comfortable rooms, homemade food and peaceful Himalayan surroundings.",
      },
      { property: "og:title", content: "Family Homestay in Kalpa | KinVatika" },
      {
        property: "og:description",
        content:
          "A family-friendly homestay in Kalpa with spacious rooms, local food and comfort for every age group.",
      },
      { property: "og:url", content: "https://kinvatika.com/family-homestay-in-kalpa" },
    ],
    links: [{ rel: "canonical", href: "https://kinvatika.com/family-homestay-in-kalpa" }],
  }),
  component: FamilyHomestayInKalpa,
});

function FamilyHomestayInKalpa() {
  return (
    <LocationPage
      image={familyRoom}
      alt="Family room at KinVatika Homestay in Kalpa"
      eyebrow="Family homestay"
      title="Family Homestay in Kalpa"
      subtitle="A warm, peaceful and family-friendly stay in the heart of Kinnaur’s mountain valley."
      intro="KinVatika Homestay is designed for families who want a true Himalayan holiday without the formality of a standard hotel. With spacious rooms, comfortable bedding, warm hospitality and home-cooked meals, our property offers a restful base for parents, children and grandparents alike."
      features={[
        "Family-friendly rooms with comfortable, spacious layouts",
        "Homemade food and warm hospitality for guests of all ages",
        "Peaceful surroundings and mountain air for restful stays",
        "Great base for short family vacations in Kinnaur",
        "Warm interiors for winter family holidays",
        "Helpful hosts for local travel advice and family planning",
      ]}
      whyStay={[
        "Families often prefer a homestay because it feels personal, calm and practical. There is space to relax, warm meals at the right time and a kind of care that makes a family trip easier.",
        "At KinVatika, our guests are welcomed like relatives and guided through the valley with a local perspective. That makes the stay feel more authentic and more comfortable for all ages.",
        "Whether you are travelling with children or relatives, the combination of peaceful surroundings, good food and reliable rooms gives families a stronger sense of comfort in the mountains.",
      ]}
      faqs={[
        { q: "Is KinVatika suitable for families?", a: "Yes. The homestay is well-suited for families thanks to its comfortable rooms, peaceful environment and warm hospitality." },
        { q: "Do you provide family meals?", a: "Yes. We serve homemade local food and can help with breakfast and simple meal arrangements for families staying with us." },
        { q: "Is the homestay quiet and safe for children?", a: "Yes. The property is set in a peaceful mountain village, with a calm environment and family-centred hospitality." },
      ]}
      relatedLinks={[
        { label: "Best homestay in Kalpa", href: "/homestay-in-kalpa" },
        { label: "Mountain view homestay in Kalpa", href: "/mountain-view-homestay-kalpa" },
        { label: "Homestay in Kinnaur", href: "/homestay-in-kinnaur" },
        { label: "Kalpa travel guide", href: "/kalpa-travel-guide" },
      ]}
      ctaTitle="Book a family-friendly stay in Kalpa"
      ctaText="Let us help you plan a comfortable family trip to Kalpa with warm hospitality and mountain views."
      ctaMessage="Hello KinVatika Homestay! I am planning a family trip to Kalpa and would like to know about room options."
    />
  );
}
