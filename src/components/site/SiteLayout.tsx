import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-16 sm:pb-0">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
