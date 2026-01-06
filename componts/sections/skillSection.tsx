import {skills} from "@/data/skills";
import SkillsCard from "../ui/skillCard";
export default function SkillSelection() {
    return(
        <section id="Skills" className="min-h-screen py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-16 text-center">
                    <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                    Tech Stack
                    </span>
                 </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((s)=>(
                    <SkillsCard key={s.category} skill={s}/>
                ))}
            </div>
        </section>
    );
}