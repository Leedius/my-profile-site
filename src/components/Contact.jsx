import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">
          함께 <span>일해요</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.info}>
            <p className={styles.infoText}>
              새로운 프로젝트나 기회에 대해 언제든지 연락주세요.
              빠른 시일 내에 답장 드리겠습니다.
            </p>

            <div className={styles.contactItems}>
              <a href="mailto:hello@example.com" className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <div>
                  <div className={styles.contactLabel}>이메일</div>
                  <div className={styles.contactValue}>hello@example.com</div>
                </div>
              </a>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <div className={styles.contactLabel}>위치</div>
                  <div className={styles.contactValue}>서울, 대한민국</div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⏰</span>
                <div>
                  <div className={styles.contactLabel}>응답 시간</div>
                  <div className={styles.contactValue}>24시간 이내</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            {sent ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>🎉</span>
                <h3>메시지를 보냈습니다!</h3>
                <p>곧 연락 드리겠습니다.</p>
                <button
                  className={styles.resetBtn}
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                >
                  다시 보내기
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>이름</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      required
                      className={styles.input}
                    />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>이메일</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      required
                      className={styles.input}
                    />
                  </label>
                </div>
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>메시지</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="프로젝트 아이디어나 협업 제안을 알려주세요..."
                    required
                    rows={5}
                    className={styles.textarea}
                  />
                </label>
                <button type="submit" className={styles.submit}>
                  메시지 보내기 →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
