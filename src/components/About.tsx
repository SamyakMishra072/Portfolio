
import { Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-3d font-['Montserrat']">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Computer Science and Engineering student at Techno Main Salt Lake, 
              passionate about building interactive web applications.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in programming and web technologies, I enjoy 
              creating solutions that combine functionality with beautiful design. 
              My journey in tech has been driven by curiosity and a desire to learn 
              new technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {['React', 'JavaScript', 'Python', 'TailwindCSS'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                           border border-purple-500/30 rounded-full text-white text-sm
                           hover:scale-105 transform transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl 
                            transform rotate-6 absolute opacity-20"></div>
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl 
                            transform -rotate-6 absolute opacity-20"></div>
              <div className="w-full h-full bg-black/40 backdrop-blur-sm rounded-3xl 
                            flex items-center justify-center relative z-10 border border-white/10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 
                                rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-white font-semibold">Let's Connect!</p>
                  <p className="text-gray-300 text-sm">samyakmishra61@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:samyakmishra61@gmail.com"
              className="footer-icons bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg 
                       text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
