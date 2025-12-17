import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center transform transition-all duration-1000 hover:scale-105">
          <div className="inline-block mb-4 overflow-hidden">
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-2 animate-slide-up">
              Mohammad Aakhil
            </h1>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-6 transform origin-left animate-expand"></div>
          <p className="text-2xl md:text-3xl text-cyan-300 mb-4 animate-fade-in">
            Full Stack Developer & AI Engineer
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 animate-fade-in-delay">
            Crafting intelligent solutions with Python, React, and cutting-edge AI technologies
          </p>

          <div className="flex gap-6 justify-center mb-12 animate-fade-in-delay-2">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-cyan-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Github className="w-6 h-6 text-white" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-cyan-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a href="mailto:your.email@example.com"
               className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-cyan-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  );
}
