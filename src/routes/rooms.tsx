import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { PHONE_TEL, whatsappLink } from "@/lib/contact";
import deluxeRoom from "../assets/DeluxeMountainViewRoom.png";
import familyRoom from "../assets/family-room.png";
import balconyCorridor from "../assets/BalconyRoom.png";
import interiorLobby from "../assets/kinvatika-views2.png";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Family Suites | KinVatika Homestay, Kalpa" },
      {
        name: "description",
        content:
          "Mountain view rooms and family suites at KinVatika Homestay, Kalpa — private balconies, heating, smart TV, free Wi-Fi and Kinnaur Kailash views. Book on WhatsApp.",
      },
      { property: "og:title", content: "Rooms & Family Suites — KinVatika Homestay" },
      {
        property: "og:description",
        content: "Wooden mountain-view rooms and family suites in Kalpa, Kinnaur.",
      },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: Rooms,
});

const features = [
  "Mountain View",
  "Private Balcony",
  "Family Friendly",
  "Room Heating",
  "Smart TV",
  "Free Wi-Fi",
  "Electric Kettle",
  "Private Bathroom",
];

function RoomCard({
  image,
  alt,
  name,
  desc,
  reverse,
}: {
  image: string;
  alt: string;
  name: string;
  desc: string;
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <article
        className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>figure]:order-2" : ""}`}
      >
        <figure className="group overflow-hidden rounded-3xl shadow-soft">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-[26rem] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
          />
        </figure>
        <div>
          <h2 className="text-4xl">{name}</h2>
          <p className="mt-5 text-[0.95rem] leading-loose text-muted-foreground">{desc}</p>
          <ul className="mt-7 grid grid-cols-2 gap-2 text-sm text-charcoal/80">
            {features.map((f) => (
              <li key={f}>· {f}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(
                `Hello KinVatika Homestay! I'd like to book the ${name}. Please share availability and best price.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3.5 text-[0.72rem] tracking-widest text-snow uppercase transition hover:bg-forest hover:shadow-lift"
            >
              <FaWhatsapp /> Book on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-pine px-7 py-3.5 text-[0.72rem] tracking-widest text-pine uppercase transition hover:bg-pine hover:text-snow"
            >
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Rooms() {
  return (
    <>
      <PageHero
        image={deluxeRoom}
        alt="Deluxe wooden room at KinVatika Homestay, Kalpa"
        eyebrow="Rooms & Family Suites"
        title="Warm wood, thick quilts, and a window full of mountains."
        subtitle="Every room at KinVatika faces light and view — with heating, hot water and a balcony or terrace to step out onto."
      />

      <div className="mx-auto max-w-7xl space-y-28 px-6 py-24 lg:px-10 lg:py-32">
        <RoomCard
          image={deluxeRoom}
          alt="Deluxe mountain view room with deodar wood panelling"
          name="Deluxe Mountain View Room"
          desc="Our signature room: king bed, hand-finished deodar walls, a woven ceiling and windows angled toward the Kinnaur Kailash range. Ideal for couples and photographers who want the first light."
        />
        <RoomCard
          reverse
          image={familyRoom}
          alt="Family suite with large bed and traditional Kinnauri rugs"
          name="Family Suite with Balcony"
          desc="Space for a family of four, layered rugs, extra quilts and a sunny window seat. Children have room to play and grandparents have a bed that's easy to reach — with the balcony just outside."
        />
        <RoomCard
          image={balconyCorridor}
          alt="Sunlit balcony corridor with marigold garlands"
          name="Traditional Kinnauri Balcony Room"
          desc="Opens directly onto the flower-draped balcony corridor. Afternoon sun, valley air, and the sound of the village going quietly about its day."
        />
        <RoomCard
          reverse
          image={interiorLobby}
          alt="Wooden hall and lounge area of the homestay"
          name="Shared Lounge & Common Areas"
          desc="A warm wooden hall for evening chai, board games and travel planning — plus the garden lounge and open terrace available to every guest."
        />
      </div>

      <CtaBand
        title="Reserve Your Stay"
        message="Hello KinVatika Homestay! I'd like to reserve a room. Please share availability."
      />
    </>
  );
}
