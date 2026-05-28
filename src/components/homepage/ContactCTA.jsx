import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ─── Availability config ───────────────────────────────────────────────────────
// Flip `open` to false when you're no longer available for new work.
// Update `closedMessage` to reflect your current situation — e.g.:
//   "Currently at [Company] as [Role] — not taking on new work."
//   "Finishing my MSc thesis — available from Dec 2026."
const AVAILABILITY = {
  open: true,
  closedMessage: "Currently on a full-time engagement — not taking on new work.",
};

// Renders a green dot (available) or amber dot + message (unavailable).
// Controlled entirely by AVAILABILITY above — no props needed.
function AvailabilityBadge() {
  if (AVAILABILITY.open) {
    return (
      <div className="flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
          style={{ boxShadow: "0 0 8px 4px rgba(52, 211, 153, 0.35)" }}
        />
        <p className="text-white/55">Available now</p>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50 shrink-0" />
      <p className="text-white/35">{AVAILABILITY.closedMessage}</p>
    </div>
  );
}

export default function ContactCTA() {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  // Scroll-reveal helper — pass delay in seconds, respects prefers-reduced-motion.
  const reveal = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.6, ease: "easeOut", delay },
        };

  return (
    // Dark section — bg-foreground (the site's near-black text color used as bg).
    // Flows seamlessly into <Footer /> which shares the same background.
    <section className="bg-foreground px-6 md:px-12 lg:px-16 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.p
          className="text-xs font-mono uppercase tracking-[0.18em] text-white/40 mb-8"
          {...reveal(0)}
        >
          Contact
        </motion.p>

        {/* 12-col grid: left (heading + body + CTA) / right (typographic detail, desktop only) */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-end">

          {/* Left col */}
          <div className="lg:col-span-8">

            {/* Two-line heading — "Consider it" (light, smaller) / "designed." (bold, large stamp) */}
            <div className="mb-10">
              <motion.span
                className="block font-serif font-light text-white/60 leading-tight"
                style={{ fontSize: "clamp(1.25rem, 3.5vw, 3rem)" }}
                {...reveal(0.1)}
              >
                Consider it
              </motion.span>
              <motion.span
                className="block font-serif font-semibold text-white leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 11rem)" }}
                {...reveal(0.15)}
              >
                designed.
              </motion.span>
            </div>

            {/* Subtitle — update if availability or positioning changes */}
            <motion.p
              className="text-base text-white/55 leading-relaxed mb-12 max-w-lg text-balance"
              {...reveal(0.2)}
            >
              Five years shipping market-ready products — now based in Milan.
              Open to internships, full-time roles, and design collaborations.
            </motion.p>

            {/* Email CTA — white wipe from left on hover, text flips to dark */}
            <motion.a
              href="mailto:shakib.alipour@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] px-2 py-1"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                color: hovered ? "oklch(0.129 0.042 264.695)" : "white",
                backgroundImage: "linear-gradient(white, white)",
                backgroundSize: hovered ? "100% 100%" : "0% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                transition: "background-size 0.4s ease-out, color 0.2s ease-out",
              }}
              {...reveal(0.3)}
            >
              shakib.alipour@gmail.com →
            </motion.a>
          </div>

          {/* Right col — desktop only, bottom-aligned with email CTA */}
          {/* Update "Currently" block whenever thesis topic or enrollment status changes */}
          <motion.div
            className="hidden lg:flex lg:col-span-4 flex-col gap-4 text-xs font-mono text-white/35 leading-relaxed pb-1"
            {...reveal(0.35)}
          >
            <div>
              <p>Milan, Italy</p>
              <AvailabilityBadge />
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="uppercase tracking-[0.14em] mb-1">Currently</p>
              <p>MSc · Politecnico di Milano</p>
              <p>Thesis — Agentic AI in trucking</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
