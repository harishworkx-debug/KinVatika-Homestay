import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import familyRoom from "../assets/family-room.png";
import { ALL_REVIEWS, REVIEWS_OVERVIEW, ReviewItem } from "@/data/reviewsData";
import {
  Sparkles,
  Search,
  ExternalLink,
  MessageSquareQuote,
  CheckCircle2,
  Heart,
  Users,
  Compass,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Guest Reviews | 5.0 Star Rated KinVatika Homestay Kalpa" },
      {
        name: "description",
        content:
          "Read 160+ verified 5.0-star guest reviews for KinVatika Homestay in Kalpa, Kinnaur. Experience genuine Himachali hospitality, homemade meals, and Kinnaur Kailash views.",
      },
      { property: "og:title", content: "Guest Reviews — 5.0 Star Rated KinVatika Homestay" },
      {
        property: "og:description",
        content:
          "What 160+ families, couples, and mountain travellers say about staying at KinVatika in Kalpa, Kinnaur.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/reviews" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/reviews" }],
  }),
  component: ReviewsPage,
});

type FilterCategory = "all" | "family" | "couple" | "solo" | "friends";

function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(18);

  const filteredReviews = useMemo(() => {
    return ALL_REVIEWS.filter((review) => {
      // Category filter
      if (activeCategory === "family" && review.tripType !== "Family") {
        const hasFamilyKeyword = /family|kid|parent|child/i.test(review.text);
        if (!hasFamilyKeyword) return false;
      }
      if (activeCategory === "couple" && review.tripType !== "Couple") {
        const hasCoupleKeyword = /couple|husband|wife|romantic/i.test(review.text);
        if (!hasCoupleKeyword) return false;
      }
      if (activeCategory === "solo" && review.tripType !== "Solo") {
        const hasSoloKeyword = /solo|motorbike|peaceful|alone/i.test(review.text);
        if (!hasSoloKeyword) return false;
      }
      if (activeCategory === "friends" && review.tripType !== "Friends") {
        const hasFriendsKeyword = /friend|group|trek/i.test(review.text);
        if (!hasFriendsKeyword) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = review.name.toLowerCase().includes(q);
        const matchesText = review.text.toLowerCase().includes(q);
        const matchesHighlights = review.highlights?.some((h) => h.toLowerCase().includes(q));
        if (!matchesName && !matchesText && !matchesHighlights) return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery]);

  const visibleReviews = filteredReviews.slice(0, visibleCount);

  return (
    <>
      <PageHero
        image={familyRoom}
        alt="KinVatika Homestay guests and mountain views in Kalpa"
        eyebrow="Guest Experiences"
        title="160+ Verified 5-Star Reviews from Around the World"
        subtitle="Ranked 5.0 on Google Maps with authentic reviews from couples, families, and Himalayan travellers."
      />

      {/* Overview & Gemini Summary Section */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-6 lg:px-10">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-border/80 bg-card p-8 shadow-soft lg:grid-cols-12 lg:p-10">
            {/* Left Rating Summary */}
            <div className="flex flex-col justify-between border-b border-border/70 pb-6 lg:col-span-5 lg:border-r lg:border-b-0 lg:pr-8 lg:pb-0">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-5xl font-bold text-forest">
                    {REVIEWS_OVERVIEW.rating}
                  </span>
                  <div>
                    <div className="flex text-xl text-gold" aria-label="5 out of 5 stars">
                      {"★★★★★"}
                    </div>
                    <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                      {REVIEWS_OVERVIEW.totalReviews} Google &amp; TripAdvisor Reviews
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-charcoal/85">
                  <strong className="text-forest">100% Genuine Guest Experiences.</strong> Every
                  review represents real travelers hosted by Kulwant Negi and family in Village
                  Shudharang, Kalpa.
                </p>

                {/* Highlights tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {REVIEWS_OVERVIEW.keyHighlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full bg-forest/5 px-3 py-1 text-xs font-medium text-forest"
                    >
                      <CheckCircle2 size={12} className="text-pine" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={REVIEWS_OVERVIEW.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 text-xs tracking-wider text-snow uppercase transition hover:bg-forest hover:shadow-lift"
                >
                  Write a Google Review
                  <ExternalLink size={14} />
                </a>
                <a
                  href={REVIEWS_OVERVIEW.tripAdvisorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-pine px-5 py-3 text-xs tracking-wider text-pine uppercase transition hover:bg-pine hover:text-snow"
                >
                  TripAdvisor Profile
                </a>
              </div>
            </div>

            {/* Right: Google Gemini AI Summary */}
            <div className="flex flex-col justify-between lg:col-span-7 lg:pl-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold-dark">
                  <Sparkles size={14} className="text-gold" />
                  Summarized with Google AI / Gemini
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-charcoal/85 sm:text-[0.98rem]">
                  &ldquo;{REVIEWS_OVERVIEW.geminiSummary}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 rounded-2xl border border-border/60 bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Heart size={14} className="text-pine" />
                  <span>
                    Average Guest Rating: <strong className="text-forest">5.0 / 5.0</strong> across
                    160+ reviews on Google Maps.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Filter and Search Bar */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: `All Reviews (${ALL_REVIEWS.length})`, icon: MessageSquareQuote },
              { id: "family", label: "Family & Kids", icon: Users },
              { id: "couple", label: "Couples & Scenic", icon: Heart },
              { id: "solo", label: "Solo & Trekkers", icon: Compass },
              { id: "friends", label: "Friends & Groups", icon: Users },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveCategory(tab.id as FilterCategory);
                  setVisibleCount(18);
                }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium transition ${
                  activeCategory === tab.id
                    ? "bg-pine text-snow shadow-sm"
                    : "border border-border/80 bg-card text-charcoal/80 hover:border-pine/40 hover:bg-forest/5"
                }`}
              >
                <tab.icon size={14} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] md:w-72">
            <Search
              size={16}
              className="absolute top-1/2 left-3.5 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(18);
              }}
              placeholder="Search reviews (e.g. food, kailash, rajma)..."
              className="w-full rounded-full border border-border/80 bg-card py-2.5 pr-4 pl-10 text-xs text-charcoal placeholder:text-muted-foreground focus:border-pine focus:outline-none"
            />
          </div>
        </div>

        {/* Count indicator */}
        <p className="mt-4 text-xs text-muted-foreground">
          Showing {visibleReviews.length} of {filteredReviews.length} guest reviews
        </p>
      </section>

      {/* Reviews Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
        {visibleReviews.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border py-16 text-center">
            <p className="text-muted-foreground">No reviews matched your search criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 rounded-full bg-pine px-6 py-2 text-xs text-snow"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review, index) => (
              <Reveal key={review.id} delay={(index % 6) * 0.05}>
                <article className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-pine/30 hover:shadow-lift">
                  <div>
                    {/* Header: Stars & Platform */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex text-gold" aria-label="5 out of 5 stars">
                        {[0, 1, 2, 3, 4].map((star) => (
                          <Star key={star} size={15} fill="currentColor" strokeWidth={0} />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary/80 px-2.5 py-0.5 text-[0.68rem] font-medium text-forest">
                        {review.platform} Verified
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="mt-4 text-[0.92rem] leading-relaxed text-charcoal/85">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Highlights pills */}
                    {review.highlights && review.highlights.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {review.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-md bg-forest/5 px-2 py-0.5 text-[0.68rem] text-forest"
                          >
                            #{h}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Host response if available */}
                    {review.ownerResponse && (
                      <div className="mt-4 rounded-2xl border-l-2 border-pine bg-secondary/40 p-3.5 text-xs text-charcoal/80">
                        <p className="font-semibold text-pine">Response from Kulwant Negi:</p>
                        <p className="mt-1 leading-relaxed text-muted-foreground">
                          {review.ownerResponse}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Reviewer signature */}
                  <div className="mt-6 border-t border-border/60 pt-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-display text-lg text-forest">{review.name}</h4>
                        {review.role && (
                          <p className="text-[0.72rem] text-muted-foreground">{review.role}</p>
                        )}
                        <p className="text-[0.7rem] text-muted-foreground/80">
                          {review.date}
                          {review.tripType && ` · ${review.tripType} Stay`}
                        </p>
                      </div>

                      <a
                        href={REVIEWS_OVERVIEW.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${review.name}'s review on Google Maps`}
                        className="rounded-full p-1.5 text-muted-foreground transition hover:bg-forest/10 hover:text-forest"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredReviews.length && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 18)}
              className="inline-flex items-center gap-2 rounded-full border border-pine bg-card px-8 py-3.5 text-xs font-semibold tracking-wider text-pine uppercase transition hover:bg-pine hover:text-snow hover:shadow-soft"
            >
              Load More Reviews ({filteredReviews.length - visibleCount} more)
            </button>
          </div>
        )}
      </section>

      <CtaBand title="Experience KinVatika's 5-Star Hospitality" />
    </>
  );
}
