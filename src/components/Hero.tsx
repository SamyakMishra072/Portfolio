import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero = ({ scrollY }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div 
        className="text-center z-10 px-4 max-w-4xl mx-auto"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        {/* Profile Picture */}
        <img 
          src="/input.jpeg" 
          alt="Samyak Mishra" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-white/10 object-cover" 
        />

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-3d font-['Montserrat']">
          Hi, I'm{' '}
          <span className="gradient-text animate-pulse">
            Samyak Mishra
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
          Frontend Developer & Computer Science B.Tech Graduate
        </p>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="nav-right-btn text-white hover:bg-[#a30901] hover:text-white text-lg px-8 py-3 hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
          >
            View My Projects
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
