import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import familyRoom from "../assets/family-room.png";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Guest Reviews | KinVatika Homestay, Kalpa, Kinnaur" },
      {
        name: "description",
        content:
          "Learn about the stay experience at KinVatika Homestay in Kalpa, Kinnaur, and contact the family directly for current guest information.",
      },
      { property: "og:title", content: "Guest Reviews — KinVatika Homestay" },
      {
        property: "og:description",
        content: "What families and travellers say about staying at KinVatika in Kalpa.",
      },
      { property: "og:url", content: "https://www.kinvatikahomestay.com/reviews" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinvatikahomestay.com/reviews" }],
  }),
  component: Reviews,
});

const reviews = [
  {
    name: "Saurabh Sharma",
    details: "Google · 3 months ago · Family holiday",
    source: "https://www.google.com/maps/contrib/114583850716995027575?hl=en-GB",
    text: "Our stay at KinVatika Homestay was truly memorable. The owners made us feel more like family than guests, and the personal care throughout our stay was exceptional. Breakfast and dinner were freshly prepared, authentic and delicious. A peaceful place with warm hospitality and wonderful home-cooked meals.",
  },
  {
    name: "Geet Manocha",
    details: "Google · 4 months ago · Couple",
    source: "https://www.google.com/maps/contrib/111483480429860070537?hl=en-GB",
    text: "I had a wonderful stay at KinVatika Homestay near Kalpa. The property was clean and well maintained, the mountain views were stunning, and the food felt very homely. A peaceful and scenic homestay experience that I would happily repeat.",
  },
  {
    name: "Explore11015889571",
    details: "Tripadvisor · 2 years ago",
    source: "https://www.tripadvisor.com/ShowUserReviews-g26778681-d26777973-r953402271",
    text: "The owner and his wife are great hosts. The location is superb, with Kinnaur Kailash visible from the property, and the homely food and neat rooms made the stay especially comfortable. I strongly recommend this property.",
  },
  {
    name: "Neha Singh",
    details: "Google · 5 months ago",
    source: "https://www.google.com/maps/contrib/107454433519594132066?hl=en-GB",
    text: "After travelling so much, I was hoping for a comfortable stay, and KinVatika delivered. The family made us feel welcome, and the homemade food was the highlight of our four-day visit.",
  },
  {
    name: "Priyanka Rishi",
    details: "Google · 8 months ago · Couple",
    source: "https://www.google.com/maps/contrib/117661578420547176089?hl=en-GB",
    text: "Our three-day stay was peaceful, clean and scenic. We were welcomed with genuine warmth, shared home-cooked meals and enjoyed the feeling of being included in local family life. KinVatika is a memorable choice for a calm mountain escape.",
  },
];

function Reviews() {
  return (
    <>
      <PageHero
        image={familyRoom}
        alt="Comfortable family room at KinVatika Homestay"
        eyebrow="Guest Reviews"
        title="A stay shaped by mountain views and family hospitality"
        subtitle="Contact KinVatika directly for current guest information and availability in Kalpa."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.06}>
              <figure className="flex h-full flex-col rounded-3xl bg-card p-8 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <span key={star} aria-hidden="true">&#9733;</span>
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-charcoal/80">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-xl text-forest">{review.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{review.details}</p>
                  <a
                    href={review.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs tracking-wide text-pine underline underline-offset-4"
                  >
                    View original review
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Write your own Kinnaur story" />
    </>
  );
}
