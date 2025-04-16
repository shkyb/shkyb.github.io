import { projects } from "../data/projectsData";

import Tag from "./tag";
import Cta from "./cta";

import { HiMiniArrowUpRight, HiOutlineBriefcase } from "react-icons/hi2";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";


export default function ProjectShowcase({ id }) {
  const project = projects[id];

  if (!project) return null;

  return (
    <section className="flex flex-col md:flex-row gap-10 my-20 items-start">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-stone-900">{project.title}</h2>
          <h3 className="text-lg text-stone-600">{project.subtitle}</h3>
        </div>

        {/* Info Row */}
        <div className="flex flex-wrap gap-4 text-sm text-stone-700">
          {project.role && (
            <div className="flex items-center gap-2">
              {<HiOutlineBriefcase size={20} />}
              <span>{project.role}</span>
            </div>
          )}
          {project.duration && (
            <div className="flex items-center gap-2">
              {<HiOutlineCalendarDateRange size={20} />}
              <span>{project.duration.from}</span>
              {<HiOutlineArrowLongRight />}
              <span>{project.duration.to}</span>

            </div>
          )}
          {project.extra && (
            <div className="flex items-center gap-2">
              {<HiOutlineUsers size={20} />}
              <span>{project.extra}</span>
            </div>
          )}
        </div>
        {/* Project Overview */}
        <div>
        <h3>Overview</h3>
        <p className="text-stone-800">{project.overview}</p>
        </div>

        {/* Project Outcomes */}
        <div>
          <h3>Key Outcomes</h3>
        <ul className="list-disc list-inside space-y-1 text-stone-700">
          {project.outcomes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Tag key={i} label={tag} />
          ))}
        </div>

        {/* Optional CTA */}
        {project.cta && <Cta text={project.cta.text} link={project.cta.link} icon={<HiMiniArrowUpRight/>} />}
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl w-full object-cover shadow-sm"
        />
      </div>
    </section>
  );
}
