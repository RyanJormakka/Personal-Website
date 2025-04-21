import ScrollReveal from "./ScrollReveal";

const Education = () => {
  return (
    <ScrollReveal>
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">WLU</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-blue-900">
                    Bachelor of Business Administration - BBA
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Wilfrid Laurier University
                  </p>
                  <p className="text-gray-600 mt-2">Sep 2023 - Apr 2027</p>
                  <p className="text-gray-700 mt-4">Grade: Second Year</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-blue-900">
                      Activities and Societies:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>
                        First-Year Leadership Program - Community Representative
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">AHS</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-blue-900">
                    Secondary Education
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Ancaster High School
                  </p>
                  <p className="text-gray-600 mt-2">Sep 2019 - Jun 2023</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-blue-900">Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>DECA - IMCP Top 10 Provincial Placement</li>
                      <li>Laura Miller Public Speaking Award Winner</li>
                      <li>Ontario Scholar Award</li>
                      <li>Award of Excellence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Education;
