import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";
import { PHONE_TEL, enquiryLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/homestay-in-kalpa", label: "Kalpa" },
  { to: "/homestay-in-kinnaur", label: "Kinnaur" },
  { to: "/attractions", label: "Nearby" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled ? "glass shadow-soft" : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link to="/" className="group flex items-baseline gap-2">
            <span
              className={cn(
                "font-display text-2xl tracking-tight transition-colors",
                scrolled ? "text-forest" : "text-snow",
              )}
            >
              KinVatika
            </span>
            <span
              className={cn(
                "eyebrow hidden sm:block transition-colors",
                scrolled ? "text-muted-foreground" : "text-snow/70",
              )}
            >
              Kalpa
            </span>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={cn(
                    "relative text-[0.82rem] tracking-wide transition-colors",
                    scrolled ? "text-charcoal/75 hover:text-pine" : "text-snow/85 hover:text-snow",
                    pathname === l.to && (scrolled ? "text-pine" : "text-snow"),
                  )}
                >
                  {l.label}
                  {pathname === l.to && (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={enquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-pine px-5 py-2.5 text-[0.78rem] tracking-widest text-snow uppercase transition-all hover:bg-forest hover:shadow-lift sm:inline-flex"
            >
              <FaWhatsapp className="text-base" /> Book Now
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "rounded-full p-2 lg:hidden",
                scrolled ? "text-charcoal" : "text-snow",
              )}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        <motion.div className="h-[2px] origin-left bg-gold" style={{ scaleX: progress }} />
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-3 mt-2 rounded-2xl p-5 shadow-lift lg:hidden"
        >
          <ul className="grid grid-cols-2 gap-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="block py-1.5 text-sm text-charcoal/80">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href={enquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-pine px-4 py-2.5 text-xs tracking-widest text-snow uppercase"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-pine px-4 py-2.5 text-xs tracking-widest text-pine uppercase"
            >
              <Phone size={14} /> Call
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
