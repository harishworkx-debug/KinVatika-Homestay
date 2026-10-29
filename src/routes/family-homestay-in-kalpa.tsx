import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import familyRoom from "../assets/family-room.png";

export const Route = createFileRoute("/family-homestay-in-kalpa")({
  head: () => ({
    meta: [
      { title: "Family Homestay in Kalpa, Kinnaur | KinVatika Homestay" },
      {
        name: "description",
        content:
          "Planning a family trip to Kalpa? KinVatika Homestay offers spacious Family Suites (sleeps 4), safe garden spaces for kids, fresh home-cooked meals, room heaters and senior-friendly care.",
      },
      { property: "og:title", content: "Family Homestay in Kalpa | KinVatika Homestay" },
      {
        property: "og:description",
        content:
          "Spacious family rooms, home-cooked Himachali meals, safe orchard garden and personal family hospitality in Kalpa, Kinnaur.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/family-homestay-in-kalpa" },
    ],
    links: [
      { rel: "canonical", href: "https://www.kinvatikahomestay.com/family-homestay-in-kalpa" },
    ],
  }),
  component: FamilyHomestayInKalpa,
});

function FamilyHomestayInKalpa() {
  return (
    <LocationPage
      image={familyRoom}
      alt="Family suite with wooden interiors at KinVatika Homestay in Kalpa"
      eyebrow="Family Vacation in Kalpa"
      title="Family Homestay in Kalpa, Kinnaur"
      subtitle="Spacious family suites, safe orchard lawns, warm homemade meals and personal hospitality for all generations."
      intro="Travelling to high-altitude Kinnaur with children or elderly parents requires thoughtful hospitality, reliable heating, and comfortable living spaces. At KinVatika Homestay, our dedicated Family Suites accommodate up to 4 adults comfortably with large king-size bedding, extra thermal quilts, and attached western bathrooms with 24/7 geyser hot water. From child-friendly non-spicy meals to safe garden lawns for children to play, we ensure your family feels completely looked after."
      features={[
        "Spacious Family Suites with King Bed + Extra Double Bedding (Sleeps 4)",
        "24/7 Geyser Hot Water & Room Heating for cold Kalpa nights",
        "Safe, enclosed apple orchard garden where children can play freely",
        "Kid-friendly and senior-friendly freshly prepared home-cooked meals",
        "Easy stair access and ground-floor room options for elderly family members",
        "Personal medical assistance and local doctor contacts in nearby Peo",
      ]}
      whyStay={[
        "Peace of Mind for Parents: Unlike commercial hotels along noisy highways, our homestay is located on a quiet village lane inside an apple orchard. Children can explore nature without highway traffic hazards.",
        "Customized Home Cooking: Need warm boiled milk for toddlers, non-spicy khichdi, or mild parathas? Our family kitchen is happy to prepare customized meals suited to your family's dietary needs.",
        "Multigenerational Comfort: With comfortable seating, valley balconies, and board games, grandparents can relax on the sunlit terrace with panoramic Kinnaur Kailash views while children enjoy the outdoors.",
      ]}
      contentSections={[
        {
          title: "Family Room Specifications & Bedding",
          text: "Our Family Suite features premium deodar wood panelling for natural thermal insulation, a king-size bed with orthopedic mattresses, an extra bed setup, private attached washroom, smart TV, electric kettle for warm water and baby formula, and private balcony seating.",
        },
        {
          title: "Altitude & Weather Tips for Kids and Elders",
          text: "Kalpa sits at approximately 2,900 metres (9,500 feet). While acute mountain sickness is uncommon here, we recommend keeping children hydrated, dressing in layers (thermals + fleece jacket), and carrying routine pediatric medicines. In winter, our electric room heaters keep the bedrooms cozy and comfortable.",
        },
        {
          title: "Easy Family Sightseeing from the Homestay",
          text: "Avoid tiring day-long road journeys. Kalpa village, the ancient Narayan Nagini wooden temple, and scenic Suicide Point Roghi are all within a gentle 5 to 20-minute drive, making them easy and unhurried day trips for kids and seniors.",
        },
      ]}
      faqs={[
        {
          q: "How many guests can stay in the Family Suite?",
          a: "The Family Suite comfortably accommodates up to 4 adults (or 2 adults with 2 children). Extra mattresses and quilts can be arranged on request.",
        },
        {
          q: "Are baby food and warm milk available?",
          a: "Yes. Our home kitchen can provide fresh boiled cow milk, plain porridge, boiled eggs, khichdi, and customized non-spicy meals for young children.",
        },
        {
          q: "Is the property suitable for elderly guests?",
          a: "Yes. We have easily accessible rooms with minimal steps, western flush toilets, round-the-clock hot water geysers, and room heating available during cold weather.",
        },
      ]}
      relatedLinks={[
        { label: "View all rooms & suites", href: "/rooms" },
        { label: "Homestay in Kalpa", href: "/homestay-in-kalpa" },
        { label: "Things to do in Kalpa with family", href: "/things-to-do-in-kalpa" },
        { label: "Guest reviews", href: "/reviews" },
      ]}
      ctaTitle="Plan your family holiday in Kalpa"
      ctaText="Connect directly with our host family on WhatsApp to check Family Suite availability and direct rates."
      ctaMessage="Hello KinVatika Homestay! We are planning a family trip to Kalpa. Please share Family Suite availability and rates."
    />
  );
}
