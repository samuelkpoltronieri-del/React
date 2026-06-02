// components/CardQuestao.jsx
import { useState } from 'react';
import styles from './CardQuestao.module.css';

export default function CardQuestao({ questao }) {
  const [mostrarGabarito, setMostrarGabarito] = useState(false);

  return (
    <div className={styles.card}>
      <p className={styles.enunciado}>{questao.questao}</p>
      {questao.imgq && <img src={questao.imgq} alt="figura" className={styles.img} />}
      <div className={styles.alternativas}>
        {questao.alternativas?.map((alt, idx) => (
          <div key={idx} className={styles.alternativa}>
            {alt.enunciado}
          </div>
        ))}
      </div>
      <button onClick={() => setMostrarGabarito(!mostrarGabarito)} className={styles.btnGabarito}>
        Ver gabarito
      </button>
      {mostrarGabarito && (
        <div className={styles.gabarito}>
          ✅ {questao.gabarito}
          <p className={styles.comentario}>{questao.comentario}</p>
        </div>
      )}
    </div>
  );
}