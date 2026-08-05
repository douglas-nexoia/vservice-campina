const LavgelLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 shrink-0 ${className}`}>
    <div className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9 shrink-0">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Orange V */}
        <path d="M16 22L42 78H58L84 22H67L50 58L33 22H16Z" fill="#FF6A00" />
        {/* Lightning Bolt */}
        <path d="M52 32L38 58H50L46 78L62 52H50L54 32H52Z" fill="#FF6A00" />
        {/* Outer Plug Arc */}
        <path d="M68 26C80 36 83 56 73 71C66 81 50 85 38 80" stroke="#E5E5E5" strokeWidth="7" strokeLinecap="round" />
        <rect x="65" y="16" width="6" height="12" rx="2" fill="#E5E5E5" transform="rotate(25 65 16)" />
        <rect x="75" y="21" width="6" height="12" rx="2" fill="#E5E5E5" transform="rotate(25 75 21)" />
      </svg>
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-lg md:text-xl font-black tracking-wider text-white font-outfit uppercase leading-none">
        VSERVICE
      </span>
    </div>
  </div>
);

export default LavgelLogo;
