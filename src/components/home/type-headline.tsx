const LINE_ONE = "Your business deserves";
const LINE_TWO = "better than a basic website.";

export function TypeHeadline() {
  return (
    <h1 className="font-mono text-[1.35rem] leading-[1.22] tracking-[-0.045em] text-fg sm:text-[1.85rem] lg:text-[2.45rem]">
      <span className="block text-pretty">{LINE_ONE}</span>
      <span className="mt-1 block bg-gradient-to-r from-accent via-violet-500 to-cyan-500 bg-clip-text text-pretty text-transparent">
        {LINE_TWO}
      </span>
    </h1>
  );
}
