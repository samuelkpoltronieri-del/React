import { useEffect, useState } from 'react'
import { fetchQuestoes, fetchQuestoesPorTema, fetchQuestoesPorVestibular } from '../services/api'
import CardQuestao from '../components/CardQuestao'
import styles from './Questoes.module.css'

export default function Questoes() {
  const [questoes, setQuestoes] = useState([])
  const [filtroTema, setFiltroTema] = useState('')
  const [filtroVestibular, setFiltroVestibular] = useState('')
  const [loading, setLoading] = useState(true)
  const [temas, setTemas] = useState([])
  const [vestibulares, setVestibulares] = useState([])

  useEffect(() => {
    loadQuestoes()
    loadFilters()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [filtroTema, filtroVestibular])

  const loadQuestoes = async () => {
    try {
      const data = await fetchQuestoes()
      setQuestoes(data)
    } catch (error) {
      console.error('Erro ao carregar questões:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadFilters = async () => {
    try {
      // Extrair temas e vestibulares únicos das questões
      const data = await fetchQuestoes()
      const temasUnicos = [...new Set(data.map(q => q.nome_t).filter(t => t && t !== ' '))]
      const vestibularesUnicos = [...new Set(data.map(q => q.nome_v).filter(v => v && v !== ' '))]
      setTemas(temasUnicos)
      setVestibulares(vestibularesUnicos)
    } catch (error) {
      console.error('Erro ao carregar filtros:', error)
    }
  }

  const applyFilters = async () => {
    setLoading(true)
    try {
      let data
      if (filtroTema && filtroVestibular) {
        // Aplicar ambos os filtros
        const dadosTema = await fetchQuestoesPorTema(filtroTema)
        data = dadosTema.filter(q => q.nome_v === filtroVestibular)
      } else if (filtroTema) {
        data = await fetchQuestoesPorTema(filtroTema)
      } else if (filtroVestibular) {
        data = await fetchQuestoesPorVestibular(filtroVestibular)
      } else {
        data = await fetchQuestoes()
      }
      setQuestoes(data)
    } catch (error) {
      console.error('Erro ao aplicar filtros:', error)
    } finally {
      setLoading(false)
    }
  }

  const limparFiltros = () => {
    setFiltroTema('')
    setFiltroVestibular('')
  }

  return (
    <div className={styles.questoes}>
      <div className={styles.header}>
        <h1>Banco de Questões</h1>
        <p>{questoes.length} questões disponíveis</p>
      </div>

      <div className={styles.filtros}>
        <select value={filtroTema} onChange={(e) => setFiltroTema(e.target.value)}>
          <option value="">Todos os Temas</option>
          {temas.map((tema, idx) => (
            <option key={idx} value={tema}>{tema}</option>
          ))}
        </select>

        <select value={filtroVestibular} onChange={(e) => setFiltroVestibular(e.target.value)}>
          <option value="">Todos os Vestibulares</option>
          {vestibulares.map((vest, idx) => (
            <option key={idx} value={vest}>{vest}</option>
          ))}
        </select>

        {(filtroTema || filtroVestibular) && (
          <button onClick={limparFiltros} className={styles.limparBtn}>
            Limpar Filtros
          </button>
        )}
      </div>

      {loading ? (
        <div className={styles.loading}>Carregando questões...</div>
      ) : (
        <div className={styles.questoesList}>
          {questoes.map((q, idx) => (
            <CardQuestao key={idx} questao={q} numero={idx + 1} />
          ))}
        </div>
      )}
    </div>
  )
}