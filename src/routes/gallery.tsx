import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import heroTerrace from "../assets/hero-terrace-view.png";
import homestayExterior from "../assets/homestay-exterior.png";
import homestaySnow from "../assets/homestay-snow.png";
import homestaySummer from "../assets/homestay-summer.png";
import kinnaurKailash from "../assets/kinnaur-kailash-snow.png";
import deluxeRoom from "../assets/deluxe-room.png";
import familyRoom from "../assets/family-room.png";
import balconyCorridor from "../assets/balcony-corridor.png";
import interiorLobby from "../assets/interior-lobby.png";
import gardenValley from "../assets/garden-valley-view.webp";

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

  const tile = (src: string, alt: string, span: string, delay: number) => (
    <Reveal delay={delay} className={span}>
      <figure
        onClick={() => setActive({ src, alt })}
        className="group h-full cursor-zoom-in overflow-hidden rounded-3xl shadow-soft"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
        />
      </figure>
    </Reveal>
  );

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
          {tile(
            heroTerrace,
            "Panoramic Kinnaur Kailash view from the KinVatika terrace at dusk",
            "col-span-2 row-span-2",
            0,
          )}
          {tile(deluxeRoom, "Deluxe wooden mountain view room", "col-span-1", 0.05)}
          {tile(balconyCorridor, "Marigold-draped balcony corridor", "col-span-1 row-span-2", 0.1)}
          {tile(kinnaurKailash, "Kinnaur Kailash range in winter snow", "col-span-1", 0.15)}
          {tile(familyRoom, "Family suite with traditional Kinnauri rugs", "col-span-1", 0.2)}
          {tile(
            homestaySummer,
            "KinVatika Homestay exterior in summer",
            "col-span-2 row-span-2",
            0.25,
          )}
          {tile(interiorLobby, "Wooden hall with traditional chandelier", "col-span-1", 0.3)}
          {tile(gardenValley, "Garden flowers and the Kinnaur valley below", "col-span-1", 0.35)}
          {tile(homestaySnow, "The homestay after fresh snowfall", "col-span-2", 0.4)}
          {tile(homestayExterior, "Prayer flags and peaks above Kalpa", "col-span-2", 0.45)}
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
