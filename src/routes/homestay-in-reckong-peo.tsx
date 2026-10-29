import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import homestayExterior from "../assets/kinvatika-views3.png";

export const Route = createFileRoute("/homestay-in-reckong-peo")({
  head: () => ({
    meta: [
      { title: "Homestay Near Reckong Peo | KinVatika Homestay, Kalpa" },
      {
        name: "description",
        content:
          "Looking for a homestay near Reckong Peo? Stay 9 km (20 mins) uphill in peaceful Village Shudharang, Kalpa at KinVatika Homestay with Kinnaur Kailash views, orchard walks and parking.",
      },
      { property: "og:title", content: "Homestay Near Reckong Peo | KinVatika Homestay" },
      {
        property: "og:description",
        content:
          "Escape the market congestion of Reckong Peo. Enjoy panoramic mountain views, home-cooked Himachali meals and quiet apple orchards just 20 minutes away.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/homestay-in-reckong-peo" },
    ],
    links: [
      { rel: "canonical", href: "https://www.kinvatikahomestay.com/homestay-in-reckong-peo" },
    ],
  }),
  component: HomestayInReckongPeo,
});

function HomestayInReckongPeo() {
  return (
    <LocationPage
      image={homestayExterior}
      alt="KinVatika Homestay near Reckong Peo in the Kinnaur valley"
      eyebrow="Stay 20 mins above Reckong Peo"
      title="Homestay Near Reckong Peo, Kinnaur"
      subtitle="The peaceful mountain alternative: stay 9 km above Reckong Peo in Village Shudharang with clear Kinnaur Kailash views."
      intro="Reckong Peo (2,290m) is Kinnaur's bustling commercial hub with the main HRTC bus terminal, fuel pumps, ATMs, and the SDM office for Spiti travel permits. However, most travellers seeking mountain tranquility, fresh orchard air, and iconic Kinnaur Kailash views prefer ascending 9 km uphill to Village Shudharang in Kalpa (2,900m). KinVatika Homestay gives you the best balance: quick 20-minute road access to all town facilities while sleeping in a quiet, wooden Himalayan family home."
      features={[
        "9 km / 20 mins drive from Reckong Peo Bus Stand & Main Market",
        "Direct uphill motorable road accessible for all cars, bikes & SUVs",
        "Local private taxi fare from Peo bus stand: approx. ₹300 – ₹500",
        "Unobstructed Kinnaur Kailash views (often blocked by valley walls in Peo town)",
        "Quiet apple orchard setting away from bus terminal traffic and noise",
        "Free on-site private parking right at the property",
      ]}
      whyStay={[
        "Town vs Mountain Stay: Reckong Peo is a busy administrative town built along steep streets. Shudharang, situated 600 metres higher in elevation, offers open terraces, apple trees, and silence.",
        "Better Sunrise & Peaks: Because of the angle of the Kinnaur Kailash massif, the sacred peaks are viewed most dramatically from the Kalpa/Shudharang ridge, which turns brilliant orange at sunrise.",
        "Convenient Spiti Transit Base: Travellers arriving on long-distance buses from Shimla or Chandigarh can rest in peaceful Kalpa before heading deeper towards Pooh, Nako, and Kaza.",
      ]}
      contentSections={[
        {
          title: "Reckong Peo vs Kalpa: Where should you stay?",
          text: "Reckong Peo is practical for running errands—visiting pharmacies, withdrawing cash from SBI ATMs, vehicle repairs, or collecting Inner Line Permits (ILP). But for holiday stays, couples, and families, staying uphill in Shudharang/Kalpa gives you clean wooden rooms, homemade food, and mountain serenity.",
        },
        {
          title: "How to reach KinVatika from Reckong Peo",
          text: "From Reckong Peo bus stand, take the uphill Kalpa road. The drive takes around 20 to 25 minutes (9 km). Private taxis are available 24/7 at the Peo taxi stand (charging ₹300–₹500). Regular HRTC local buses also run between Peo and Kalpa throughout the day.",
        },
        {
          title: "Inner Line Permits (ILP) in Reckong Peo",
          text: "Indian citizens do not need permits to visit Reckong Peo, Kalpa, or Sangla. Foreign passport holders travelling beyond Jangi towards Spiti Valley (Nako, Tabo, Kaza) must obtain an Inner Line Permit from the District Magistrate / SDM office in Reckong Peo. KinVatika hosts can assist with local guidance.",
        },
      ]}
      faqs={[
        {
          q: "Is KinVatika directly in Reckong Peo town?",
          a: "No, and that is our primary advantage. We are situated 9 km uphill in Village Shudharang, between Reckong Peo and Kalpa village. You get apple orchards and direct Kinnaur Kailash views instead of commercial market noise.",
        },
        {
          q: "How much does a taxi cost from Reckong Peo bus stand to the homestay?",
          a: "Local taxis from the Reckong Peo taxi union generally charge between ₹300 and ₹500 for the one-way uphill drop to Village Shudharang.",
        },
        {
          q: "Can I park my vehicle safely at the homestay?",
          a: "Yes. KinVatika Homestay provides free private parking space on the property premises, making it convenient for private cars and motorcycle tourers.",
        },
      ]}
      relatedLinks={[
        { label: "Best homestay in Kalpa", href: "/homestay-in-kalpa" },
        { label: "Rooms & suites", href: "/rooms" },
        { label: "Things to do in Kalpa", href: "/things-to-do-in-kalpa" },
        { label: "Kalpa travel guide", href: "/kalpa-travel-guide" },
      ]}
      ctaTitle="Stay 20 minutes above Reckong Peo"
      ctaText="Plan your stay in quiet Shudharang with homemade Himachali meals and mountain-facing rooms."
      ctaMessage="Hello KinVatika Homestay! I am travelling via Reckong Peo and would like to book a room in Shudharang."
    />
  );
}
