import { useState } from "react";
import timelineData from "../data/timelineData";
import { AnimatePresence, motion } from "framer-motion";

function Timeline() {
  const [activeStage, setActiveStage] = useState(0);
  const active = timelineData[activeStage];

  return (
    <section id="journey" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          
          {/* Left Side: Section Intro */}
          <div className="lg:sticky lg:top-32 h-fit">
            <p className="font-bold uppercase tracking-[0.25em] text-[var(--accent)] text-xs md:text-sm mb-4">
              Journey Timeline
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              From learning code to building real solutions.
            </h2>
            <p className="text-base md:text-lg text-[var(--text)]/70 leading-relaxed max-w-xl">
              Each stage of my degree hasn't just introduced new tech stacks—it has completely changed how I break down problems and design systems.
            </p>
          </div>

          {/* Right Side: */}
          <div className="w-full border border-[var(--accent)]/20 rounded-lg bg-[#121318]/80 backdrop-blur-sm overflow-hidden transition-colors duration-500 hover:border-[var(--accent)]/40 shadow-2xl flex flex-col">
            
            {/* Terminal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#6B665E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#6B665E]" />
              </div>
              <span className="text-[var(--text)]/40 text-xs font-mono font-medium">
                workspace/journey
              </span>
            </div>

            {/* Layout Grid:   */}
            <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] flex-1 p-0">
              
              {/* Stage Nav Sidebar */}
              <div className="border-b md:border-b-0 md:border-r border-white/10 p-4 sm:p-6 flex flex-row md:flex-col gap-3 overflow-x-auto no-scrollbar bg-white/[0.01]">
                {timelineData.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveStage(index)}
                    className={`
                      shrink-0 md:shrink-auto w-[160px] md:w-full text-left rounded-xl p-4
                      border transition-all duration-300 cursor-pointer
                      ${
                        activeStage === index
                          ? "border-white/5 bg-white/[0.04]"
                          : "border-transparent hover:bg-white/[0.02]"
                      }
                    `}
                  >
                    <p className="text-[var(--text)]/40 font-mono text-xs tracking-widest mb-1.5">
                      {item.id}
                    </p>
                    <h3 className="text-sm md:text-base font-semibold text-white/90">
                      {item.stage}
                    </h3>
                  </button>
                ))}
              </div>

              {/* Content Panel */}
              <div className="p-6 sm:p-8 flex flex-col justify-center min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="h-full flex flex-col gap-6"
                  >
                    {/* Main Description (Styled like the Code Block area) */}
                    <div className="border-l-2 border-[var(--accent)]/40 pl-6 space-y-3">
                      <p className="text-[var(--text)]/30 font-mono text-xs select-none">
                        // {active.stage}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-white/90">
                        {active.title}
                      </h3>
                      <p className="text-sm md:text-base text-[var(--text)]/70 leading-relaxed pt-2">
                        {active.description}
                      </p>
                    </div>

                    <div className="flex-grow"></div>

                    {/* Lesson Box (Styled exactly like Desk Note) */}
                    <div className="rounded-xl border border-dashed border-[var(--accent)]/30 bg-[var(--accent)]/5 p-5 mt-4">
                      <p className="text-[var(--accent)] tracking-[0.25em] text-xs font-bold uppercase mb-2">
                        Key Lesson
                      </p>
                      <p className="text-[var(--text)]/75 leading-relaxed text-sm">
                        {active.lesson}
                      </p>
                    </div>
                    
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Timeline;