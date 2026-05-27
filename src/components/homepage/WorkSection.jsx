import { homepageProjects } from "@/data/homepageProjects";
import ProjectRow from "./ProjectRow";

export default function WorkSection() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-16 pb-24">
      <div className="max-w-7xl mx-auto">
        {homepageProjects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
