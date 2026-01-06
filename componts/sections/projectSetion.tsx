import { projects } from "@/data/projects";
import ProjectCard from "../ui/projectCard";

export default function ProjectsSection() {
  return (
    <section id="Projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

      </div>
      
    </section>
  );
}
