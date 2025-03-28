import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Menu, X, Terminal, Shield, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Arsenal', href: '#skills' },
    { label: 'Missions', href: '#experience' },
    { label: 'Training', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-black/80 backdrop-blur-sm border-b border-neon-green/20' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-neon-green group-hover:text-neon-blue transition-colors duration-300" />
            <span className="text-2xl font-mono font-bold text-neon-green group-hover:text-neon-blue transition-colors duration-300">
              CyberOps
            </span>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neon-green hover:text-neon-blue transition-colors duration-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-neon-green hover:text-neon-blue transition-colors duration-300 
                  font-mono text-sm relative group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-neon-green/10 scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 origin-left rounded" />
              </a>
            ))}
            <Link to="/admin/login" className="flex items-center gap-2 text-neon-green hover:text-neon-blue transition-colors duration-300">
              <User className="w-4 h-4" /> Admin
            </Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="cyber-card space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(true)}
                  className="block text-neon-green hover:text-neon-blue transition-colors duration-300 
                    font-mono text-sm py-2 px-4 rounded-lg hover:bg-neon-green/10"
                >
                  <Terminal className="w-4 h-4 inline-block mr-2" />
                  {item.label}
                </a>
              ))}
              <Link
                to="/admin/login"
                onClick={() => setIsOpen(true)}
                className="block text-neon-green hover:text-neon-blue transition-colors duration-300 
                  font-mono text-sm py-2 px-4 rounded-lg hover:bg-neon-green/10 flex items-center gap-2"
              >
                <User className="w-4 h-4" /> Admin
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
