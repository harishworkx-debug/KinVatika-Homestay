import { useState, type FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/contact";

const field =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/15";
const label = "eyebrow mb-2 block text-muted-foreground";

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => (f.get(k) as string) || "—";
    const message = [
      "*New Booking Enquiry — KinVatika Homestay*",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Check-in: ${get("checkin")}`,
      `Check-out: ${get("checkout")}`,
      `Adults: ${get("adults")}`,
      `Children: ${get("children")}`,
      `Room Type: ${get("room")}`,
      `Special Requests: ${get("requests")}`,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-3xl bg-card p-6 shadow-soft sm:p-9 ${compact ? "" : "border border-border/70"}`}
    >
      <p className="eyebrow text-gold">Reserve Your Stay</p>
      <h3 className="mt-3 text-3xl">Check availability and direct rates</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Your details open directly in WhatsApp — we reply personally, usually within minutes.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Guest Name
          </label>
          <input id="name" name="name" required className={field} placeholder="Your full name" />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            className={field}
            placeholder="+91 ..."
          />
        </div>
        <div>
          <label className={label} htmlFor="checkin">
            Check-in
          </label>
          <input id="checkin" name="checkin" type="date" required className={field} />
        </div>
        <div>
          <label className={label} htmlFor="checkout">
            Check-out
          </label>
          <input id="checkout" name="checkout" type="date" required className={field} />
        </div>
        <div>
          <label className={label} htmlFor="adults">
            Adults
          </label>
          <input
            id="adults"
            name="adults"
            type="number"
            min="1"
            defaultValue="2"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="children">
            Children
          </label>
          <input
            id="children"
            name="children"
            type="number"
            min="0"
            defaultValue="0"
            className={field}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="room">
            Room Type
          </label>
          <select id="room" name="room" className={field} defaultValue="Deluxe Mountain View Room">
            <option>Deluxe Mountain View Room</option>
            <option>Family Suite with Balcony</option>
            <option>Traditional Kinnauri Wooden Room</option>
            <option>Not sure — please suggest</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="requests">
            Special Requests
          </label>
          <textarea
            id="requests"
            name="requests"
            rows={3}
            className={field}
            placeholder="Early check-in, bonfire evening, vegetarian meals, travelling with a pet…"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine px-8 py-4 text-[0.78rem] tracking-widest text-snow uppercase transition hover:bg-forest hover:shadow-lift active:scale-[0.99]"
      >
        <FaWhatsapp className="text-lg" /> Send Booking on WhatsApp
      </button>
      {sent && (
        <p className="mt-3 text-center text-xs text-pine">
          WhatsApp opened with your details. If it didn&apos;t, please allow pop-ups.
        </p>
      )}
    </form>
  );
}
