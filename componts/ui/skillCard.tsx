import  {Skill} from "@/types/skills";

interface skillsCardProps{
    skill: Skill;
}

export default function SkillsCard({skill}:skillsCardProps){
    return(
       <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-purple-500 transition-all">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((skill) => (
                    <li key={skill} className="text-slate-300 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div> 
    );
}