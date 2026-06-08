import { useState } from "react";
import timelineData from "../data/timelineData";
import { AnimatePresence, motion } from "framer-motion";
function Timeline() {
  const [activeStage, setActiveStage] = useState(0);
  const active = timelineData[activeStage];

  return (
    <section id="journey" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20">
          {/* Left Side */}
          <div className="lg:sticky lg:top-32 h-fit">
            <p className="uppercase tracking-[0.25em] text-[var(--accent)] mb-4">
              Journey Timeline
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              From learning code to building real solutions.
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              Every stage taught me something different — not just new
              technologies, but new ways of thinking about problems, systems,
              and software.
            </p>
          </div>

          <div
            className="rounded-lg border border-white/10 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="grid grid-cols-[200px_1fr]">
              {/* Stage Nav */}
              <div className="border-r border-white/10 p-3 flex flex-col gap-2">
                {timelineData.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveStage(index)}
                    className={`
                      w-full text-left rounded-lg px-4 py-4
                      border transition-all duration-300 cursor-pointer
                      ${
                        activeStage === index
                          ? "border-[var(--accent)]/50 bg-[var(--accent)]/10"
                          : "border-transparent hover:border-[var(--accent)]/20 hover:bg-white/[0.03]"
                      }
                    `}
                  >
                    <p className="text-[var(--accent)] font-mono text-xs tracking-[0.2em] mb-2">
                      {item.id}
                    </p>
                    <h3 className="text-base font-bold leading-snug">
                      {item.stage}
                    </h3>
                  </button>
                ))}
              </div>

              {/* Content Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-[var(--accent)] font-bold text-s tracking-[0.2em] mb-4">
                      {active.stage}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                      {active.title}
                    </h3>
                    <p className="font-mono text-sm text-white/60 leading-relaxed">
                      {active.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="font-mono text-sm text-white/40">
                      {active.lesson}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
