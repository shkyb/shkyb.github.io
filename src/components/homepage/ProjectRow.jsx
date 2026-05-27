import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/case/layout/Reveal";

export default function ProjectRow({ project }) {
  const coverSrc = `/images/cover/${project.id}.webp`;
  const period = `${project.period.from} – ${project.period.to}`;
  const contextLabel = project.context.toUpperCase();
  const isPublished = project.status === "published";
  const Wrapper = isPublished ? Link : "div";
  const wrapperProps = isPublished ? { to: project.href } : {};

  return (
    <Reveal>
      <Wrapper
        {...wrapperProps}
        className="grid grid-cols-12 gap-10 py-14 md:py-16 border-t border-border last:border-b group"
      >
        {/* Image */}
        <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl">
          <img
            src={coverSrc}
            alt={project.title}
            className="w-full aspect-[3/2] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        {/* Content */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center gap-4">

          {/* Header row */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {contextLabel} · {project.sector}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {period}
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground leading-snug">
            {project.headline}
          </h2>

          {/* Divider */}
          <div className="h-px w-full bg-border" />

          {/* Description */}
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Role */}
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">My Role:</span>{" "}
            {project.role}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-end">
            {isPublished ? (
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                Read Case Study <ArrowUpRight className="h-4 w-4" />
              </span>
            ) : (
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/40">
                Coming Soon
              </span>
            )}
          </div>

        </div>
      </Wrapper>
    </Reveal>
  );
}
