
const Education = () => {
  const timeline = [
    {
      period: "2022–2026",
      title: "B.Tech CSE",
      institution: "Techno Main Salt Lake",
      //score: "7.2 CGPA",
      description: "Computer Science and Engineering"
    },
    {
      period: "2021",
      title: "Class XII",
      institution: "DAV Model School, Durgapur",
      score: "87.40%",
      description: "Higher Secondary Education"
    },
    {
      period: "2019",
      title: "Class X",
      institution: "DAV Model School, Durgapur",
      score: "90.00%",
      description: "Secondary Education"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-3d font-['Montserrat']">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 
                                backdrop-blur-sm border border-white/10 rounded-2xl p-6
                                hover:scale-105 transform transition-all duration-500
                                hover:shadow-xl hover:shadow-purple-500/20
                                perspective-1000">
                    <div className="space-y-3">
                      <div className="text-purple-400 font-semibold text-sm">{item.period}</div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-gray-300 font-medium">{item.institution}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 
                                    border border-green-500/30 rounded-lg px-3 py-1 inline-block">
                        <span className="text-green-400 font-semibold">{item.score}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 
                                rounded-full border-4 border-slate-900"></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
