import ExperienceCard from "../ui/experienceCard";
import { experiences } from "@/data/experience";
export default function ExperienceSection(){
    return(
        <section id="Experience" className="min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-16 text-center">
                    <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                    Experience
                    </span>
                </h2>
            </div>
            <div className="space-y-8">
                {experiences.map((ex)=>(
                    <ExperienceCard key={ex.role} experience={ex}/>
                ))}
            </div>
        </section>
    );
}