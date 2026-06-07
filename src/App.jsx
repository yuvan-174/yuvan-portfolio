import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
function App() {
  return (
    <div className="bg-[var(--background)] text-[var(--text)] min-h-screen">
      <Navbar />
      <Hero />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App