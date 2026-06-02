import { useState } from 'react'
import CardSimulado from '../components/CardSimulado'
import styles from './Simulados.module.css'

export default function Simulados() {
  const [simulados, setSimulados] = useState([
    {
      id: 1,
      nome: 'Simulado ENEM Completo',
      totalQuestoes: 45,
      vestibulares: ['ENEM']
    },
    {
      id: 2,
      nome: 'Simulado FUVEST',
      totalQuestoes: 30,
      vestibulares: ['FUVEST']
    },
    {
      id: 3,
      nome: 'Simulado UNICAMP',
      totalQuestoes: 25,
      vestibulares: ['UNICAMP']
    },
    {
      id: 4,
      nome: 'Simulado Misto',
      totalQuestoes: 40,
      vestibulares: ['ENEM', 'FUVEST', 'UNICAMP']
    }
  ])

  const handleStartSimulado = (simulado) => {
    alert(`Iniciando ${simulado.nome} com ${simulado.totalQuestoes} questões!`)
    // Aqui você pode implementar a lógica para iniciar o simulado
    // Por exemplo: navegar para uma página de simulado com as questões
  }

  return (
    <div className={styles.simulados}>
      <div className={styles.header}>
        <h1>Simulados</h1>
        <p>Teste seus conhecimentos com nossos simulados personalizados</p>
      </div>

      <div className={styles.simuladosGrid}>
        {simulados.map((simulado) => (
          <CardSimulado
            key={simulado.id}
            simulado={simulado}
            onStart={handleStartSimulado}
          />
        ))}
      </div>

      <div className={styles.info}>
        <div className={styles.infoCard}>
          <h3>📊 Como funciona?</h3>
          <p>Os simulados são compostos por questões reais de vestibulares anteriores</p>
        </div>
        <div className={styles.infoCard}>
          <h3>⏱️ Tempo sugerido</h3>
          <p>Aproximadamente 3 minutos por questão</p>
        </div>
        <div className={styles.infoCard}>
          <h3>🎯 Objetivo</h3>
          <p>Simular as condições reais da prova para melhor preparação</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© 2026 SESI Vinhedo - CE 242. Todos os direitos reservados.</p>
        <p>Desenvolvido por alunos da Instituição SESI Vinhedo-Ce242.</p>
      </footer>
    </div>
  )
}