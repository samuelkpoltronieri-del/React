const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export async function fetchQuestoes() {
  try {
    const response = await fetch(`${API_URL}/busca/questoes-tema`)
    if (!response.ok) throw new Error('Erro ao buscar questões')
    return await response.json()
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function fetchQuestoesPorTema(tema) {
  try {
    const response = await fetch(`${API_URL}/busca/questoes-tema/filtrar/${encodeURIComponent(tema)}`)
    if (!response.ok) throw new Error('Erro ao buscar questões por tema')
    return await response.json()
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function fetchQuestoesPorVestibular(vestibular) {
  try {
    const response = await fetch(`${API_URL}/busca/questoes-tema/vestibular/${encodeURIComponent(vestibular)}`)
    if (!response.ok) throw new Error('Erro ao buscar questões por vestibular')
    return await response.json()
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function fetchEstatisticas() {
  try {
    const questoes = await fetchQuestoes()
    const temas = [...new Set(questoes.map(q => q.nome_t).filter(t => t && t !== ' '))]
    const vestibulares = [...new Set(questoes.map(q => q.nome_v).filter(v => v && v !== ' '))]
    
    return {
      totalQuestoes: questoes.length,
      temas: temas,
      vestibulares: vestibulares
    }
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function fetchUltimasQuestoes(limit = 5) {
  try {
    const questoes = await fetchQuestoes()
    return questoes.slice(0, limit)
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}