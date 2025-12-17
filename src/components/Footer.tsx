import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-2">
            Designed & Built with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Mohammad Aakhil
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
