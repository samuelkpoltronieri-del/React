import { useEffect, useState } from 'react'
import CardConteudo from '../components/CardConteudo'
import styles from './Conteudos.module.css'

export default function Conteudos() {
  const [conteudos, setConteudos] = useState([])

  useEffect(() => {
    // Dados dos conteúdos (você pode buscar do backend depois)
    const dadosConteudos = [
      {
        titulo: 'Porcentagem',
        descricao: 'Aprenda a calcular porcentagens de forma rápida e eficiente',
        icon: '%',
        cor: '#3B82F6',
        temas: ['Cálculo básico', 'Aumentos e descontos', 'Juros simples']
      },
      {
        titulo: 'Razão e Proporção',
        descricao: 'Domine as relações entre grandezas e proporcionalidade',
        icon: '📊',
        cor: '#10B981',
        temas: ['Razão', 'Proporção direta', 'Proporção inversa']
      },
      {
        titulo: 'Regra de Três',
        descricao: 'Resolva problemas com grandezas direta e inversamente proporcionais',
        icon: '3️⃣',
        cor: '#F59E0B',
        temas: ['Regra de três simples', 'Regra de três composta', 'Problemas práticos']
      },
      {
        titulo: 'Frações',
        descricao: 'Operações com frações e números racionais',
        icon: '½',
        cor: '#EF4444',
        temas: ['Operações básicas', 'Simplificação', 'Comparação']
      }
    ]
    setConteudos(dadosConteudos)
  }, [])

  return (
    <div className={styles.conteudos}>
      <div className={styles.header}>
        <h1>Conteúdos para Estudar</h1>
        <p>Escolha um tema e comece a aprender agora mesmo</p>
      </div>

      <div className={styles.conteudosGrid}>
        {conteudos.map((conteudo, idx) => (
          <CardConteudo key={idx} {...conteudo} />
        ))}
      </div>

      <div className={styles.dicas}>
        <h2>Dicas de Estudo</h2>
        <div className={styles.dicasList}>
          <div className={styles.dica}>
            <div className={styles.dicaIcon}>📝</div>
            <h3>Pratique diariamente</h3>
            <p>Resolva pelo menos 10 questões por dia para fixar o conteúdo</p>
          </div>
          <div className={styles.dica}>
            <div className={styles.dicaIcon}>⏰</div>
            <h3>Gerencie seu tempo</h3>
            <p>Cronometre suas resoluções para ganhar agilidade na prova</p>
          </div>
          <div className={styles.dica}>
            <div className={styles.dicaIcon}>📚</div>
            <h3>Revise os erros</h3>
            <p>Analise os erros e entenda onde você está tendo dificuldade</p>
          </div>
        </div>
      </div>
    </div>
  )
}