import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/sections/About/About";
import Contact from "./components/sections/Contact/Contact";
import Hero from "./components/sections/Hero/Hero";
import Projects from "./components/sections/Projects/Projects";

function App() {


  return (
    <div className="container mx-auto">
      <Navbar />
      <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
