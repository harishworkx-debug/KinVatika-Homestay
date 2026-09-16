import { Link } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ADDRESS, PHONE, PHONE_TEL, enquiryLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-forest text-snow/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl text-snow">KinVatika Homestay</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            A peaceful Himalayan home in Village Shudharang, Kalpa — wrapped in apple orchards with
            panoramic views towards the sacred Kinnaur Kailash range when visibility is clear.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={enquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[0.75rem] tracking-widest text-charcoal uppercase transition hover:brightness-105"
            >
              <FaWhatsapp /> Book on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-snow/30 px-6 py-3 text-[0.75rem] tracking-widest text-snow uppercase transition hover:bg-snow/10"
            >
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <Link to="/about">About KinVatika</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms &amp; Suites</Link>
            </li>
            <li>
              <Link to="/homestay-in-kalpa">Homestay in Kalpa</Link>
            </li>
            <li>
              <Link to="/homestay-in-kinnaur">Homestay in Kinnaur</Link>
            </li>
            <li>
              <Link to="/homestay-in-reckong-peo">Homestay Near Reckong Peo</Link>
            </li>
            <li>
              <Link to="/homestay-near-kinnaur-kailash">Homestay Near Kinnaur Kailash</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Reach Us</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
              <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
            </li>
            <li className="flex gap-3">
              <FaInstagram size={16} className="mt-0.5 shrink-0 text-gold" />
              <a
                href="https://www.instagram.com/kin_vatika_homestay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-snow/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-snow/50 sm:flex-row sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} KinVatika Homestay, Kalpa, Kinnaur.</p>
          <p>Best Homestay in Kalpa · Homestay near Kinnaur Kailash</p>
          <p>
            Powered by{" "}
            <a
              href="https://www.techhim.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-snow/70 transition-colors hover:text-gold"
            >
              TechHim Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
