import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { homepageProjectIds } from "@/data/homepageProjects";
import ProjectRow from "./ProjectRow";

const homepageProjects = homepageProjectIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean);

export default function WorkSection() {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section id="work" className="px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-24">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-8">
          Selected Work
        </p>

        {homepageProjects.map((project, i) => (
          <ProjectRow key={project.id} project={project} order={String(i + 1).padStart(2, "0")} />
        ))}

        {/* Bottom CTA */}
        <div className="pt-20 pb-2 flex justify-end">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] px-2 py-1"
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
            View All Projects →
          </Link>
        </div>

      </div>
    </section>
  );
}
