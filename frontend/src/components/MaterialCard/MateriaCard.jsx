import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MateriaCard.module.css';

export default function MateriaCard({ id, nome, descricao, cor }) {
  return (
    <div className={styles.card} style={{ borderTop: `4px solid ${cor}` }}>
      <h3 className={styles.titulo}>{nome}</h3>
      <p className={styles.descricao}>{descricao}</p>
      <Link to={`/questoes?materia=${id}`} className={styles.link}>
        Ver Questões
      </Link>
    </div>
  );
}
