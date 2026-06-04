import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="bg-[var(--background)] text-[var(--text)] min-h-screen">
      <Navbar />
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App