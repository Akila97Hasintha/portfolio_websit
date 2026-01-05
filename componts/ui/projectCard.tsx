import {Project} from "@/types/projects"

interface ProjectCardProps{
    project: Project;
}

export default function ProjectCard({ project }:ProjectCardProps) {
  return (
    <div className="rounded-xl border p-6">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
