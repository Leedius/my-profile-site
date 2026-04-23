import styles from './Projects.module.css'

const projects = [
  {
    title: 'OrderFlow',
    desc: 'Spring Boot 기반 대용량 주문 처리 서버. 초당 5,000건 이상의 주문을 처리하는 비동기 파이프라인과 분산 트랜잭션 설계.',
    tags: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL'],
    color: '#7c6dfa',
    emoji: '📦',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'AuthGate',
    desc: 'JWT + OAuth2 기반 인증/인가 서비스. 멀티 테넌시 지원, Redis 세션 관리, 역할 기반 접근 제어(RBAC) 구현.',
    tags: ['Spring Security', 'JWT', 'Redis', 'OAuth2'],
    color: '#56cfb2',
    emoji: '🔐',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'DataPipeline',
    desc: '실시간 데이터 수집 및 집계 파이프라인. Kafka 스트리밍으로 이벤트를 처리하고 ElasticSearch에 색인하여 대시보드에 제공.',
    tags: ['Kotlin', 'Kafka', 'ElasticSearch', 'Docker'],
    color: '#f59e0b',
    emoji: '📊',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'CloudDeploy',
    desc: 'AWS 기반 무중단 배포 자동화 시스템. GitHub Actions + CodeDeploy 파이프라인으로 블루/그린 배포 및 자동 롤백 지원.',
    tags: ['AWS', 'GitHub Actions', 'Docker', 'Terraform'],
    color: '#ec4899',
    emoji: '🚀',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">
          주요 <span>프로젝트</span>
        </h2>

        <div className={styles.grid}>
          {projects.map((p) => (
            <article key={p.title} className={styles.card}>
              <div
                className={styles.cardTop}
                style={{ '--color': p.color }}
              >
                <span className={styles.emoji}>{p.emoji}</span>
                <div className={styles.links}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className={styles.iconLink}
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Demo"
                    className={styles.iconLink}
                  >
                    <LinkIcon />
                  </a>
                </div>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag} style={{ '--color': p.color }}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
