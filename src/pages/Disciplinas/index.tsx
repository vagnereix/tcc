import styles from './styles.module.scss'

export function Disciplinas() {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h1>Disciplinas</h1>
        <hr />
      </section>

      <div className={styles.disciplinas}>Disciplina x</div>
      <div className={styles.disciplinas}>Disciplina x</div>
      <div className={styles.disciplinas}>Disciplina x</div>
      <div className={styles.disciplinas}>Disciplina x</div>

      <div className={styles.disciplinas}>Disciplina x</div>
      <div className={styles.disciplinas}>Disciplina x</div>
    </main>
  )
}