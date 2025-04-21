import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 transform 
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="text-[20rem] font-bold text-blue-900">RJ</div>
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6">
              Ryan Jormakka
            </h1>
            <p className="text-xl md:text-2xl text-blue-800/80 mb-8 animate-[float_4s_ease-in-out_infinite]">
              WLU BBA 27' Co-op | Incoming Agile Analyst @Co-operators
            </p>
            <p className="text-lg text-blue-700/60">
              Ancaster, Ontario, Canada
            </p>
            <div className="mt-10 flex justify-center space-x-6">
              <a
                href="#about"
                className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 
                transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-full 
                hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-blue-900"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
