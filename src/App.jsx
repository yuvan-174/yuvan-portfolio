import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import DotGrid from "./components/DotGrid"; 

function App() {
  return (
    <div className="relative min-h-screen text-[var(--text)] w-full">
      <div className="fixed inset-0 z-[-10]">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#2F293A" 
          activeColor="#a3703e" 
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <main className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>

    </div>
  );
}

export default App;