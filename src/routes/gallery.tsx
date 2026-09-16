import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import heroTerrace from "../assets/kinvatika-views14.png";
import homestayExterior from "../assets/kinvatika-views3.png";
import homestaySnow from "../assets/kinvatika-views12.png";
import homestaySummer from "../assets/kinvatika-views10.png";
import kinnaurKailash from "../assets/Kinnaur Kailash Viewpoint.png";
import deluxeRoom from "../assets/DeluxeMountainViewRoom.png";
import familyRoom from "../assets/family-room.png";
import balconyCorridor from "../assets/BalconyRoom.png";
import interiorLobby from "../assets/kinvatika-views2.png";
import gardenValley from "../assets/kinvatika-gardan.png";
import galleryImage1 from "../assets/gallery.png";
import galleryImage2 from "../assets/gallery1.png";
import galleryImage3 from "../assets/gallery2.png";
import galleryImage4 from "../assets/gallery3.png";
import galleryImage5 from "../assets/gallery5.png";
import galleryImage6 from "../assets/gallery6.png";
import galleryImage7 from "../assets/gallery7.png";
import galleryImage8 from "../assets/gallery8.png";
import galleryImage9 from "../assets/gallery9.png";
import galleryImage10 from "../assets/gallery10.png";
import galleryImage11 from "../assets/gallery11.png";
import garden4 from "../assets/garden4.png";
import foodImage from "../assets/food.png";
import foodImage1 from "../assets/food1.png";

const valleyImage = new URL("../assets/KalpaVillage.png", import.meta.url).href;
const suicidePoint = new URL("../assets/SuicidePoint,Roghi.png", import.meta.url).href;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | KinVatika Homestay, Kalpa, Kinnaur" },
      {
        name: "description",
        content:
          "Photo gallery of KinVatika Homestay — rooms, balconies, garden, terrace views, snowfall in Kalpa and the Kinnaur Kailash range.",
      },
      { property: "og:title", content: "Gallery — KinVatika Homestay, Kalpa" },
      {
        property: "og:description",
        content: "Rooms, balconies, gardens and Himalayan views at KinVatika Homestay.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  const galleryTiles = [
    { src: heroTerrace, alt: "Panoramic Kinnaur Kailash view from the KinVatika terrace at dusk", span: "col-span-2 row-span-2", delay: 0 },
    { src: deluxeRoom, alt: "Deluxe wooden mountain view room", span: "col-span-1", delay: 0.05 },
    { src: balconyCorridor, alt: "Marigold-draped balcony corridor", span: "col-span-1 row-span-2", delay: 0.1 },
    { src: kinnaurKailash, alt: "Kinnaur Kailash range in winter snow", span: "col-span-1", delay: 0.15 },
    { src: familyRoom, alt: "Family suite with traditional Kinnauri rugs", span: "col-span-1", delay: 0.2 },
    { src: homestaySummer, alt: "KinVatika Homestay exterior in summer", span: "col-span-2 row-span-2", delay: 0.25 },
    { src: interiorLobby, alt: "Wooden hall with traditional chandelier", span: "col-span-1", delay: 0.3 },
    { src: gardenValley, alt: "Garden flowers and the Kinnaur valley below", span: "col-span-1", delay: 0.35 },
    { src: homestaySnow, alt: "The homestay after fresh snowfall", span: "col-span-2", delay: 0.4 },
    { src: homestayExterior, alt: "Prayer flags and peaks above Kalpa", span: "col-span-2", delay: 0.45 },
    { src: galleryImage1, alt: "KinVatika Homestay guest view in Kalpa", span: "col-span-1", delay: 0.5 },
    { src: galleryImage2, alt: "Mountain view landscape around KinVatika Homestay", span: "col-span-1", delay: 0.55 },
    { src: galleryImage3, alt: "Sunlit valley and village scene in Kinnaur", span: "col-span-1", delay: 0.6 },
    { src: galleryImage4, alt: "Welcoming mountain stay in Kinnaur", span: "col-span-1", delay: 0.65 },
    { src: galleryImage5, alt: "Himalayan view and family stay experience", span: "col-span-2", delay: 0.7 },
    { src: galleryImage6, alt: "Moments from KinVatika and mountain life", span: "col-span-1", delay: 0.75 },
    { src: galleryImage7, alt: "Kinnaur balcony view from the property", span: "col-span-1", delay: 0.8 },
    { src: galleryImage8, alt: "Warm guest moments and mountain hospitality", span: "col-span-1", delay: 0.85 },
    { src: galleryImage9, alt: "Mountain route around Kalpa and Kinnaur", span: "col-span-2", delay: 0.9 },
    { src: galleryImage10, alt: "Village and terrace scene in Kinnaur", span: "col-span-1", delay: 0.95 },
    { src: galleryImage11, alt: "Open landscape from KinVatika Homestay", span: "col-span-1", delay: 1 },
    { src: valleyImage, alt: "Kalpa village landscape and mountain valley", span: "col-span-2", delay: 1.05 },
    { src: suicidePoint, alt: "Scenic route near Suicide Point, Roghi", span: "col-span-1", delay: 1.1 },
    { src: garden4, alt: "Garden terrace view from the homestay", span: "col-span-1", delay: 1.15 },
    { src: foodImage, alt: "Traditional food served at KinVatika Homestay", span: "col-span-1", delay: 1.2 },
    { src: foodImage1, alt: "Himalayan food and dining experience", span: "col-span-1", delay: 1.25 },
  ];

  return (
    <>
      <PageHero
        image={homestaySnow}
        alt="KinVatika Homestay in Kalpa under snow"
        eyebrow="Gallery"
        title="Every season looks good from here."
        subtitle="Photographs from our home in Village Shudharang — the rooms, the balconies, the orchard and the peaks."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid auto-rows-[16rem] grid-cols-2 gap-4 lg:grid-cols-4">
          {galleryTiles.map((tile) => (
            <Reveal key={`${tile.src}-${tile.alt}`} delay={tile.delay} className={tile.span}>
              <figure
                onClick={() => setActive({ src: tile.src, alt: tile.alt })}
                className="group h-full cursor-zoom-in overflow-hidden rounded-3xl shadow-soft"
              >
                <img
                  src={tile.src}
                  alt={tile.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-5 backdrop-blur-sm"
          >
            <button
              aria-label="Close image"
              className="absolute top-6 right-6 text-snow/80 hover:text-snow"
              onClick={() => setActive(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35 }}
              src={active.src}
              alt={active.alt}
              className="max-h-[86vh] max-w-full rounded-2xl object-contain shadow-lift"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CtaBand title="Book the view for yourself" />
    </>
  );
}
