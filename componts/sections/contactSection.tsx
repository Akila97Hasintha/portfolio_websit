export default function ContactSection(){
    return (
        <section id="Contact" className="min-h-screen py-20 px-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Let's Build Something
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=akilahasinthawithana@gmail.com&su=Hi%20Akila&body=I%20saw%20your%20portfolio%20and%20want%20to%20collaborate"
                target="_blank"
                rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>
    );
}