import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 top-0 right-0 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-0 left-0 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl transform group-hover:rotate-12 transition-transform duration-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                    <a href="mailto:aakhilmohammad65.@gmail.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                      aakhilmohammad65.@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl transform group-hover:rotate-12 transition-transform duration-500">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                    <p className="text-slate-300">
                      Gudivada, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Quick Response</h3>
                <p className="text-slate-300 leading-relaxed">
                  I typically respond within 24-48 hours. Whether it's a project inquiry, collaboration opportunity, or just a chat about tech, feel free to reach out!
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
