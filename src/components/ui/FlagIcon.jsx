const FlagIcon = ({ country, size = "64" }) => {
  const flags = {
    GB: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width={size} height={size/2}>
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-15 h30 z"/>
        </clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
      </svg>
    ),
    BD: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width={size} height={size * 0.6}>
        <rect fill="#006a4e" width="1000" height="600"/>
        <circle fill="#f42a41" cx="450" cy="300" r="200"/>
      </svg>
    ),
    JP: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width={size} height={size * 0.67}>
        <rect fill="#fff" width="900" height="600"/>
        <circle fill="#bc002d" cx="450" cy="300" r="180"/>
      </svg>
    )
  }

  return (
    <div className="inline-flex items-center justify-center">
      {flags[country] || <span className="text-4xl">🌍</span>}
    </div>
  )
}

export default FlagIcon
