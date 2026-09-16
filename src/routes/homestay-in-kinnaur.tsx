import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import homestaySummer from "../assets/kinvatika-views10.png";

export const Route = createFileRoute("/homestay-in-kinnaur")({
  head: () => ({
    meta: [
      { title: "Homestay in Kinnaur | Mountain Stay at KinVatika" },
      {
        name: "description",
        content:
          "Discover a welcoming homestay in Kinnaur with mountain views, family hospitality and easy access to Kalpa, Reckong Peo and the Kinnaur Kailash region.",
      },
      { property: "og:title", content: "Homestay in Kinnaur | KinVatika Homestay" },
      {
        property: "og:description",
        content:
          "A comfortable Kinnaur homestay in the valley, ideal for families and travellers seeking Himalayan peace.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/homestay-in-kinnaur" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/homestay-in-kinnaur" }],
  }),
  component: HomestayInKinnaur,
});

function HomestayInKinnaur() {
  return (
    <LocationPage
      image={homestaySummer}
      alt="KinVatika Homestay in Kinnaur with scenic mountain surroundings"
      eyebrow="Homestay in Kinnaur"
      title="Homestay in Kinnaur"
      subtitle="A calm stay in Kinnaur’s alpine valley, close to Kalpa and the famous Kinnaur Kailash range."
      intro="KinVatika Homestay offers a warm, comfortable base in the Kinnaur valley for guests who want to experience traditional mountain life with modern comfort. The property is located in Village Shudharang, a quiet area near Kalpa and Reckong Peo, making it a practical choice for travellers exploring the district."
      features={[
        "Base for Kinnaur sightseeing and slow travel",
        "Comfortable rooms and welcoming family hospitality",
        "Easy access to village trails, views and local attractions",
        "Fresh homemade meals and local food traditions",
        "Ideal for couples, families and Himalayan road trips",
        "Warm spaces during cold weather and mountain evenings",
      ]}
      whyStay={[
        "Kinnaur is known for alpine beauty, apple orchards, old villages and sacred mountain views. Staying in a family homestay lets you feel the valley rather than simply pass through it.",
        "KinVatika offers a friendly stay with mountain-facing rooms, open terraces and direct access to the region’s best viewpoints and village routes.",
        "The property is especially appealing to travellers looking for an authentic experience, good food and a peaceful place to rest after each day of exploring.",
      ]}
      faqs={[
        { q: "Is KinVatika a homestay in Kinnaur?", a: "Yes. It is located in Shudharang, near Kalpa and within the Kinnaur district, offering a proper homestay experience in the valley." },
        { q: "Is it good for a family stay in Kinnaur?", a: "Yes. Families prefer it for its comfortable rooms, warm hospitality and the quiet environment around the property." },
        { q: "How far is it from Kalpa?", a: "The property is in the Kalpa area, close to the village and prominent viewpoints of Kinnaur Kailash." },
      ]}
      contentSections={[
        { title: "Understanding Kinnaur", text: "Kinnaur is a high-mountain district with apple-growing villages, changing landscapes, old temples and long road journeys between settlements. A family homestay offers a slower way to experience the region than passing through in one day." },
        { title: "Why base yourself near Kalpa?", text: "KinVatika is in Village Shudharang in the Kalpa area, giving guests a peaceful village setting with access to Kalpa, Reckong Peo and nearby sightseeing routes. The property is not located in central Reckong Peo." },
        { title: "What to expect from the stay", text: "Guests can plan around mountain views, orchard surroundings, warm rooms, home-cooked food and locally informed travel advice. Weather and road conditions can change quickly, so flexible planning is useful in Kinnaur." },
        { title: "Food and local hospitality", text: "The family prepares homemade Himachali and Kinnauri-style meals, with vegetarian choices and breakfast arrangements available by request. Ask when booking about the menu, timing and dietary needs." },
        { title: "Planning a Kinnaur road trip", text: "Keep extra time for mountain roads, fuel and weather changes. Kalpa and Reckong Peo are useful points on a wider Kinnaur itinerary, while the hosts can help you plan sensible local excursions." },
      ]}
      relatedLinks={[
        { label: "Best homestay in Kalpa", href: "/homestay-in-kalpa" },
        { label: "Homestay near Reckong Peo", href: "/homestay-in-reckong-peo" },
        { label: "Homestay near Kinnaur Kailash", href: "/homestay-near-kinnaur-kailash" },
        { label: "Things to do in Kalpa", href: "/things-to-do-in-kalpa" },
      ]}
      ctaTitle="Plan your Kinnaur stay"
      ctaText="Tell us your travel dates and we will help you plan a comfortable and memorable stay in the valley."
      ctaMessage="Hello KinVatika Homestay! I am planning a trip to Kinnaur and want to know more about staying with you."
    />
  );
}
