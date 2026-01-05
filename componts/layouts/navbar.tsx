"use client";

interface NavbarProps{
    onNavigate: (sectionId: string) => void;
}

const Nav_Items = ["Projects","Skills","Experience","Contact"];

export default function NabBar({onNavigate}:NavbarProps){
    
    return (
        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
            YourName
          </div>
          <div className="flex gap-6">
            {['Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    );
}