import { Github, Linkedin, Mail, ChevronDown,Phone } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection({ scrollY }: { scrollY: number }) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
       {/* Background Image Layer */}
      <div className="absolute  top-20 right-0 h-full w-1/2 -z-10 ">
  <Image
    src="/assets/images/akila.png"
    alt="Background"
    fill
    priority
    className=" object-top opacity-80"
  />

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent"></div>
</div>
       <div className="max-w-4xl mx-auto text-center z-10">
          <div 
            className="mb-8"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: 1 - scrollY / 500
            }}
          >
      <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-pulse">
        Software Engineer</h1>
      <p className="text-2xl text-slate-400 mb-8">
              Building scalable systems and elegant user experiences
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <a href="https://github.com/Akila97Hasintha" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="http://www.linkedin.com/in/akila97hasintha" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:akilahasinthawithana@gmail.com" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+94769722575"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all transform hover:scale-110"
                title="+94769722575"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
              <button 
              onClick={() => scrollToSection('Projects')}
              className="bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            </div>
        </div>
        {/* <div className="flex-1 relative w-full md:w-auto">
          <Image
            src="/assets/images/profile.png" // replace with your image path
            alt="Akila Hasintha"
            width={400}       // adjust size
            height={400}      // adjust size
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div> */}
        <ChevronDown 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" 
          size={32}
        />
    </section>
  );
}
