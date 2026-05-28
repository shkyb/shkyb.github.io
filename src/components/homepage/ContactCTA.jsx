import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ContactCTA() {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

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
    <section className="bg-foreground px-6 md:px-12 lg:px-16 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">

        <motion.p
          className="text-xs font-mono uppercase tracking-[0.18em] text-white/40 mb-8"
          {...reveal(0)}
        >
          Contact
        </motion.p>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-end">

          {/* Left: heading + subtitle + CTA */}
          <div className="lg:col-span-8">
            <div className="mb-10">
              <motion.span
                className="block font-serif font-light text-white/60 leading-tight"
                style={{ fontSize: "clamp(1.25rem, 3.5vw, 3rem)" }}
                {...reveal(0.1)}
              >
                Consider it
              </motion.span>
              <motion.span
                className="block font-serif font-semibold  text-white leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 11rem)" }}
                {...reveal(0.15)}
              >
                designed.
              </motion.span>
            </div>

            <motion.p
              className="text-base text-white/55 leading-relaxed mb-12 max-w-lg text-balance"
              {...reveal(0.2)}
            >
              Five years shipping market-ready products — now based in Milan.
              Open to internships, full-time roles, and design collaborations.
            </motion.p>

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

          {/* Right: subtle typographic detail — desktop only */}
          <motion.div
            className="hidden lg:flex lg:col-span-4 flex-col gap-4 text-xs font-mono text-white/35 leading-relaxed pb-1"
            {...reveal(0.35)}
          >
            <div>
              <p>Milan, Italy</p>
              <p className="text-white/55">Available now</p>
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
