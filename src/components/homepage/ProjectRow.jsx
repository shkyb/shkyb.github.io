import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/case/layout/Reveal";

export default function ProjectRow({ project, order }) {
  const coverSrc = `/images/cover/${project.id}.webp`;
  const year = project.period.to.split(" ")[1];

  return (
    <Reveal>
      <div className="grid grid-cols-12 gap-8 md:gap-12 py-14 md:py-16 border-t border-border last:border-b">
        {/* Image */}
        <div className="col-span-12 md:col-span-7">
          <motion.div className="overflow-hidden rounded-2xl" whileHover="hover">
            <motion.img
              src={coverSrc}
              alt={project.title}
              className="w-full aspect-video object-cover"
              variants={{ hover: { scale: 1.03 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold tabular-nums text-muted-foreground">
              {order}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {project.title} · {project.sector} · {year}
            </span>
          </div>

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

          {project.status === "published" ? (
            <Link
              to={project.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors duration-200 w-fit"
            >
              View Case Study <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : (
            <span className="text-sm font-medium text-muted-foreground/40">
              Case Study in Progress
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}
