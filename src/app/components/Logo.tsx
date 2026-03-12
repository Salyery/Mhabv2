export function Logo({ className = "", iconOnly = false, disableHover = false }: { className?: string, iconOnly?: boolean, disableHover?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`overflow-visible ${disableHover ? '' : 'group'}`}>
          <style>
            {`
              @keyframes drawHexagon {
                0% { stroke-dasharray: 100; stroke-dashoffset: 100; opacity: 0; }
                5% { opacity: 1; }
                100% { stroke-dasharray: 100; stroke-dashoffset: 0; opacity: 1; }
              }
              @keyframes fadeScaleIn {
                0% { opacity: 0; transform: scale(0.5) rotate(-15deg); }
                100% { opacity: 1; transform: scale(1) rotate(0deg); }
              }
              .logo-outer-path {
                animation: drawHexagon 3.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
              }
              .logo-inner-elements {
                transform-origin: 16px 16px;
                opacity: 0;
                animation: fadeScaleIn 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s forwards;
              }
              .logo-hover-spin {
                transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
              }
              .group:hover .logo-hover-spin {
                transform: rotate(90deg);
              }
            `}
          </style>

          {/* Outer hexagon */}
          <path className={`logo-outer-path ${disableHover ? '' : 'logo-hover-spin'}`} style={{ transformOrigin: '16px 16px' }} d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          
          {/* Inner geometric pattern */}
          <g className="logo-inner-elements">
            <path d="M16 10L22 13.5V20.5L16 24L10 20.5V13.5L16 10Z" fill="url(#logo-gradient)" opacity="0.2"/>
            <circle cx="16" cy="16" r="3" fill="url(#logo-gradient)"/>
            <line x1="16" y1="10" x2="16" y2="13" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="16" y1="19" x2="16" y2="24" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="10" y1="13.5" x2="13" y2="15" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="19" y1="17" x2="22" y2="18.5" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
          
          <defs>
            <linearGradient id="logo-gradient" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA">
                <animate attributeName="stop-color" values="#60A5FA;#A78BFA;#EC4899;#60A5FA" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="0.5" stopColor="#A78BFA">
                <animate attributeName="stop-color" values="#A78BFA;#EC4899;#60A5FA;#A78BFA" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="1" stopColor="#EC4899">
                <animate attributeName="stop-color" values="#EC4899;#60A5FA;#A78BFA;#EC4899" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      {!iconOnly && (
        <span className="font-semibold tracking-tight" style={{ fontSize: '20px', letterSpacing: '-0.02em' }}>
          Media<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">HUB</span>
        </span>
      )}
    </div>
  );
}
