import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex h-[70vh] min-h-[460px] items-end overflow-hidden">
      <motion.img
        src={image}
        alt={alt}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="eyebrow text-gold"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl text-4xl leading-[1.05] text-snow text-balance-tight sm:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-snow/80"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
