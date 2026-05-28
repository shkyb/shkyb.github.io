import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/case/layout/Reveal";

const MotionLink = motion(Link);

function parseEm(text) {
  const parts = text.split(/\*([^*]+)\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : part
  );
}

export default function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false);
  const coverSrc = `/images/cover/${project.id}.webp`;
  const isPublished = project.status === "published";
  const Wrapper = isPublished ? MotionLink : motion.div;
  const wrapperProps = isPublished ? { to: project.href } : {};

  return (
    <Reveal>
      <Wrapper
        {...wrapperProps}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="grid grid-cols-12 gap-8 lg:gap-14 py-14 lg:py-16 border-t border-border last:border-b group items-center"
        style={{ "--card-accent": project.accent ?? "var(--foreground)" }}
      >
        {/* Image */}
        <div
          className="col-span-12 lg:col-span-5 overflow-hidden rounded-2xl aspect-4/3 lg:aspect-5/4"
          style={{ background: `${project.accent ?? "#94a3b8"}22` }}
        >
          <motion.img
            src={coverSrc}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700 ease-out"
            animate={{ scale: hovered ? 1.03 : 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            onError={(e) => { e.currentTarget.style.display = "none" }}
          />
        </div>

        {/* Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col h-full justify-between py-2 grayscale group-hover:grayscale-0 transition-[filter] duration-700 ease-out">

          {/* Header: context + period */}
          <div className="flex justify-between items-baseline border-b border-border/40 pb-3 mb-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {project.context} &bull; {project.sector}
            </span>
            <span className="text-xs font-mono uppercase font-medium text-muted-foreground/80 tabular-nums">
              {project.period.from} – {project.period.to}
            </span>
          </div>

          {/* Narrative */}
          <div className="flex flex-col gap-3 mb-6">
            <p
              className="text-sm font-semibold tracking-tight"
              style={{ color: project.accent ?? "var(--foreground)" }}
            >
              {project.title}
            </p>
            <h2 className="font-serif text-2xl lg:text-4xl font-semibold tracking-tight text-foreground leading-[1.15] [&_em]:text-(--card-accent)">
              {parseEm(project.headline)}
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground font-light leading-relaxed text-balance">
              {project.description}
            </p>
          </div>

          {/* Footer: role + tags + CTA */}
          <div className="mt-auto flex flex-col gap-5">
            <p className="text-xs text-muted-foreground tracking-wide">
              <span className="font-medium text-foreground">My Role:</span>{" "}
              {project.role}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground/80 font-medium">
                {project.tags.map((tag, index) => (
                  <span key={tag} className="flex items-center gap-x-3">
                    {index > 0 && <span className="text-muted-foreground/30 font-light">/</span>}
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.12em] shrink-0">
                {isPublished ? (
                  <span
                    className="inline-flex items-center gap-1.5 px-2 py-1"
                    style={{
                      color: hovered ? "white" : "var(--card-accent)",
                      backgroundImage: "linear-gradient(var(--card-accent), var(--card-accent))",
                      backgroundSize: hovered ? "100% 100%" : "0% 100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left center",
                      transition: "background-size 0.4s ease-out, color 0.2s ease-out",
                    }}
                  >
                    Read Case Study →
                  </span>
                ) : (
                  <span className="text-muted-foreground/40 font-medium normal-case italic">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>

        </div>

      </Wrapper>
    </Reveal>
  );
}
