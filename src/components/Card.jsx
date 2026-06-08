function Card() {
  return (
    <div className="w-full max-w-lg bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-2xl px-1 relative">
      <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#D9A441]" />
          <div className="w-2 h-2 rounded-full bg-[#6B665E]" />
          <div className="w-2 h-2 rounded-full bg-[#6B665E]" />
        </div>
        <span className="text-[#F7EDF0]/40 text-sm font-medium">
          workspace/index
        </span>
      </div>

      <div className="p-5">
        <div className="border-l-2 border-[#855C32] pl-6 space-y-2 mb-10">
          <div className="flex gap-2">
            <span className="text-[#F7EDF0]/40">01</span>
            <p className="font-mono text-sm md:text-lg">
              <span className="text-[#D9A441]">const</span> focus =
              "reliable systems";
            </p>
          </div>

          <div className="flex gap-2">
            <span className="text-[#F7EDF0]/40">02</span>
            <p className="font-mono text-sm md:text-lg">
              <span className="text-[#D9A441]">let</span> curiosity =
              "always on";
            </p>
          </div>

          <div className="flex gap-2">
            <span className="text-[#F7EDF0]/40">03</span>
            <p className="font-mono text-sm md:text-lg">
              <span className="text-[#D9A441]">var</span>{" "}
              build(projects).with(intent);
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="border border-white/10 p-4">
            <p className="text-[#F7EDF0]/40 mb-2">Current mode</p>
            <h3 className="text-2xl font-semibold">Engineering</h3>
          </div>

          <div className="border border-white/10 p-4">
            <p className="text-[#F7EDF0]/40 mb-2">Signal</p>
            <h3 className="text-2xl font-semibold">Practical</h3>
          </div>
        </div>

        <div className="border border-dashed border-white/10 p-6">
          <p className="text-[#D9A441] tracking-[0.25em] text-sm uppercase mb-6">
            Desk Note
          </p>
          <p className="text-[#F7EDF0]/75 leading-relaxed text-sm md:text-lg">
            I like projects that force me to understand the system beneath the
            interface.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;