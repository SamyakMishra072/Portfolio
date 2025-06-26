
import { Award, Users, Code, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Project Admin – Apertre 2.0",
      organization: "Resourcio Community",
      description: "Leading a team of developers in building innovative web solutions",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "41 PRs in Hacktoberfest 2024",
      organization: "Open Source Contribution",
      description: "All pull requests accepted, contributing to various open source projects",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "C Programming Workshop",
      organization: "Conducted for 200+ students",
      description: "Organized and conducted comprehensive programming workshop",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Technical Head",
      organization: "GFG Student Chapter TMSL",
      description: "Hackathon & Fest Organizer, leading technical initiatives",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Convenor",
      organization: "Dept. of CSE TMSL",
      description: "Representing student body and coordinating academic activities",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Management Co-Head",
      organization: "Team Eclectica Literary Club",
      description: "Managing literary events and cultural activities",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-3d font-['Montserrat']">
            Achievements & Leadership
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group perspective-1000"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 
                            backdrop-blur-sm border border-white/10 rounded-2xl p-6
                            hover:scale-105 transform transition-all duration-500
                            hover:shadow-xl hover:shadow-yellow-500/20
                            transform-style-3d group-hover:rotate-y-12">
                
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} 
                               rounded-2xl flex items-center justify-center mb-6
                               group-hover:rotate-12 transition-transform duration-300`}>
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-purple-400 font-medium mb-3 text-sm">
                  {achievement.organization}
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-1 bg-gradient-to-r ${achievement.color} rounded-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg">
            Passionate about <span className="text-purple-400 font-semibold">leadership</span>, 
            <span className="text-blue-400 font-semibold"> open source</span>, and 
            <span className="text-green-400 font-semibold"> community building</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
