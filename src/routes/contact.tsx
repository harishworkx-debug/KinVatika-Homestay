import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ADDRESS, PHONE, PHONE_TEL, whatsappLink } from "@/lib/contact";
import balconyCorridor from "../assets/homestay-snow.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KinVatika Homestay | Kalpa, Kinnaur — +91 99534 93171" },
      {
        name: "description",
        content:
          "Call or WhatsApp KinVatika Homestay at +91 99534 93171. Village Shudharang, Reckong Peo, Kalpa, Himachal Pradesh 172107. Directions and map inside.",
      },
      { property: "og:title", content: "Contact KinVatika Homestay, Kalpa" },
      {
        property: "og:description",
        content: "Reach us on WhatsApp or phone for direct bookings in Kalpa, Kinnaur.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const field =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/15";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => (f.get(k) as string) || "—";
    const message = [
      "*Enquiry — KinVatika Homestay*",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Message: ${get("message")}`,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <PageHero
        image={balconyCorridor}
        alt="Balcony corridor at KinVatika Homestay in Kalpa"
        eyebrow="Contact"
        title="We're one message away."
        subtitle="Call or WhatsApp us directly — you'll always reach a member of the family, not a call centre."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-card p-8 shadow-soft sm:p-10">
              <p className="eyebrow text-gold">Send an Enquiry</p>
              <h2 className="mt-3 text-3xl">Message us on WhatsApp</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Your details open directly in WhatsApp — no forms lost in an inbox.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <input name="name" required placeholder="Your name" className={field} />
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="Phone number"
                  className={field}
                />
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Your dates, number of guests, questions…"
                  className={field}
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine px-8 py-4 text-[0.75rem] tracking-widest text-snow uppercase transition hover:bg-forest hover:shadow-lift"
                >
                  <FaWhatsapp className="text-lg" /> Send on WhatsApp
                </button>
                {sent && (
                  <p className="text-center text-xs text-pine">
                    WhatsApp opened with your message. If it didn&apos;t, please allow pop-ups.
                  </p>
                )}
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="rounded-3xl bg-card p-8 shadow-soft">
              <p className="eyebrow text-gold">Reach Us</p>
              <div className="mt-5 space-y-5 text-sm">
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
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={whatsappLink("Hello KinVatika Homestay! I have a question about my stay.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 text-[0.72rem] tracking-widest text-snow uppercase"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-pine px-6 py-3 text-[0.72rem] tracking-widest text-pine uppercase"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title="KinVatika Homestay location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.815070326996!2d78.26684691086572!3d31.529238746596917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39066be07a9c1afb%3A0x5918595e708e7dd7!2sKinVatika%20Homestay!5e0!3m2!1sen!2sin!4v1785674790117!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
