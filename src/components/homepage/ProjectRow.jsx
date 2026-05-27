import { Link } from "react-router-dom";
import { Reveal } from "@/components/case/layout/Reveal";

export default function ProjectRow({ project }) {
  const coverSrc = `/images/cover/${project.id}.webp`;
  const year = project.period.to.split(" ")[1];
  const isPublished = project.status === "published";
  const Wrapper = isPublished ? Link : "div";
  const wrapperProps = isPublished ? { to: project.href } : {};

  return (
    <Reveal>
      <Wrapper
        {...wrapperProps}
        className="grid grid-cols-12 gap-10 py-14 md:py-16 border-t border-border last:border-b group block"
      >
        {/* Image */}
        <div className="col-span-12 md:col-span-7 overflow-hidden rounded-2xl">
          <img
            src={coverSrc}
            alt={project.title}
            className="w-full aspect-video object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        {/* Content */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {project.title} · {project.sector} · {year}
          </span>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground leading-snug">
            {project.headline}
          </h2>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>

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

          {!isPublished && (
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/40">
              Coming Soon
            </span>
          )}
        </div>
      </Wrapper>
    </Reveal>
  );
}
