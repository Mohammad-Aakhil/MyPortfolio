import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Content Generator',
    description: 'A sophisticated content generation platform leveraging GPT models with FastAPI backend and React frontend. Implements streaming responses and advanced prompt engineering.',
    tags: ['FastAPI', 'React', 'Gen AI', 'PostgreSQL', 'TypeScript'],
    gradient: 'from-cyan-500 to-blue-600',
    github: 'https://github.com/yourusername/project1',
    demo: 'https://demo-link.com'
  },
  {
    title: 'Django E-Commerce Platform',
    description: 'Full-featured e-commerce solution with payment integration, inventory management, and real-time analytics. Includes comprehensive test coverage with Pytest.',
    tags: ['Django', 'PostgreSQL', 'Pytest', 'JavaScript'],
    gradient: 'from-emerald-500 to-teal-600',
    github: 'https://github.com/yourusername/project2',
    demo: 'https://demo-link.com'
  },
  {
    title: 'Smart Data Analytics Dashboard',
    description: 'Interactive dashboard for data visualization and analysis with optimized SQL queries. Features real-time data processing and predictive analytics using Python.',
    tags: ['Python', 'React', 'SQL', 'TypeScript', 'DSA'],
    gradient: 'from-orange-500 to-amber-600',
    github: 'https://github.com/yourusername/project3',
    demo: 'https://demo-link.com'
  },
  {
    title: 'Intelligent Chatbot API',
    description: 'RESTful API service with natural language processing capabilities. Built with FastAPI for high performance and includes comprehensive testing suite.',
    tags: ['FastAPI', 'Gen AI', 'Pytest', 'PostgreSQL'],
    gradient: 'from-pink-500 to-rose-600',
    github: 'https://github.com/yourusername/project4',
    demo: 'https://demo-link.com'
  }
];

export default function Projects() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 top-1/4 left-1/4 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-1/4 right-1/4 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across the full stack
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

              <div className="relative p-8">
                <div className={`h-2 w-16 bg-gradient-to-r ${project.gradient} rounded-full mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500`}></div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700/70 text-cyan-300 rounded-full text-xs font-medium border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-cyan-500/50"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
