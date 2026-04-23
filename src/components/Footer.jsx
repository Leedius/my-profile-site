import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.bracket}>&lt;</span>
          dev
          <span className={styles.bracket}>/&gt;</span>
        </a>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Leedius. All rights reserved.
        </p>
        <a href="#" className={styles.top}>
          ↑ 맨 위로
        </a>
      </div>
    </footer>
  )
}
