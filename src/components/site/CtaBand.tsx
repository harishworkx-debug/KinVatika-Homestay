import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_TEL, whatsappLink } from "@/lib/contact";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Plan Your Kinnaur Trip",
  text = "Message KinVatika for current room availability, direct rates and help planning your stay.",
  message = "Hello KinVatika Homestay! Please share your current direct rate and availability.",
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="bg-pine">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center">
        <p className="eyebrow text-gold">Direct Booking · No Commission</p>
        <h2 className="text-4xl text-snow sm:text-5xl">{title}</h2>
        <p className="max-w-xl text-sm leading-relaxed text-snow/75">{text}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[0.75rem] tracking-widest text-charcoal uppercase transition hover:brightness-105 hover:shadow-lift"
          >
            <FaWhatsapp className="text-lg" /> Book on WhatsApp
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-snow/40 px-8 py-4 text-[0.75rem] tracking-widest text-snow uppercase transition hover:bg-snow/10"
          >
            <Phone size={15} /> Call Now
          </a>
        </div>
      </Reveal>
    </section>
  );
}
