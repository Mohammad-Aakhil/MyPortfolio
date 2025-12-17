import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="group">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl transform group-hover:rotate-12 transition-transform duration-500">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Passion for Innovation</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Driven by the excitement of building intelligent systems that solve real-world problems. I thrive on learning new technologies and pushing boundaries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl transform group-hover:rotate-12 transition-transform duration-500">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Full Stack Expertise</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Experienced in architecting and deploying scalable applications from database design to user interface, with a focus on performance and user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl transform group-hover:rotate-12 transition-transform duration-500">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Continuous Learner</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Constantly exploring emerging technologies, especially in AI/ML and modern web frameworks. Believe in writing clean, testable, and maintainable code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700">
                <div className="space-y-6">
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-cyan-300 font-semibold mb-2">What I Do</h3>
                    <p className="text-slate-300 leading-relaxed">
                      I specialize in building robust backend systems with Python frameworks like Django and FastAPI, creating responsive React applications, and integrating cutting-edge AI capabilities into modern applications.
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>

                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-emerald-300 font-semibold mb-2">My Approach</h3>
                    <p className="text-slate-300 leading-relaxed">
                      I believe in writing efficient, scalable code backed by comprehensive testing. Every project is an opportunity to create something exceptional that delivers real value.
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>

                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-orange-300 font-semibold mb-2">Beyond Code</h3>
                    <p className="text-slate-300 leading-relaxed">
                      When I'm not coding, I'm exploring new AI models, contributing to open source, or diving deep into algorithm optimization challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
