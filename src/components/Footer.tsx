
import { Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold text-white font-['Montserrat']">
              <span className="gradient-text">Samyak Mishra</span>
            </h3>
            <p className="text-gray-400 mt-2">Frontend Developer & B.Tech CSE Graduate</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:samyakmishra61@gmail.com"
              className="footer-icons bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg 
                       text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            
            <a
              href="https://linkedin.com/in/samyak072"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icons bg-gradient-to-r from-blue-700 to-blue-800 p-3 rounded-lg 
                       text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href="https://github.com/SamyakMishra072"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icons bg-gradient-to-r from-gray-700 to-gray-800 p-3 rounded-lg 
                       text-white hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Samyak Mishra. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React, TypeScript & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
