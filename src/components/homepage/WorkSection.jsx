import { projects } from "@/data/projects";
import { homepageProjectIds } from "@/data/homepageProjects";
import ProjectRow from "./ProjectRow";

const homepageProjects = homepageProjectIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean);

export default function WorkSection() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-16 pb-24">
      <div className="max-w-7xl mx-auto">
        {homepageProjects.map((project, i) => (
          <ProjectRow key={project.id} project={project} order={String(i + 1).padStart(2, "0")} />
        ))}
      </div>
    </section>
  );
}
