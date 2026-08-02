import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_TEL, enquiryLink } from "@/lib/contact";

export function FloatingCTA() {
  return (
    <>
      <a
        href={enquiryLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-24 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lift transition-transform hover:scale-110 sm:bottom-8"
      >
        <FaWhatsapp />
      </a>

      <div className="glass fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t p-2.5 sm:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-pine py-3 text-xs tracking-widest text-pine uppercase"
        >
          <Phone size={14} /> Call Now
        </a>
        <a
          href={enquiryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-pine py-3 text-xs tracking-widest text-snow uppercase"
        >
          Book Now
        </a>
      </div>
    </>
  );
}
