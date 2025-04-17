import { projects } from "../data/projectsData";
import Tag from "./tag";
import Cta from "./cta";

import {
  HiMiniArrowUpRight,
  HiOutlineBriefcase,
  HiOutlineCalendarDateRange,
  HiOutlineUsers,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

export default function ProjectShowcase({ id, order = null }) {
  const project = projects[id];
  if (!project) return null;

  return (
    <div className="w-full px-6 md:px-12 py-16 flex flex-col-reverse md:flex-row justify-center items-start gap-6 max-w-screen-2xl mx-auto">
      {/* Left Column */}
      <div className="md:w-1/2 flex flex-col justify-start items-start gap-9">
        <div className="w-full flex flex-col gap-6">
          {/* Title & Subtitle */}
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <div className="relative w-0 h-22">
                <div className="absolute left-[-100px] top-0 text-right text-stone-400 text-8xl font-thin italic tracking-tighter leading-[96px]">
                  {order}
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-900">{project.title}</h2>
            </div>
            <h3 className="text-lg md:text-xl font-medium text-stone-600">{project.subtitle}</h3>
            
            {/* Info Row */}
            <div className="flex flex-wrap pt-4 gap-2 md:gap-6 items-center text-sm text-stone-700 font-medium leading-tight">
              {project.role && (
                <div className="flex items-center gap-1">
                  <HiOutlineBriefcase className="w-5 h-5" />
                  <span>{project.role}</span>
                </div>
              )}
              {project.duration && (
                <div className="flex items-center gap-1">
                  <HiOutlineCalendarDateRange className="w-5 h-5" />
                  <span>{project.duration.from}</span>
                  <HiOutlineArrowLongRight className="w-5 h-5" />
                  <span>{project.duration.to}</span>
                </div>
              )}
              {project.extra && (
                <div className="flex items-center gap-1 flex-1">
                  <HiOutlineUsers className="w-5 h-5" />
                  <span>{project.extra}</span>
                </div>
              )}
            </div>
          </div>

          {/* Overview */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-stone-900 leading-7">Overview</h4>
            <p className="text-base text-stone-700 leading-normal">{project.overview}</p>
          </div>

          {/* Key Outcomes */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-stone-900 leading-7">Key Outcomes</h4>
            <ul className="list-disc list-inside space-y-1 text-base text-stone-700 leading-normal">
              {project.outcomes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 content-center">
            {project.tags.map((tag, i) => (
              <Tag key={i} label={tag} />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        {project.cta && (
          <div className="flex gap-3">
            <Cta
              text={project.cta.text}
              link={project.cta.link}
              icon={<HiMiniArrowUpRight />}
            />
          </div>
        )}
      </div>

      {/* Right Column: Image */}
      <div className="md:w-1/2 relative overflow-hidden rounded outline-1 outline-violet-500">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
