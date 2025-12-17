import { Code2, Database, Lightbulb, TestTube } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: Code2,
    skills: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'SQL'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'React'],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Data & Algorithms',
    icon: Database,
    skills: ['DSA with Python', 'Database Design', 'Query Optimization'],
    color: 'from-orange-500 to-amber-500'
  },
  {
    title: 'AI & Testing',
    icon: Lightbulb,
    skills: ['Generative AI', 'Pytest', 'Test Automation'],
    color: 'from-pink-500 to-rose-500'
  }
];

export default function Skills() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                <div className="relative">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${category.color} rounded-xl mb-4 transform group-hover:rotate-12 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg text-sm font-medium hover:bg-slate-600/50 transition-colors duration-300 border border-slate-600 hover:border-cyan-500/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
