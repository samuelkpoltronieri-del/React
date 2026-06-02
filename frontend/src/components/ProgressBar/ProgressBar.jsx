import React from 'react';
import styles from './ProgressBar.module.css';

export default function ProgressBar({ atual, total }) {
  const progresso = (atual / total) * 100;
  
  return (
    <div className={styles.container}>
      <span className={styles.texto}>Questão {atual} de {total}</span>
      <div className={styles.barra}>
        <div className={styles.preenchimento} style={{ width: `${progresso}%` }}></div>
      </div>
    </div>
  );
}
