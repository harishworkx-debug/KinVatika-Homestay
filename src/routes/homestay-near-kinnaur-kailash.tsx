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
      {
        property: "og:url",
        content: "https://www.kinvatikahomestay.com/homestay-near-kinnaur-kailash",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.kinvatikahomestay.com/homestay-near-kinnaur-kailash" },
    ],
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
        {
          q: "Can guests see Kinnaur Kailash from the property?",
          a: "Yes. The property is positioned to offer scenic views of the Kinnaur Kailash range, both from the terrace and the rooms.",
        },
        {
          q: "Is it a good location for mountain photography?",
          a: "Yes. Early morning light and the changing weather often make for memorable mountain shots from the property and nearby viewpoints.",
        },
        {
          q: "Is this close to Kalpa village?",
          a: "Yes. The homestay is in the Kalpa region, making it a convenient base for village visits, sightseeing and travel around Kinnaur.",
        },
      ]}
      relatedLinks={[
        { label: "Best homestay in Kalpa", href: "/homestay-in-kalpa" },
        { label: "Homestay in Kinnaur", href: "/homestay-in-kinnaur" },
        { label: "Mountain view homestay in Kalpa", href: "/mountain-view-homestay-kalpa" },
        { label: "Things to Do in Kalpa", href: "/things-to-do-in-kalpa" },
      ]}
      contentSections={[
        {
          title: "Kinnaur Kailash: Viewpoint vs The Sacred Trek",
          text: "Kinnaur Kailash (6,050m) is sacred in both Hindu and Buddhist traditions, celebrated for its 79-foot natural monolith rock that changes colour throughout the day. Please note: The high-altitude pilgrimage trek (Yatra) starts from Tangling village on the opposite side of the Sutlej river gorge and is only permitted in July/August under district administration permits. Kalpa, where KinVatika is located, is the premier scenic and spiritual viewing location across the valley, offering complete panoramic views of the entire massif without undertaking the arduous multi-day trek.",
        },
        {
          title: "KinVatika's exact location & viewpoint distance",
          text: "KinVatika is located in Village Shudharang (2,900m) in the Kalpa area. From our rooftop terrace and east-facing balconies, you look directly across at the Kailash range. The official Kalpa Kinnaur Kailash Viewpoint is just 1.5 km (a 5-minute drive or 20-minute walk) up the road.",
        },
        {
          title: "Best seasons for Kinnaur Kailash Darshan",
          text: "Autumn (September to November) provides the clearest skies with zero haze, making the peak visible in sharp, breathtaking relief. April to June offers massive snow cover on the summit with comfortable valley weather. In winter (December to February), the mountain is cloaked in deep snow and visible on clear blue winter mornings.",
        },
        {
          title: "Respectful Himalayan Tourism",
          text: "Kinnaur Kailash is deeply revered by the local Kinnauri population as the winter abode of Lord Shiva. Travellers are encouraged to experience the spiritual serenity respectfully, maintain peaceful quiet on the viewing terraces, and keep the pristine mountain surroundings clean.",
        },
      ]}
      ctaTitle="Book a stay near Kinnaur Kailash"
      ctaText="Experience the mountains in calm, comfortable rooms with a warm family welcome in Kalpa."
      ctaMessage="Hello KinVatika Homestay! I would like to stay near Kinnaur Kailash and want to know about availability."
    />
  );
}
