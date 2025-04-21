import ScrollReveal from "./ScrollReveal";

const Experience = () => {
  return (
    <ScrollReveal>
      <section id="experience" className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Summer Route Sales Representative
                  </h3>
                  <p className="text-blue-600 font-medium">PepsiCo</p>
                </div>
                <p className="text-gray-600 mt-2 md:mt-0">
                  May 2024 - Aug 2024
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                Ancaster, Ontario, Canada · On-site
              </p>
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg inline-block">
                2024 Summer Student of the Year
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Line Cook
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Recipe Unlimited Corporation
                  </p>
                </div>
                <p className="text-gray-600 mt-2 md:mt-0">
                  Apr 2022 - Aug 2023
                </p>
              </div>
              <p className="text-gray-600">
                Ancaster, Ontario, Canada · On-site
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Experience;
