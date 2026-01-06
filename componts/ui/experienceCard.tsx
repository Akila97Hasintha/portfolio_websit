import { Experience } from "@/types/experiencies";

interface ExperienceCardProps{
    experience: Experience;
}

export default function ExperienceCard({experience}:ExperienceCardProps){
    return(
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-purple-500 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{experience.role}</h3>
                    <p className="text-purple-400">{experience.company}</p>
                  </div>
                  <span className="text-slate-400 text-sm">{experience.period}</span>
                </div>
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-3">
                      <span className="text-purple-500 mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
        </div>
    );
}