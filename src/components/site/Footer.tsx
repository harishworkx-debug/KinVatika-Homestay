import { Link } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ADDRESS, PHONE, PHONE_TEL, enquiryLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-forest text-snow/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:px-10">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="font-display text-3xl text-snow">KinVatika Homestay</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-snow/75">
            A peaceful Himalayan home in Village Shudharang, Kalpa — wrapped in apple orchards with
            panoramic views towards the sacred Kinnaur Kailash range when visibility is clear.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={enquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-[0.75rem] tracking-widest text-charcoal uppercase transition hover:brightness-105"
            >
              <FaWhatsapp /> Book on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-snow/30 px-6 py-2.5 text-[0.75rem] tracking-widest text-snow uppercase transition hover:bg-snow/10"
            >
              <Phone size={14} /> Call Now
            </a>
          </div>
          <div className="mt-8 space-y-2.5 text-xs text-snow/70">
            <p className="flex items-center gap-2">
              <MapPin size={14} className="shrink-0 text-gold" />
              <span>{ADDRESS}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} className="shrink-0 text-gold" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-snow">
                {PHONE}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaInstagram size={14} className="shrink-0 text-gold" />
              <a
                href="https://www.instagram.com/kin_vatika_homestay/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-snow"
              >
                @kin_vatika_homestay
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow text-gold">The Stay</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-snow transition-colors">
                About KinVatika
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-snow transition-colors">
                Rooms &amp; Suites
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-snow transition-colors">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="/dining" className="hover:text-snow transition-colors">
                Dining &amp; Food
              </Link>
            </li>
            <li>
              <Link to="/experience" className="hover:text-snow transition-colors">
                Kinnaur Experience
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-snow transition-colors">
                Guest Reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-snow transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-snow transition-colors">
                Book Online
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Destinations</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/homestay-in-kalpa" className="hover:text-snow transition-colors">
                Homestay in Kalpa
              </Link>
            </li>
            <li>
              <Link to="/homestay-in-kinnaur" className="hover:text-snow transition-colors">
                Homestay in Kinnaur
              </Link>
            </li>
            <li>
              <Link to="/homestay-in-reckong-peo" className="hover:text-snow transition-colors">
                Homestay in Reckong Peo
              </Link>
            </li>
            <li>
              <Link to="/homestay-in-shudharang" className="hover:text-snow transition-colors">
                Homestay in Shudharang
              </Link>
            </li>
            <li>
              <Link
                to="/homestay-near-kinnaur-kailash"
                className="hover:text-snow transition-colors"
              >
                Near Kinnaur Kailash
              </Link>
            </li>
            <li>
              <Link
                to="/mountain-view-homestay-kalpa"
                className="hover:text-snow transition-colors"
              >
                Mountain View Homestay
              </Link>
            </li>
            <li>
              <Link to="/family-homestay-in-kalpa" className="hover:text-snow transition-colors">
                Family Stay in Kalpa
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Guides &amp; Blog</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/attractions" className="hover:text-snow transition-colors">
                Nearby Attractions
              </Link>
            </li>
            <li>
              <Link to="/things-to-do-in-kalpa" className="hover:text-snow transition-colors">
                Things to Do in Kalpa
              </Link>
            </li>
            <li>
              <Link to="/kalpa-travel-guide" className="hover:text-snow transition-colors">
                Kalpa Travel Guide
              </Link>
            </li>
            <li>
              <Link
                to="/kinnaur-kailash-travel-guide"
                className="hover:text-snow transition-colors"
              >
                Kinnaur Kailash Guide
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-snow transition-colors">
                Travel Blog
              </Link>
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
