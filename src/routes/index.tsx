import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Phone, MapPin, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Mountain,
  Wifi,
  Car,
  Flower2,
  Sun,
  Shirt,
  Dog,
  Flame,
  Sparkles,
  Users,
  DoorOpen,
  Leaf,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { BookingForm } from "@/components/site/BookingForm";
import { ADDRESS, PHONE, PHONE_TEL, enquiryLink, whatsappLink } from "@/lib/contact";

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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KinVatika Homestay — Best Homestay in Kalpa, Kinnaur" },
      {
        name: "description",
        content:
          "Wake up to 360° Kinnaur Kailash views at KinVatika Homestay, Village Shudharang, Kalpa. Family suites, private balconies, homemade Himachali food. Book direct on WhatsApp.",
      },
      { property: "og:title", content: "KinVatika Homestay — Boutique Stay in Kalpa, Kinnaur" },
      {
        property: "og:description",
        content:
          "A peaceful Himalayan home with 360° views of Kinnaur Kailash. Mountain-view rooms, homemade meals and warm Kinnauri hospitality.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Where is KinVatika Homestay located?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "KinVatika Homestay is in Village Shudharang, Post Office & Tehsil Reckong Peo, Kalpa, Himachal Pradesh 172107 — minutes from Kalpa village and the Kinnaur Kailash viewpoint.",
              },
            },
            {
              "@type": "Question",
              name: "How do I book a room at KinVatika Homestay?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Booking is direct. Send your dates on WhatsApp at +91 99534 93171 or call the same number for the best available price.",
              },
            },
            {
              "@type": "Question",
              name: "Is food available at the homestay?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Homemade Himachali meals, fresh Indian and continental breakfast, and vegetarian options are served, often on the open terrace.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.img
          src={heroTerrace}
          alt="Sunrise over the Kinnaur Kailash range from the terrace of KinVatika Homestay, Kalpa"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.img
          src={homestaySnow}
          alt="KinVatika Homestay under fresh Kalpa snowfall"
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 18, times: [0, 0.32, 0.42, 0.62, 0.72], repeat: Infinity }}
        />
        <motion.img
          src={homestaySummer}
          alt="KinVatika Homestay in summer with snow peaks behind"
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 18, times: [0, 0.68, 0.78, 0.92, 1], repeat: Infinity }}
        />
      </motion.div>
      <div className="hero-overlay absolute inset-0" />

      <motion.div
        className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10"
      >
        <motion.p
          className="eyebrow text-gold"
        >
          Village Shudharang · Kalpa · Kinnaur
        </motion.p>
        <motion.h1
          className="mt-5 max-w-4xl text-5xl leading-[1.02] text-snow text-balance-tight sm:text-7xl lg:text-[5.2rem]"
        >
          Wake Up to the Sacred Kinnaur Kailash Peaks.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-snow/85 sm:text-lg"
        >
          A peaceful Himalayan home wrapped in apple orchards — 360° mountain views, warm wooden
          rooms and food cooked the way a Kinnauri family cooks for its own.
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap gap-3"
        >
          <a
            href={enquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[0.75rem] tracking-widest text-charcoal uppercase transition hover:brightness-105 hover:shadow-lift"
          >
            <FaWhatsapp className="text-lg" /> Book on WhatsApp
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="glass-dark inline-flex items-center gap-2 rounded-full px-8 py-4 text-[0.75rem] tracking-widest text-snow uppercase transition hover:bg-snow/15"
          >
            <Phone size={15} /> Call Now
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-snow/70 sm:flex"
      >
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}

const amenities = [
  { icon: Mountain, label: "360° Mountain Views" },
  { icon: DoorOpen, label: "Private Balcony" },
  { icon: Users, label: "Family Rooms" },
  { icon: Wifi, label: "Free High-Speed Wi-Fi" },
  { icon: Car, label: "Free Parking" },
  { icon: Flower2, label: "Garden Lounge" },
  { icon: Sun, label: "Outdoor Terrace" },
  { icon: Shirt, label: "Laundry Service" },
  { icon: Dog, label: "Pet Friendly" },
  { icon: Flame, label: "Room Heating" },
  { icon: Sparkles, label: "Daily Housekeeping" },
  { icon: Leaf, label: "Peaceful Environment" },
];

function Home() {
  return (
    <>
      <Hero />

      {/* Welcome */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-pine">Welcome to KinVatika</p>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              A quiet wooden home at 2,900 metres, held between orchards and snow.
            </h2>
            <p className="mt-6 text-[0.95rem] leading-loose text-muted-foreground">
              KinVatika is a family-run boutique homestay in Village Shudharang, just above Reckong
              Peo. Mornings begin with the first light striking Kinnaur Kailash, afternoons drift
              through the apple orchard, and evenings settle around hot food and a bonfire under an
              impossibly clear sky.
            </p>
            <p className="mt-4 text-[0.95rem] leading-loose text-muted-foreground">
              Every room is hand-finished in Himachali deodar wood, every meal is cooked in our own
              kitchen, and every guest leaves as family.
            </p>
            <div className="mt-9 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-display text-4xl text-pine">360°</p>
                <p className="mt-1 text-xs text-muted-foreground">Himalayan views</p>
              </div>
              <div>
                <p className="font-display text-4xl text-pine">4.9</p>
                <p className="mt-1 text-xs text-muted-foreground">Guest rating</p>
              </div>
              <div>
                <p className="font-display text-4xl text-pine">2,960m</p>
                <p className="mt-1 text-xs text-muted-foreground">Above sea level</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
            <img
              src={homestaySummer}
              alt="KinVatika Homestay exterior in summer with Kinnaur Kailash behind"
              loading="lazy"
              className="col-span-2 h-72 w-full rounded-3xl object-cover shadow-soft sm:h-96"
            />
            <img
              src={interiorLobby}
              alt="Wooden interior lobby of KinVatika Homestay with traditional chandelier"
              loading="lazy"
              className="h-56 w-full rounded-3xl object-cover shadow-soft"
            />
            <img
              src={gardenValley}
              alt="Garden and valley view from KinVatika Homestay, Kalpa"
              loading="lazy"
              className="h-56 w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-pine">Why Choose Us</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Small in size. Generous in every detail.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Uninterrupted Kailash views",
                d: "Balconies and terraces face the range directly — sunrise on the peaks arrives before your tea does.",
              },
              {
                t: "Hosted by a Kinnauri family",
                d: "Not a reception desk. Local stories, trek advice, taxi help and a bonfire arranged the same evening.",
              },
              {
                t: "Homemade mountain food",
                d: "Siddu, rajma-chawal, local apples and fresh breakfast — cooked in our kitchen with local produce.",
              },
              {
                t: "Warm rooms all winter",
                d: "Deodar-panelled rooms with heating, thick quilts and hot water even in deep snowfall.",
              },
              {
                t: "Genuinely family friendly",
                d: "Spacious family suites, safe garden space for children, and pets are welcome too.",
              },
              {
                t: "Best price, booked direct",
                d: "No agents, no commission. One WhatsApp message gets you our lowest available rate.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06}>
                <div className="h-full rounded-3xl bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                  <p className="font-display text-2xl text-forest">{c.t}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms showcase */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow text-pine">Rooms &amp; Family Suites</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Wooden rooms that open to the mountains</h2>
          </div>
          <Link
            to="/rooms"
            className="rounded-full border border-pine px-7 py-3 text-[0.72rem] tracking-widest text-pine uppercase transition hover:bg-pine hover:text-snow"
          >
            View all rooms
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <Reveal>
            <article className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
              <div className="overflow-hidden">
                <img
                  src={deluxeRoom}
                  alt="Deluxe mountain view room with wooden panelling at KinVatika Homestay"
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl">Deluxe Mountain View Room</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Deodar-panelled walls, a king bed and a window that frames the snow line at dawn.
                </p>
                <p className="mt-4 text-xs tracking-wide text-pine">
                  Mountain view · Heating · Smart TV · Wi-Fi
                </p>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
              <div className="overflow-hidden">
                <img
                  src={familyRoom}
                  alt="Family suite with large bed and traditional Kinnauri rugs"
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl">Family Suite</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Generous space for four, warm rugs underfoot and extra quilts for cold Kalpa
                  nights.
                </p>
                <p className="mt-4 text-xs tracking-wide text-pine">
                  Family friendly · Private bathroom · Kettle
                </p>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.16}>
            <article className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
              <div className="overflow-hidden">
                <img
                  src={balconyCorridor}
                  alt="Sunlit private balcony corridor at KinVatika Homestay in Kalpa"
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl">Balcony Room</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Step straight out to a marigold-draped balcony with valley light all afternoon.
                </p>
                <p className="mt-4 text-xs tracking-wide text-pine">
                  Private balcony · Valley view · Wi-Fi
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* 360 view parallax */}
      <ParallaxStatement />

      {/* Hospitality + Dining */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={interiorLobby}
              alt="Traditional Himachali wooden interiors at KinVatika Homestay"
              loading="lazy"
              className="h-[30rem] w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-pine">Traditional Himachali Hospitality</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Received like family, not like a booking</h2>
            <p className="mt-6 text-[0.95rem] leading-loose text-muted-foreground">
              A cup of tea on arrival, a room warmed before you reach it, dinner served when you are
              hungry rather than when a kitchen closes. Our family has lived in Kinnaur for
              generations, and the homestay runs the way our home always has.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-charcoal/80">
              <li>· Welcome tea and local apples</li>
              <li>· Trek, taxi and sightseeing help arranged personally</li>
              <li>· Bonfire evenings on request</li>
              <li>· Late-night arrivals looked after</li>
            </ul>
            <a
              href={whatsappLink(
                "Hello KinVatika! I'd like to know more about the stay experience.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-pine px-8 py-4 text-[0.72rem] tracking-widest text-snow uppercase transition hover:bg-forest"
            >
              <FaWhatsapp /> Get Best Price
            </a>
          </Reveal>
        </div>
      </section>

      {/* Dining */}
      <section className="bg-forest text-snow">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <p className="eyebrow text-gold">Dining Experience</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Homemade Himachali food, served under open sky
            </h2>
            <p className="mt-6 text-[0.95rem] leading-loose text-snow/75">
              Breakfast on the terrace as the peaks turn gold. Simple, generous mountain cooking —
              siddu with ghee, rajma from the valley, fresh rotis, seasonal greens, and continental
              options for early risers heading out on a trek.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-snow/85">
              <p>· Traditional Himachali thali</p>
              <p>· Indian &amp; continental breakfast</p>
              <p>· Pure vegetarian options</p>
              <p>· Local organic ingredients</p>
              <p>· Open terrace dining</p>
              <p>· Evening tea &amp; bonfire snacks</p>
            </div>
            <Link
              to="/dining"
              className="mt-9 inline-block rounded-full border border-snow/40 px-8 py-4 text-[0.72rem] tracking-widest text-snow uppercase transition hover:bg-snow/10"
            >
              Explore dining
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-4">
            <img
              src={gardenValley}
              alt="Terrace garden with flowers overlooking the Kinnaur valley"
              loading="lazy"
              className="h-64 w-full rounded-3xl object-cover"
            />
            <img
              src={heroTerrace}
              alt="Open terrace dining area with panoramic Himalayan views"
              loading="lazy"
              className="h-64 w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Amenities */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-pine">Amenities</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Everything a mountain stay should have</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.03}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-pine/30 hover:shadow-soft">
                <a.icon className="text-pine" size={22} strokeWidth={1.4} />
                <p className="text-sm text-charcoal/85">{a.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Garden & terrace */}
      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <img
              src={balconyCorridor}
              alt="Flower-draped balcony corridor at KinVatika Homestay"
              loading="lazy"
              className="h-[28rem] w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-pine">Garden &amp; Terrace</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Slow hours, high above the valley</h2>
            <p className="mt-6 text-[0.95rem] leading-loose text-muted-foreground">
              Marigolds strung across the balcony, geraniums in stone pots, and a terrace built for
              doing absolutely nothing. Read, photograph the light moving across the range, or wait
              for the stars — there is very little light pollution here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Kinnaur culture / experience */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-pine">Kinnaur Experience</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Live the valley, not just visit it</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Kinnaur Kailash sunrise",
            "Apple orchard walks",
            "Village trails & temples",
            "Local Kinnauri festivals",
            "Bonfire & star gazing",
          ].map((t, i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border/70 bg-card px-6 py-8 text-center transition hover:-translate-y-1.5 hover:shadow-soft">
                <p className="font-display text-xl text-forest">{t}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-10 text-center">
          <Link
            to="/experience"
            className="rounded-full border border-pine px-8 py-4 text-[0.72rem] tracking-widest text-pine uppercase transition hover:bg-pine hover:text-snow"
          >
            The Kinnaur story
          </Link>
        </Reveal>
      </section>

      {/* Nearby attractions preview */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow text-pine">Nearby Attractions</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Everything worth seeing is minutes away</h2>
          </div>
          <Link
            to="/attractions"
            className="rounded-full border border-pine px-7 py-3 text-[0.72rem] tracking-widest text-pine uppercase transition hover:bg-pine hover:text-snow"
          >
            All attractions
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Reveal>
            <article className="group overflow-hidden rounded-3xl bg-card shadow-soft">
              <img
                src={kinnaurKailash}
                alt="Kinnaur Kailash viewpoint near Kalpa in winter snow"
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="p-7">
                <h3 className="text-2xl">Kinnaur Kailash Viewpoint</h3>
                <p className="mt-2 text-xs tracking-widest text-gold uppercase">
                  1.5 km · 5 min drive
                </p>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="group overflow-hidden rounded-3xl bg-card shadow-soft">
              <img
                src={homestayExterior}
                alt="Traditional houses of Kalpa village against the Himalayas"
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="p-7">
                <h3 className="text-2xl">Kalpa Village</h3>
                <p className="mt-2 text-xs tracking-widest text-gold uppercase">
                  2 km · 7 min drive
                </p>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.16}>
            <article className="group overflow-hidden rounded-3xl bg-card shadow-soft">
              <img
                src={gardenValley}
                alt="Valley road towards Roghi village and Suicide Point"
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="p-7">
                <h3 className="text-2xl">Suicide Point, Roghi</h3>
                <p className="mt-2 text-xs tracking-widest text-gold uppercase">
                  7 km · 20 min drive
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-pine">Gallery</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Moments from KinVatika</h2>
            </div>
            <Link
              to="/gallery"
              className="rounded-full border border-pine px-7 py-3 text-[0.72rem] tracking-widest text-pine uppercase transition hover:bg-pine hover:text-snow"
            >
              Full gallery
            </Link>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Reveal className="overflow-hidden rounded-2xl">
              <img
                src={homestaySnow}
                alt="KinVatika Homestay covered in snow"
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-[1200ms] hover:scale-110"
              />
            </Reveal>
            <Reveal delay={0.05} className="overflow-hidden rounded-2xl">
              <img
                src={deluxeRoom}
                alt="Wooden deluxe room interior"
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-[1200ms] hover:scale-110"
              />
            </Reveal>
            <Reveal delay={0.1} className="overflow-hidden rounded-2xl">
              <img
                src={heroTerrace}
                alt="Panoramic terrace view of the Himalayas at dusk"
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-[1200ms] hover:scale-110"
              />
            </Reveal>
            <Reveal delay={0.15} className="overflow-hidden rounded-2xl">
              <img
                src={familyRoom}
                alt="Family room with traditional rugs"
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-[1200ms] hover:scale-110"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-pine">Guest Testimonials</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Loved by families and slow travellers</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "Ananya Sharma",
              c: "Delhi",
              r: "We opened the curtains and Kinnaur Kailash was just there. The family looked after our parents so warmly — the food was the highlight.",
            },
            {
              n: "Rohit Menon",
              c: "Bengaluru",
              r: "Spotless rooms, proper heating during snowfall, and the best rajma-chawal I've had in the mountains. Booked direct on WhatsApp in two minutes.",
            },
            {
              n: "Priya & Karan",
              c: "Chandigarh",
              r: "The terrace at sunrise is unreal. Peaceful, clean, genuinely hospitable hosts. We're already planning our next stay.",
            },
          ].map((t, i) => (
            <Reveal key={t.n} delay={i * 0.08}>
              <figure className="h-full rounded-3xl bg-card p-8 shadow-soft">
                <div className="flex gap-1 text-gold">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-charcoal/80">
                  “{t.r}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-xl text-forest">{t.n}</p>
                  <p className="text-xs text-muted-foreground">{t.c}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
          <Reveal className="text-center">
            <p className="eyebrow text-pine">FAQ</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Good to know before you arrive</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="1">
                <AccordionTrigger className="text-left text-lg">
                  Where exactly is KinVatika Homestay?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Village Shudharang, Post Office &amp; Tehsil Reckong Peo, Kalpa, Himachal Pradesh
                  172107 — a short drive above Reckong Peo and minutes from Kalpa village.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionTrigger className="text-left text-lg">How do I book?</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Send your dates on WhatsApp to +91 99534 93171 or call the same number. Booking
                  direct always gets you our best rate.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="3">
                <AccordionTrigger className="text-left text-lg">
                  Is the homestay open during winter snowfall?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Yes. Rooms are heated, hot water is available, and Kalpa under snow is the most
                  beautiful time to visit. Please confirm road conditions with us before travelling.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="4">
                <AccordionTrigger className="text-left text-lg">
                  Is food included and are pets allowed?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Homemade meals are available on request; breakfast packages can be added to your
                  booking. Well-behaved pets are welcome — just tell us in advance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="5">
                <AccordionTrigger className="text-left text-lg">
                  How do we reach Kalpa?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Buses and taxis run from Shimla to Reckong Peo (approx. 8–9 hours), and Kalpa is
                  30 minutes further uphill. We can help arrange a local pick-up.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      {/* Booking + map + contact */}
      <section id="book" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <BookingForm />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title="KinVatika Homestay location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.815070326996!2d78.26684691086572!3d31.529238746596917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39066be07a9c1afb%3A0x5918595e708e7dd7!2sKinVatika%20Homestay!5e0!3m2!1sen!2sin!4v1785674790117!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-3xl bg-card p-8 shadow-soft">
              <p className="eyebrow text-gold">Contact</p>
              <div className="mt-5 space-y-4 text-sm">
                <p className="flex gap-3 text-charcoal/80">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-pine" />
                  {ADDRESS}
                </p>
                <p className="flex gap-3 text-charcoal/80">
                  <Phone size={16} className="mt-0.5 shrink-0 text-pine" />
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-pine">
                    {PHONE}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ParallaxStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative h-[85vh] min-h-[520px] overflow-hidden">
      <motion.img
        style={{ y, scale: 1.2 }}
        src={kinnaurKailash}
        alt="Snow covered Kinnaur Kailash range seen from Kalpa at dawn"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative flex h-full items-center justify-center px-6">
        <Reveal className="max-w-3xl text-center">
          <p className="eyebrow text-gold">360° Mountain View Experience</p>
          <h2 className="mt-6 text-4xl leading-tight text-snow text-balance-tight sm:text-6xl">
            The peaks change colour six times before breakfast. You only have to look up.
          </h2>
          <a
            href={enquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-snow/95 px-8 py-4 text-[0.72rem] tracking-widest text-charcoal uppercase transition hover:bg-snow"
          >
            <FaWhatsapp className="text-lg" /> Check Availability
          </a>
        </Reveal>
      </div>
    </section>
  );
}
