import { Link } from 'react-router-dom'
import styles from './CardConteudo.module.css'

export default function CardConteudo({ titulo, descricao, icon, temas, cor }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon} style={{ background: cor }}>
        {icon}
      </div>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descricao}>{descricao}</p>
      <div className={styles.topics}>
        {temas.slice(0, 3).map((tema, idx) => (
          <span key={idx} className={styles.topic}>{tema}</span>
        ))}
      </div>
      <Link to={`/conteudos/${titulo.toLowerCase()}`} className={styles.button}>
        Estudar Agora
      </Link>
    </div>
  )
}