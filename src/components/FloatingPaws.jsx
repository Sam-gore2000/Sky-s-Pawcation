// Cloud-style SVG paw (matching the uploaded reference image)
export function CloudPawSVG({ size = 80, opacity = 0.2, className = '' }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      {/* Main pad - large fluffy cloud shape */}
      <ellipse cx="60" cy="78" rx="28" ry="26" fill="white" />
      <ellipse cx="45" cy="68" rx="16" ry="14" fill="white" />
      <ellipse cx="75" cy="68" rx="16" ry="14" fill="white" />
      <ellipse cx="60" cy="60" rx="22" ry="18" fill="white" />
      {/* Toe pads - fluffy clouds */}
      <ellipse cx="34" cy="44" rx="13" ry="15" fill="white" />
      <ellipse cx="28" cy="38" rx="10" ry="11" fill="white" />
      <ellipse cx="40" cy="34" rx="10" ry="12" fill="white" />
      <ellipse cx="50" cy="32" rx="12" ry="14" fill="white" />
      <ellipse cx="44" cy="24" rx="9" ry="10" fill="white" />
      <ellipse cx="56" cy="22" rx="10" ry="11" fill="white" />
      <ellipse cx="70" cy="32" rx="12" ry="14" fill="white" />
      <ellipse cx="64" cy="22" rx="9" ry="10" fill="white" />
      <ellipse cx="76" cy="24" rx="9" ry="10" fill="white" />
      <ellipse cx="86" cy="44" rx="13" ry="15" fill="white" />
      <ellipse cx="80" cy="34" rx="10" ry="12" fill="white" />
      <ellipse cx="92" cy="38" rx="10" ry="11" fill="white" />
    </svg>
  )
}

// All paw positions — spread across full hero
const PAW_POSITIONS = [
  { x:'4%',  y:'8%',  size:90,  opacity:0.22, cls:'paw-float-1', rotate:-15 },
  { x:'88%', y:'5%',  size:70,  opacity:0.18, cls:'paw-float-2', rotate:20  },
  { x:'18%', y:'72%', size:110, opacity:0.15, cls:'paw-float-3', rotate:-8  },
  { x:'78%', y:'68%', size:85,  opacity:0.20, cls:'paw-float-4', rotate:30  },
  { x:'48%', y:'3%',  size:60,  opacity:0.16, cls:'paw-float-5', rotate:5   },
  { x:'92%', y:'38%', size:75,  opacity:0.19, cls:'paw-float-6', rotate:-20 },
  { x:'2%',  y:'42%', size:65,  opacity:0.17, cls:'paw-float-7', rotate:12  },
  { x:'60%', y:'78%', size:95,  opacity:0.14, cls:'paw-float-8', rotate:-25 },
  { x:'30%', y:'15%', size:55,  opacity:0.20, cls:'paw-float-9', rotate:18  },
  { x:'72%', y:'20%', size:80,  opacity:0.16, cls:'paw-float-10',rotate:-10 },
  { x:'55%', y:'55%', size:50,  opacity:0.12, cls:'paw-float-1', rotate:35  },
  { x:'10%', y:'55%', size:72,  opacity:0.18, cls:'paw-float-3', rotate:-30 },
]

export default function FloatingPaws() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PAW_POSITIONS.map((p, i) => (
        <div
          key={i}
          className={`absolute ${p.cls}`}
          style={{ left: p.x, top: p.y, transform: `rotate(${p.rotate}deg)` }}
        >
          <CloudPawSVG size={p.size} opacity={p.opacity} />
        </div>
      ))}
    </div>
  )
}
