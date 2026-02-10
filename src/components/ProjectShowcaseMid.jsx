import { projects } from "../data/projectsData";
import MarkdownText from "./markdownText";
import MarkdownBlock from "./markdownBlock";

import Tag from "./tag";
import Cta from "./cta";

import {
  HiMiniArrowUpRight,
  HiOutlineBriefcase,
  HiOutlineCalendarDateRange,
  HiOutlineUsers,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

export default function ProjectShowcaseMid({ id, order = null }) {
  const project = projects[id];
  if (!project) return null;

  return (
    <div className="w-full max-w-screen-2xl px-6 md:px-12 py-16 mx-auto flex flex-col items-center gap-6">
      {/* Image on top */}
      <div className="w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full max-h-[600px] object-cover"
        />
      </div>

      {/* Content in center */}
      <div className="w-full md:w-[700px] flex flex-col justify-start items-start gap-6">
        <div className="w-full flex flex-col gap-6">
          {/* Title & Subtitle */}
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <div className="relative w-0 h-22">
                <div className="absolute left-[-116px] top-0 text-right text-stone-400 text-8xl font-thin italic tracking-tighter leading-[96px]">
                  {order}
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-900">{project.title}</h2>
            </div>
            <h3 className="text-lg md:text-lg font-medium text-stone-500">{project.subtitle}</h3>

            {/* Info Row */}
            <div className="flex flex-col md:flex-row flex-wrap pt-4 gap-2 md:gap-x-6 md:items-center text-sm text-stone-500 font-medium leading-tight">
              {project.role && (
                <div className="flex items-center gap-1">
                  <HiOutlineBriefcase className="min-w-5 min-h-5" />
                  <span>{project.role}</span>
                </div>
              )}
              {project.duration && (
                <div className="flex items-center gap-1">
                  <HiOutlineCalendarDateRange className="min-w-5 min-h-5" />
                  <span>{project.duration.from}</span>
                  <HiOutlineArrowLongRight className="min-w-5 min-h-5" />
                  <span>{project.duration.to}</span>
                </div>
              )}
              {project.extra && (
                <div className="flex items-center gap-1 flex-1 md:min-w-max">
                  <HiOutlineUsers className="min-w-5 min-h-5" />
                  <span>{project.extra}</span>
                </div>
              )}
            </div>
          </div>

          {/* Overview */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-stone-900 leading-7">Overview</h4>
            <MarkdownText>{project.overview}</MarkdownText>
          </div>

          {/* Key Outcomes */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-stone-900 leading-7">Key Outcomes</h4>
            <ul className="list-disc list-outside pl-5 space-y-1 text-stone-700">
              {project.outcomes.map((item, i) => (
                <li key={i}>
                  <MarkdownBlock>{item}</MarkdownBlock>
                </li>
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
    </div>
  );
}
