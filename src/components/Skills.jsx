import styles from './Skills.module.css'

const categories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Next.js', level: 80 },
      { name: 'CSS / Tailwind', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 72 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'REST / GraphQL', level: 78 },
    ],
  },
  {
    title: 'Tooling & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 60 },
      { name: 'Vite / Webpack', level: 82 },
      { name: 'CI/CD', level: 68 },
    ],
  },
]

const techBadges = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
  'Node.js', 'GraphQL', 'Vite', 'Git',
  'Figma', 'Storybook', 'Jest', 'Docker',
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
