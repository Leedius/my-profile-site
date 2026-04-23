import styles from './Skills.module.css'

const categories = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Spring Boot', level: 90 },
      { name: 'Kotlin', level: 72 },
      { name: 'Python', level: 68 },
    ],
  },
  {
    title: 'Database & Infra',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 85 },
      { name: 'Redis', level: 78 },
      { name: 'MongoDB', level: 65 },
    ],
  },
  {
    title: 'DevOps & Tooling',
    icon: '🛠️',
    skills: [
      { name: 'Docker / Kubernetes', level: 80 },
      { name: 'AWS (EC2, RDS, S3)', level: 75 },
      { name: 'Git / GitHub Actions', level: 92 },
      { name: 'Linux / Bash', level: 82 },
    ],
  },
]

const techBadges = [
  'Java', 'Spring Boot', 'Kotlin', 'JPA / Hibernate',
  'PostgreSQL', 'Redis', 'Docker', 'Kubernetes',
  'AWS', 'REST API', 'gRPC', 'Git',
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">
          기술 <span>스택</span>
        </h2>

        <div className={styles.categories}>
          {categories.map((cat) => (
            <div key={cat.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>
              <div className={styles.bars}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className={styles.barRow}>
                    <div className={styles.barMeta}>
                      <span className={styles.barName}>{skill.name}</span>
                      <span className={styles.barPct}>{skill.level}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        style={{ '--w': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.badges}>
          {techBadges.map((b) => (
            <span key={b} className={styles.badge}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
