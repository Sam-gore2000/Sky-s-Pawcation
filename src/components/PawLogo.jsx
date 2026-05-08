export default function PawLogo({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill="#25CDF4" />
      {/* Paw pad - main */}
      <ellipse cx="50" cy="60" rx="18" ry="15" fill="white" />
      {/* Toe pads */}
      <ellipse cx="31" cy="45" rx="8" ry="9" fill="white" />
      <ellipse cx="69" cy="45" rx="8" ry="9" fill="white" />
      <ellipse cx="42" cy="37" rx="7.5" ry="8.5" fill="white" />
      <ellipse cx="58" cy="37" rx="7.5" ry="8.5" fill="white" />
    </svg>
  )
}
