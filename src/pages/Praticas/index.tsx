import Image from 'next/image'

import styles from './styles.module.scss'

export function Praticas() {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h1>Prática Laboratorial EC</h1>
        <hr />
      </section>

      <figure className={styles.camera}>
        <Image src='/assets/useravatar.jpg' width={220} height={220} alt="Câmera do aluno" />
      </figure>

      <section className={styles.buttons}>
        <button type="button" className={styles.pratica}>Btn x</button>
        <button type="button" className={styles.pratica}>Btn x</button>
        <button type="button" className={styles.pratica}>Btn x</button>
        <button type="button" className={styles.pratica}>Btn x</button>
      </section>
    </main>
  )
}