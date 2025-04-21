import ScrollReveal from "./ScrollReveal";

const Skills = () => {
  return (
    <ScrollReveal>
      <section
        id="skills"
        className="py-24 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Skills & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">
                Core Skills
              </h3>
              <div className="space-y-4">
                {[
                  { skill: "Communication", level: 95 },
                  { skill: "Leadership", level: 90 },
                  { skill: "Organization", level: 92 },
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">
                        {item.skill}
                      </span>
                      <span className="text-blue-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">
                Certifications
              </h3>
              <div className="space-y-4">
                {[
                  { name: "BAC (Bloomberg)", date: "2024" },
                  { name: "Excel Crash Course", date: "2023" },
                  { name: "Financial Modelling I", date: "2023" },
                  { name: "QuickBooks I", date: "2023" },
                ].map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-blue-900 font-medium">
                        {cert.name}
                      </span>
                      <span className="text-blue-600 text-sm">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Skills;
