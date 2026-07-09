const LavgelLogo = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-baseline font-outfit font-bold tracking-tight leading-none ${className}`}>
    <span className="relative">
      <span className="absolute -inset-x-1 inset-y-0 bg-secondary/60 -rotate-6 rounded-sm scale-110" />
      <span className="relative text-primary-foreground">lav</span>
    </span>
    <span className="relative z-10 text-accent">gel</span>
    <span className="relative z-10 text-accent">.</span>
  </span>
);

export default LavgelLogo;
