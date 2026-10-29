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
          "Experience genuine Kinnauri village life at KinVatika Homestay in Village Shudharang, Kalpa. Walk through apple orchards, taste local Himachali food and enjoy peaceful mountain living.",
      },
      { property: "og:title", content: "Homestay in Shudharang, Kalpa | KinVatika Homestay" },
      {
        property: "og:description",
        content:
          "Experience authentic village life in Shudharang, Kalpa — apple orchard walks, deodar-panelled rooms and panoramic Himalayan vistas.",
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
      alt="Scenic Shudharang village apple orchards and valley near Kalpa"
      eyebrow="Authentic Kinnauri Village Stay"
      title="Homestay in Village Shudharang, Kalpa"
      subtitle="Experience slow mountain living wrapped in apple orchards, deodar pine forests, and traditional Himalayan hospitality."
      intro="Village Shudharang is a traditional Kinnauri hamlet perched on the hillside between Reckong Peo and Kalpa. Unlike commercial tourist hotel clusters, Shudharang retains its timeless agricultural rhythm—wooden houses with slate roofs, stone pathways winding through lush apple and apricot orchards, and friendly Kinnauri villagers who greet you with genuine warmth. KinVatika Homestay is a real family residence located right in this village, allowing travellers to live as locals rather than merely tourists."
      features={[
        "Located in quiet Village Shudharang away from busy main roads",
        "Wander through private apple and apricot orchards right outside your room",
        "Experience daily Kinnauri agricultural life and village culture",
        "Handmade Himachali meals made with fresh locally grown farm produce",
        "Stone-and-wood Himachali architecture with natural pine fragrance",
        "Direct vehicle road connectivity with dedicated parking in the village",
      ]}
      whyStay={[
        "The Apple Harvest Experience: If you visit between August and October, the orchards of Shudharang are laden with crisp, red Royal Delicious apples. Guests can walk through the trees, learn about high-altitude fruit farming, and taste freshly plucked apples.",
        "Cultural Immersion: Meet local Kinnauri elders, observe traditional Kinnauri caps (Thepang) being woven, and learn about the unique syncretic Hindu-Buddhist traditions practiced in the valley.",
        "Restorative Silence: Sleep with windows open to the gentle mountain breeze and wake up to the song of Himalayan whistling thrushes instead of traffic horns.",
      ]}
      contentSections={[
        {
          title: "About Village Shudharang",
          text: "Shudharang is located in Tehsil Reckong Peo, District Kinnaur (PIN 172107). Situated at roughly 2,800 to 2,900 metres, it offers fertile terrace farming, clean natural mountain springs, and exceptional sunrise views across to Kinnaur Kailash.",
        },
        {
          title: "Seasonal Village Highlights",
          text: "Spring (April-May): White apple blossoms blanket the entire hillside. Summer (June-July): Pleasant green canopy and valley walks. Autumn (August-October): Vibrant apple harvest and golden walnut leaves. Winter (December-February): Quiet snow-covered village evenings around the family heater.",
        },
        {
          title: "Home-Cooked Village Flavours",
          text: "Our family prepares authentic local recipes including Siddu (steamed walnut/poppy seed stuffed bread served with pure desi ghee), local rajma with Kinnauri red rice, and mountain herbal chai infused with local spices.",
        },
      ]}
      faqs={[
        {
          q: "How far is Village Shudharang from Kalpa main village?",
          a: "Shudharang is approximately 2 km (a gentle 5 to 7-minute drive) below the central market of Kalpa village.",
        },
        {
          q: "Is there proper road access to the homestay in Shudharang?",
          a: "Yes. KinVatika Homestay has direct paved motorable road access right up to the property, with dedicated on-site parking.",
        },
        {
          q: "Can guests take walks inside the apple orchards?",
          a: "Yes. The homestay is surrounded by family-owned apple orchards where guests are welcome to take gentle morning and evening walks.",
        },
      ]}
      relatedLinks={[
        { label: "Best homestay in Kalpa", href: "/homestay-in-kalpa" },
        { label: "Dining & Himachali food", href: "/dining" },
        { label: "Kinnaur stay experience", href: "/experience" },
        { label: "Homestay near Reckong Peo", href: "/homestay-in-reckong-peo" },
      ]}
      ctaTitle="Experience village life in Shudharang"
      ctaText="Book your stay at KinVatika Homestay and experience the quiet beauty of a Kinnauri mountain home."
      ctaMessage="Hello KinVatika Homestay! I would like to experience village life in Shudharang and book a stay."
    />
  );
}
