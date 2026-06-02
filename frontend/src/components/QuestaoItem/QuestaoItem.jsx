// src/components/QuestaoItem/QuestaoItem.jsx
import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './QuestaoItem.module.css';

export default function QuestaoItem({ 
  questao,      // Texto do enunciado
  materia,      // Nome do tema (nome_T)
  vestibular,   // Nome do vestibular (nome_V)
  alternativas, // Array com os enunciados das alternativas
  validacao,    // 's' ou 'n' para saber qual é a correta
  comentario,   // Comentário/gabarito
  imagem,       // URL da imagem (imgQ)
  dificuldade   // Nível de dificuldade
}) {
  const [revelada, setRevelada] = useState(false);
  const [imagemCarregada, setImagemCarregada] = useState(true);

  // Encontrar o índice da alternativa correta
  const indiceCorreto = alternativas.findIndex((_, idx) => validacao === 's' && idx === parseInt(validacao));

  return (
    <div className={styles.card}>
      <div className={styles.headerInfo}>
        <span className={styles.badgeVestibular}>{vestibular}</span>
        <span className={styles.badgeMateria}>{materia}</span>
        <span className={`${styles.badgeDificuldade} ${styles[dificuldade?.toLowerCase() || 'medio']}`}>
          {dificuldade || 'Médio'}
        </span>
      </div>

      <p className={styles.enunciado}>{questao}</p>

      {/* Exibir imagem se existir */}
      {imagem && imagem.trim() !== '' && imagemCarregada && (
        <div className={styles.imagemContainer}>
          <img 
            src={imagem} 
            alt="Ilustração da questão" 
            className={styles.imagemQuestao}
            onError={() => setImagemCarregada(false)}
          />
        </div>
      )}
      
      <ul className={styles.alternativas}>
        {alternativas.map((alt, index) => (
          <li 
            key={index}
            className={`${styles.item} ${revelada && index === indiceCorreto ? styles.correta : ''}`}
          >
            <strong>{String.fromCharCode(65 + index)})</strong> {alt}
          </li>
        ))}
      </ul>

      {revelada && comentario && (
        <div className={styles.comentario}>
          <strong>📝 Comentário:</strong> {comentario}
        </div>
      )}

      <Button variant="secondary" onClick={() => setRevelada(!revelada)}>
        {revelada ? 'Ocultar Resposta' : 'Revelar Resposta'}
      </Button>
    </div>
  );
}