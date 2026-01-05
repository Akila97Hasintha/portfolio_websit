import { projects } from "@/data/projects";
import ProjectCard from "../ui/projectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </section>
  );
}
