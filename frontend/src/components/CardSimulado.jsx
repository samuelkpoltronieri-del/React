import { useState } from 'react'
import styles from './CardSimulado.module.css'

export default function CardSimulado({ simulado, onStart }) {
  const [hover, setHover] = useState(false)

  return (
    <div 
      className={styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.header}>
        <h3>{simulado.nome}</h3>
        <span className={styles.questoes}>{simulado.totalQuestoes} questões</span>
      </div>
      <div className={styles.vestibulares}>
        {simulado.vestibulares.map((v, idx) => (
          <span key={idx} className={styles.vestibular}>{v}</span>
        ))}
      </div>
      <button 
        className={`${styles.button} ${hover ? styles.buttonHover : ''}`}
        onClick={() => onStart(simulado)}
      >
        Iniciar Simulado
      </button>
    </div>
  )
}