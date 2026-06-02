// pages/Home.jsx
import { useEffect, useState } from 'react';
import { fetchQuestoesPorVestibular } from '../services/api';
import CardQuestao from '../components/CardQuestao';
import styles from './Home.module.css';

export default function Home() {
  const [questoes, setQuestoes] = useState([]);
  const [filtro, setFiltro] = useState('ENEM');

  useEffect(() => {
    fetchQuestoesPorVestibular(filtro).then(setQuestoes);
  }, [filtro]);

  return (
    <div className={styles.container}>
      <div className={styles.filtros}>
        {['ENEM', 'FUVEST', 'UNICAMP'].map(v => (
          <button key={v} onClick={() => setFiltro(v)} className={v === filtro ? styles.active : ''}>
            {v}
          </button>
        ))}
      </div>
      <div className={styles.lista}>
        {questoes.map((q, idx) => (
          <CardQuestao key={idx} questao={q} />
        ))}
      </div>
    </div>
  );
}