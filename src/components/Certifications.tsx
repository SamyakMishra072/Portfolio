
import { Award, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Programming Masterclass",
      provider: "Udemy",
      year: "2024",
      description: "Comprehensive course covering Java fundamentals to advanced concepts",
      rating: 5
    },
    {
      title: "C/C++ Programming",
      provider: "HackerRank",
      year: "2023",
      description: "Certification in C and C++ programming languages",
      rating: 5
    },
    {
      title: "Problem Solving",
      provider: "CodeChef",
      year: "2023",
      description: "Data structures and algorithms problem solving certification",
      rating: 4
    },
    {
      title: "DSA Workshop",
      provider: "GeeksforGeeks",
      year: "2023",
      description: "Data Structures and Algorithms comprehensive workshop",
      rating: 5
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-3d font-['Montserrat']">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group perspective-1000"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 
                            backdrop-blur-sm border border-white/10 rounded-2xl p-8
                            hover:scale-105 transform transition-all duration-500
                            hover:shadow-xl hover:shadow-emerald-500/20
                            transform-style-3d group-hover:rotate-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 
                                rounded-xl flex items-center justify-center flex-shrink-0
                                group-hover:rotate-12 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-emerald-400 font-medium">
                        {cert.provider}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {cert.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-4 h-4 ${i < cert.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-600'}`}
                        />
                      ))}
                      <span className="text-gray-400 text-sm ml-2">
                        ({cert.rating}/5)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg">
            Continuously learning and expanding my <span className="text-emerald-400 font-semibold">technical expertise</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
