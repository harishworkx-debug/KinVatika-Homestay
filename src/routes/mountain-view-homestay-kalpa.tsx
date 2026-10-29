import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import heroTerrace from "../assets/kinvatika-views14.png";

export const Route = createFileRoute("/mountain-view-homestay-kalpa")({
  head: () => ({
    meta: [
      { title: "Mountain View Homestay in Kalpa | KinVatika Homestay" },
      {
        name: "description",
        content:
          "Wake to direct sunrise views of the sacred Kinnaur Kailash (6,050m) and Jorkanden massif from your bed, private balcony and open terrace at KinVatika Homestay in Kalpa.",
      },
      { property: "og:title", content: "Mountain View Homestay in Kalpa | KinVatika" },
      {
        property: "og:description",
        content:
          "Panoramic Kinnaur Kailash massif view, golden alpenglow at dawn, private balcony rooms and apple orchard setting in Kalpa.",
      },
      {
        property: "og:url",
        content: "https://www.kinvatikahomestay.com/mountain-view-homestay-kalpa",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.kinvatikahomestay.com/mountain-view-homestay-kalpa" },
    ],
  }),
  component: MountainViewHomestayKalpa,
});

function MountainViewHomestayKalpa() {
  return (
    <LocationPage
      image={heroTerrace}
      alt="Mountain view homestay in Kalpa with Kinnaur Kailash skyline"
      eyebrow="Panoramic Himalayan Views"
      title="Mountain View Homestay in Kalpa"
      subtitle="Direct panoramic view of the 6,050m Kinnaur Kailash range from private balconies, bedrooms, and the open rooftop terrace."
      intro="For photographers, writers, and mountain lovers, the view is the journey. Positioned on an open hillside ridge in Village Shudharang at 2,900 metres, KinVatika Homestay looks directly across the Sutlej river gorge toward the sacred Kinnaur Kailash (6,050m) and Jorkanden (6,473m) peaks. When visibility is clear, the snow-draped massifs change colour from soft violet to fiery gold before breakfast—a spectacle you can witness without ever leaving your warm quilt."
      features={[
        "Unobstructed 180° views of the Kinnaur Kailash and Jorkanden range",
        "East-facing private balconies positioned for dawn golden hour light",
        "Expansive open rooftop terrace for 360° valley & peak photography",
        "High-altitude star gazing with near-zero village light pollution",
        "Large soundproof glass windows framing snow peaks from the bed",
        "Outdoor tea & breakfast seating facing the Himalayan ridge",
      ]}
      whyStay={[
        "The Magic of Alpenglow: At sunrise (typically 5:45 AM in summer to 6:45 AM in autumn), the very tip of the Kinnaur Kailash rock formation catches the first ray of sunlight, turning blazing crimson-gold while the valley below remains in deep blue shadow.",
        "Clear Sky Seasons: The clearest mountain view windows are September through November (post-monsoon crystal skies and apple orchards) and April through June (pleasant warmth with heavy snow on the high peaks).",
        "Night Sky & Astrophotography: Village Shudharang has minimal street lighting. On moonless nights, the Milky Way core arches directly over the Kailash massif, making our terrace a dream location for astrophotographers.",
      ]}
      contentSections={[
        {
          title: "Photography Timings & Angles from the Property",
          text: "Sunrise faces the property directly across the eastern valley. Telephoto lenses (70-200mm) capture dramatic close-ups of the 79-foot natural rock Shivling of Kailash, while wide-angle lenses (16-35mm) capture the homestay's apple trees in the foreground with the full Himalayan wall behind.",
        },
        {
          title: "Seasonal Mountain Scenery Guide",
          text: "Autumn (Sept-Nov): Deep royal blue skies, brilliant contrast, and red apples hanging in the orchards. Winter (Dec-March): Kalpa receives heavy snowfall; the homestay and all surrounding pine ridges are blanketed in white. Summer (April-June): Blooming apple blossoms and comfortable daytime terrace weather.",
        },
        {
          title: "Rooms with Direct Mountain Views",
          text: "Both our Deluxe Mountain View Rooms and Balcony Rooms feature large view-facing windows and private sit-out balconies so you can enjoy the Himalayan horizon in total privacy.",
        },
      ]}
      faqs={[
        {
          q: "Is Kinnaur Kailash visible directly from the bedrooms?",
          a: "Yes. Our Deluxe Mountain View Rooms and Balcony Rooms are east-facing and feature large panorama windows specifically designed to frame the Kinnaur Kailash massif from the bed.",
        },
        {
          q: "What is the best time of year for mountain views in Kalpa?",
          a: "September to mid-November offers the most consistently crystal-clear skies with virtually zero haze. April and May are also fantastic with snow-covered peaks and blooming flowers.",
        },
        {
          q: "Can we have breakfast or evening tea on the terrace?",
          a: "Absolutely. Our open terrace has comfortable seating where guests frequently enjoy morning chai and hot parathas facing the sunrise over the peaks.",
        },
      ]}
      relatedLinks={[
        { label: "View Deluxe Mountain View Room", href: "/rooms" },
        { label: "Kinnaur Kailash travel guide", href: "/kinnaur-kailash-travel-guide" },
        { label: "Photo gallery", href: "/gallery" },
        { label: "Best homestay in Kalpa", href: "/homestay-in-kalpa" },
      ]}
      ctaTitle="Wake up to Kinnaur Kailash"
      ctaText="Check room availability for mountain-view rooms and experience the Himalayas at dawn."
      ctaMessage="Hello KinVatika Homestay! I would like to book a mountain-view room with Kinnaur Kailash views."
    />
  );
}
