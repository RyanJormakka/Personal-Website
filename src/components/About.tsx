import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <ScrollReveal>
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            About Me
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <p className="text-lg text-gray-700 leading-relaxed">
              As a second-year Bachelor of Business Administration student at
              Wilfrid Laurier University, I bring a unique blend of skills and
              attributes that positions me well for success in the business
              realm. My extroverted personality, coupled with a resilient,
              never-quit attitude, fuels my passion for continuous learning and
              making a significant impact in the business world.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">Passion</h3>
                <p className="text-blue-800/70">
                  Driven by continuous learning and growth
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Adaptability
                </h3>
                <p className="text-blue-800/70">
                  Thrives in team and independent settings
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">Excellence</h3>
                <p className="text-blue-800/70">
                  Committed to achieving outstanding results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default About;
