import React from "react";
import skillsData from "../data/skillsData";

function Skills() {
  return (
    <section id="skills" className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-10">
          <p className="uppercase tracking-[0.25em] text-[var(--accent)] text-sm font-medium mb-4">
            Current Stack
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl">
            Technologies I use to design, build, and deploy applications.
          </h2>

          <p className="text-lg text-white/70 max-w-2xl">
            A collection of technologies and tools that help me turn ideas into
            software.
          </p>
        </div>

        {/* Skills Container */}
        <div
          className="
            border border-[var(--accent)]/20
            rounded-lg
            p-6 md:p-10
            bg-[#121318]/80
            backdrop-blur-sm
            shadow-[0_0_60px_rgba(212,175,55,0.02)]
          "
        >

          {/* Terminal Header */}
          <div className="flex items-center gap-2 pb-6 mb-8 border-b border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />

            <span className="ml-auto text-sm text-white/40">
              workspace/toolkit
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {skillsData.map((category, index) => (
              <div
                key={index}
                className="
                  p-6
                  rounded-lg
                  border border-white/10
                  bg-white/[0.015]
                  hover:border-[var(--accent)]/30
                  transition-all duration-300
                "
              >

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  {category.icon && (
                    <category.icon
                      className="text-[var(--accent)] text-xl"
                    />
                  )}

                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">

                  {category.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="
                        flex items-center gap-2
                        px-3 py-2
                        rounded-lg
                        border border-white/10
                        bg-[#1A1B23]
                        transition-all duration-300
                        transform
                        hover:border-[var(--accent)]/50
                        hover:bg-[var(--accent)]/5
                        hover:-translate-y-0.5
                      "
                    >
                      {tech.icon && (
                        <tech.icon
                          style={{ color: tech.color }}
                          className="text-base"
                        />
                      )}

                      <span className="text-sm text-[var(--text)]">
                        {tech.name}
                      </span>
                    </div>
                  ))}

                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mt-6 pt-4 border-t border-white/10">
                  {category.description}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;