import styles from './About.module.css'

const stats = [
  { value: '3+', label: '년 경력' },
  { value: '20+', label: '완성 프로젝트' },
  { value: '10+', label: '협업 클라이언트' },
  { value: '99%', label: '고객 만족도' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">About Me</p>
        <div className={styles.grid}>
          <div className={styles.imgSide}>
            <div className={styles.imgCard}>
              <div className={styles.codeBlock}>
                <div className={styles.codeDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <pre className={styles.code}>{`const developer = {
  name: "Leedius",
  role: "Backend Dev",
  location: "서울, 대한민국",
  passion: [
    "Clean Architecture",
    "API Design",
    "Performance",
    "Open Source",
  ],
  coffee: true,
};`}</pre>
              </div>
            </div>
          </div>

          <div className={styles.textSide}>
            <h2 className="section-title">
              저에 대해 <span>조금</span> 더
            </h2>
            <p className={styles.desc}>
              서비스가 수만 명의 사용자를 감당할 수 있도록 안정적이고 확장 가능한
              백엔드 시스템을 설계하는 데 큰 보람을 느낍니다.
              클린 아키텍처와 도메인 주도 설계를 기반으로 유지보수하기 쉬운 코드를 추구합니다.
            </p>
            <p className={styles.desc}>
              새로운 기술을 배우는 것을 즐기며, 오픈소스 기여와 기술 블로그 작성을
              통해 커뮤니티와 지식을 나눕니다.
            </p>

            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
