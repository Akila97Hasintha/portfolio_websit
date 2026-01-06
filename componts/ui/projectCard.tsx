import {Project} from "@/types/projects";
import {  ExternalLink } from 'lucide-react';
import Image from 'next/image';
import ProjectImageSlider from "@/componts/ui/projectImageSlider";

interface ProjectCardProps{
    project: Project;
}

export default function ProjectCard({ project }:ProjectCardProps) {
  return (
    <div className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
      <ProjectImageSlider images={project.image} />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                     View Project <ExternalLink size={16} />
                  </a>
                </div>
    </div>
  );
}
