import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-4 space-x-6"></div>
          <p className="text-blue-200">
            © {new Date().getFullYear()} Ryan Jormakka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
