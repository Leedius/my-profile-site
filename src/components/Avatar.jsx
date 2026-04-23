import styles from './Avatar.module.css'

export default function Avatar() {
  return (
    <div className={styles.avatarFrame}>
      <div className={styles.ring} />
      <div className={styles.imgWrap}>
        <svg
          className={styles.placeholder}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="프로필 사진"
        >
          <defs>
            <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a1a24" />
              <stop offset="100%" stopColor="#22222f" />
            </linearGradient>
            <linearGradient id="faceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5c9a0" />
              <stop offset="100%" stopColor="#e8a97e" />
            </linearGradient>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c6dfa" />
              <stop offset="100%" stopColor="#5a4de0" />
            </linearGradient>
            <clipPath id="circle">
              <circle cx="100" cy="100" r="100" />
            </clipPath>
          </defs>

          <circle cx="100" cy="100" r="100" fill="url(#bgGrad)" />

          <g clipPath="url(#circle)">
            {/* body */}
            <ellipse cx="100" cy="210" rx="72" ry="52" fill="url(#bodyGrad)" />

            {/* neck */}
            <rect x="87" y="138" width="26" height="30" rx="4" fill="#e8a97e" />

            {/* head */}
            <ellipse cx="100" cy="108" rx="44" ry="46" fill="url(#faceGrad)" />

            {/* hair */}
            <ellipse cx="100" cy="68" rx="44" ry="20" fill="#2d1f0e" />
            <rect x="56" y="64" width="12" height="30" rx="6" fill="#2d1f0e" />
            <rect x="132" y="64" width="12" height="30" rx="6" fill="#2d1f0e" />

            {/* eyes */}
            <ellipse cx="85" cy="110" rx="7" ry="7.5" fill="#fff" />
            <ellipse cx="115" cy="110" rx="7" ry="7.5" fill="#fff" />
            <circle cx="86.5" cy="111" r="4" fill="#1a0e00" />
            <circle cx="116.5" cy="111" r="4" fill="#1a0e00" />
            <circle cx="88" cy="109.5" r="1.5" fill="#fff" />
            <circle cx="118" cy="109.5" r="1.5" fill="#fff" />

            {/* eyebrows */}
            <path d="M78 101 Q85 97 92 101" stroke="#2d1f0e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M108 101 Q115 97 122 101" stroke="#2d1f0e" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* nose */}
            <ellipse cx="100" cy="122" rx="4" ry="3" fill="#d4956b" />

            {/* smile */}
            <path d="M88 132 Q100 142 112 132" stroke="#c47d52" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* laptop hint */}
            <rect x="46" y="185" width="108" height="6" rx="3" fill="#56cfb2" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* floating code badges */}
      <div className={`${styles.floatBadge} ${styles.floatBadge1}`}>
        &lt;React /&gt;
      </div>
      <div className={`${styles.floatBadge} ${styles.floatBadge2}`}>
        TypeScript
      </div>
      <div className={`${styles.floatBadge} ${styles.floatBadge3}`}>
        Node.js
      </div>
    </div>
  )
}
