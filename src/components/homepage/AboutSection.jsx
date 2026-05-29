import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const disciplines = [
  "UX Research",
  "Interaction Design",
  "Industrial Design",
  "HMI & Human-Robot Interaction",
  "Design Systems",
];

export default function AboutSection() {
  const reduced = useReducedMotion();
  const [ctaHovered, setCtaHovered] = useState(false);

  const reveal = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.55, ease: "easeOut", delay },
        };

  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left: kicker + disciplines */}
          <div className="lg:col-span-4">
            <motion.span
              className="block text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-8"
              {...reveal(0)}
            >
              About
            </motion.span>

            <ul className="space-y-4">
              {disciplines.map((d, i) => (
                <motion.li
                  key={d}
                  className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground"
                  {...reveal(0.06 + i * 0.05)}
                >
                  <span className="h-px w-4 shrink-0 bg-border" />
                  {d}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: serif lead + body + CTA */}
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center">
            <motion.p
              className="font-serif font-medium text-foreground text-balance leading-snug mb-6"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              {...reveal(0.04)}
            >
              I design interfaces for systems that share control with their users.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground text-balance leading-relaxed"
              {...reveal(0.12)}
            >
              That thread runs from mass-produced hardware at Farassoo, through
              humanoid robots at CAST, to a PoliMI thesis forming on agentic AI
              in long-haul trucks. Research-first. System-minded. Decisive on craft.
            </motion.p>

            <motion.div className="mt-10" {...reveal(0.2)}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] px-2 py-1 -ml-2"
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
                style={{
                  color: ctaHovered ? "var(--background)" : "var(--muted-foreground)",
                  backgroundImage: "linear-gradient(var(--foreground), var(--foreground))",
                  backgroundSize: ctaHovered ? "100% 100%" : "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  transition: "background-size 0.4s ease-out, color 0.2s ease-out",
                }}
              >
                About me →
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
