import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ADDRESS, PHONE, PHONE_TEL, enquiryLink } from "@/lib/contact";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "@tanstack/react-router";

export function LocationPage({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  intro,
  features,
  whyStay,
  faqs,
  relatedLinks,
  ctaTitle,
  ctaText,
  ctaMessage,
  contentSections = [],
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  features: string[];
  whyStay: string[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaMessage: string;
  contentSections?: { title: string; text: string }[];
}) {
  return (
    <>
      <PageHero image={image} alt={alt} eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div>
              <p className="eyebrow text-pine">About this stay</p>
              <p className="mt-5 text-lg leading-relaxed text-charcoal/80">{intro}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl bg-card p-7 shadow-soft">
              <p className="eyebrow text-gold">Quick details</p>
              <ul className="mt-5 space-y-4 text-sm text-charcoal/80">
                <li className="flex gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-pine" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-pine" />
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-pine">
                    {PHONE}
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={enquiryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 text-[0.72rem] tracking-widest text-snow uppercase"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-pine px-6 py-3 text-[0.72rem] tracking-widest text-pine uppercase"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {contentSections.length > 0 && (
        <section className="bg-secondary/60">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-6 md:grid-cols-2">
              {contentSections.map((section, index) => (
                <Reveal key={section.title} delay={index * 0.05}>
                  <article className="h-full rounded-2xl border border-border/70 bg-card p-7 shadow-soft">
                    <h2 className="text-2xl text-forest">{section.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{section.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-pine">Why guests choose us</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">A comfortable place to stay in the heart of Kinnaur</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature} delay={index * 0.04}>
                <div className="h-full rounded-2xl border border-border/80 bg-card p-6 shadow-soft">
                  <CheckCircle2 className="text-pine" size={20} />
                  <p className="mt-4 text-base text-charcoal/80">{feature}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-pine">The experience</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">What makes a stay here special</h2>
        </Reveal>
        <div className="mt-12 space-y-4">
          {whyStay.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
                <ArrowRight className="mt-1 shrink-0 text-pine" size={18} />
                <p className="text-base leading-relaxed text-charcoal/80">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-pine">Frequently asked questions</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Helpful answers before you book</h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-12">
            <div className="w-full divide-y divide-border/80">
              {faqs.map((faq) => (
                <article key={faq.q} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="text-lg text-forest">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-pine">Explore more</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Related Kinnaur stays and travel pages</h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="inline-flex items-center rounded-full border border-pine px-5 py-3 text-[0.72rem] tracking-widest text-pine uppercase transition hover:bg-pine hover:text-snow"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={ctaTitle} text={ctaText} message={ctaMessage} />
    </>
  );
}
