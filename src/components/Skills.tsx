
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript", "Bash", "Awk", "VHDL"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Frameworks",
      skills: ["ReactJS", "Flask", "Bootstrap 5", "TailwindCSS", "Scapy", "Supabase"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Wireshark", "Ettercap", "VS Code", "IntelliJ", "StarUML", "Dia"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Databases",
      skills: ["MySQL", "Oracle SQL", "MongoDB", "Firebase"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const softSkills = [
    "Problem Solving", "Team Leadership", "Project Management", 
    "Technical Writing", "Public Speaking", "Workshop Conducting"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-3d font-['Montserrat']">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="perspective-1000"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 
                            backdrop-blur-sm border border-white/10 rounded-2xl p-6
                            hover:scale-105 transform transition-all duration-500
                            hover:shadow-xl hover:shadow-blue-500/20
                            transform-style-3d hover:rotate-y-12">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} 
                               rounded-xl flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-xl">
                    {category.title.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2
                               hover:bg-white/10 transition-all duration-300 cursor-pointer
                               hover:scale-105 transform"
                    >
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Core Competencies & Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={skill}
                className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                         border border-purple-500/30 rounded-full px-6 py-3
                         hover:scale-110 transform transition-all duration-300
                         hover:shadow-lg hover:shadow-purple-500/25"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
