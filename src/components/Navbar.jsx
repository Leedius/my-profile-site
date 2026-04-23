import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoBracket}>&lt;</span>
          dev
          <span className={styles.logoBracket}>/&gt;</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.cta}
            onClick={() => setMenuOpen(false)}
          >
            Hire me
          </a>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.burgerLineTop : ''} />
          <span className={menuOpen ? styles.burgerLineMid : ''} />
          <span className={menuOpen ? styles.burgerLineBot : ''} />
        </button>
      </div>
    </header>
  )
}
