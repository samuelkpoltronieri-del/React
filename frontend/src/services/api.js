// src/services/api.js
const API_BASE_URL = 'http://localhost:3000';

// Dados mock para teste local
const DADOS_MOCK = [
  // ========== PORCENTAGEM (4 questões) ==========
  {
    idq: 1,
    questao: 'Qual é 25% de 100?',
    nome_t: 'Porcentagem',
    nome_v: 'ENEM',
    enunciado: '25',
    validacao: 's',
    comentario: '25% de 100 = (25/100) × 100 = 25',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 1,
    questao: 'Qual é 25% de 100?',
    nome_t: 'Porcentagem',
    nome_v: 'ENEM',
    enunciado: '50',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 1,
    questao: 'Qual é 25% de 100?',
    nome_t: 'Porcentagem',
    nome_v: 'ENEM',
    enunciado: '75',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 1,
    questao: 'Qual é 25% de 100?',
    nome_t: 'Porcentagem',
    nome_v: 'ENEM',
    enunciado: '10',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 11,
    questao: 'Quanto é 50% de 200?',
    nome_t: 'Porcentagem',
    nome_v: 'PUC',
    enunciado: '100',
    validacao: 's',
    comentario: 'Metade de 200 é 100. 50% = 1/2. Então 200 ÷ 2 = 100',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 11,
    questao: 'Quanto é 50% de 200?',
    nome_t: 'Porcentagem',
    nome_v: 'PUC',
    enunciado: '150',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 11,
    questao: 'Quanto é 50% de 200?',
    nome_t: 'Porcentagem',
    nome_v: 'PUC',
    enunciado: '50',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 11,
    questao: 'Quanto é 50% de 200?',
    nome_t: 'Porcentagem',
    nome_v: 'PUC',
    enunciado: '200',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 21,
    questao: 'Um produto custa R$ 100 e recebe um desconto de 20%. Qual é o preço final?',
    nome_t: 'Porcentagem',
    nome_v: 'FUVEST',
    enunciado: 'R$ 80',
    validacao: 's',
    comentario: 'Desconto de 20% significa: 100 × (1 - 0.20) = 100 × 0.8 = 80',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 21,
    questao: 'Um produto custa R$ 100 e recebe um desconto de 20%. Qual é o preço final?',
    nome_t: 'Porcentagem',
    nome_v: 'FUVEST',
    enunciado: 'R$ 120',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 21,
    questao: 'Um produto custa R$ 100 e recebe um desconto de 20%. Qual é o preço final?',
    nome_t: 'Porcentagem',
    nome_v: 'FUVEST',
    enunciado: 'R$ 20',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 21,
    questao: 'Um produto custa R$ 100 e recebe um desconto de 20%. Qual é o preço final?',
    nome_t: 'Porcentagem',
    nome_v: 'FUVEST',
    enunciado: 'R$ 100',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },

  // ========== FRAÇÃO (4 questões) ==========
  {
    idq: 2,
    questao: 'Simplifique a fração 12/18',
    nome_t: 'Fração',
    nome_v: 'FUVEST',
    enunciado: '2/3',
    validacao: 's',
    comentario: 'MDC(12,18) = 6. Logo: 12÷6 = 2 e 18÷6 = 3. Resultado: 2/3',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 2,
    questao: 'Simplifique a fração 12/18',
    nome_t: 'Fração',
    nome_v: 'FUVEST',
    enunciado: '3/4',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 2,
    questao: 'Simplifique a fração 12/18',
    nome_t: 'Fração',
    nome_v: 'FUVEST',
    enunciado: '6/9',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 2,
    questao: 'Simplifique a fração 12/18',
    nome_t: 'Fração',
    nome_v: 'FUVEST',
    enunciado: '1/2',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 12,
    questao: 'Qual é o resultado de 1/2 + 1/3?',
    nome_t: 'Fração',
    nome_v: 'ENEM',
    enunciado: '5/6',
    validacao: 's',
    comentario: 'MMC(2,3) = 6. Então: 1/2 = 3/6 e 1/3 = 2/6. Logo: 3/6 + 2/6 = 5/6',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 12,
    questao: 'Qual é o resultado de 1/2 + 1/3?',
    nome_t: 'Fração',
    nome_v: 'ENEM',
    enunciado: '2/5',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 12,
    questao: 'Qual é o resultado de 1/2 + 1/3?',
    nome_t: 'Fração',
    nome_v: 'ENEM',
    enunciado: '1/6',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 12,
    questao: 'Qual é o resultado de 1/2 + 1/3?',
    nome_t: 'Fração',
    nome_v: 'ENEM',
    enunciado: '2/3',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 22,
    questao: 'Calcule: 3/4 × 2/5',
    nome_t: 'Fração',
    nome_v: 'UNICAMP',
    enunciado: '3/10',
    validacao: 's',
    comentario: 'Multiplicação de frações: (3×2)/(4×5) = 6/20 = 3/10',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 22,
    questao: 'Calcule: 3/4 × 2/5',
    nome_t: 'Fração',
    nome_v: 'UNICAMP',
    enunciado: '6/9',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 22,
    questao: 'Calcule: 3/4 × 2/5',
    nome_t: 'Fração',
    nome_v: 'UNICAMP',
    enunciado: '5/20',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 22,
    questao: 'Calcule: 3/4 × 2/5',
    nome_t: 'Fração',
    nome_v: 'UNICAMP',
    enunciado: '1/2',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },

  // ========== RAZÃO E PROPORÇÃO (4 questões) ==========
  {
    idq: 3,
    questao: 'Qual é a razão entre 10 e 5?',
    nome_t: 'Razão e Proporção',
    nome_v: 'UNICAMP',
    enunciado: '2',
    validacao: 's',
    comentario: 'Razão é a divisão entre dois números. 10 ÷ 5 = 2',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 3,
    questao: 'Qual é a razão entre 10 e 5?',
    nome_t: 'Razão e Proporção',
    nome_v: 'UNICAMP',
    enunciado: '1/2',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 3,
    questao: 'Qual é a razão entre 10 e 5?',
    nome_t: 'Razão e Proporção',
    nome_v: 'UNICAMP',
    enunciado: '15',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 3,
    questao: 'Qual é a razão entre 10 e 5?',
    nome_t: 'Razão e Proporção',
    nome_v: 'UNICAMP',
    enunciado: '5',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Fácil'
  },
  {
    idq: 13,
    questao: 'Se 3 está para 6 assim como 4 está para x, qual é x?',
    nome_t: 'Razão e Proporção',
    nome_v: 'ENEM',
    enunciado: '8',
    validacao: 's',
    comentario: 'Proporção: 3/6 = 4/x. Multiplicando cruzado: 3x = 24, logo x = 8',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 13,
    questao: 'Se 3 está para 6 assim como 4 está para x, qual é x?',
    nome_t: 'Razão e Proporção',
    nome_v: 'ENEM',
    enunciado: '6',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 13,
    questao: 'Se 3 está para 6 assim como 4 está para x, qual é x?',
    nome_t: 'Razão e Proporção',
    nome_v: 'ENEM',
    enunciado: '4',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 13,
    questao: 'Se 3 está para 6 assim como 4 está para x, qual é x?',
    nome_t: 'Razão e Proporção',
    nome_v: 'ENEM',
    enunciado: '12',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },

  // ========== REGRA DE 3 (4 questões) ==========
  {
    idq: 4,
    questao: 'Se 2 está para 4 assim como x está para 8, qual é x?',
    nome_t: 'Regra de 3',
    nome_v: 'ENEM',
    enunciado: '4',
    validacao: 's',
    comentario: 'Regra de 3 simples: 2/4 = x/8. Multiplicando cruzado: 4x = 16, logo x = 4',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 4,
    questao: 'Se 2 está para 4 assim como x está para 8, qual é x?',
    nome_t: 'Regra de 3',
    nome_v: 'ENEM',
    enunciado: '3',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 4,
    questao: 'Se 2 está para 4 assim como x está para 8, qual é x?',
    nome_t: 'Regra de 3',
    nome_v: 'ENEM',
    enunciado: '6',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 4,
    questao: 'Se 2 está para 4 assim como x está para 8, qual é x?',
    nome_t: 'Regra de 3',
    nome_v: 'ENEM',
    enunciado: '5',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 14,
    questao: 'Se 5 kg de feijão custam R$ 30, quanto custa 8 kg?',
    nome_t: 'Regra de 3',
    nome_v: 'ENEM',
    enunciado: 'R$ 48',
    validacao: 's',
    comentario: 'Regra de 3: 5 kg → R$ 30 / 8 kg → x. Então: x = (8 × 30) / 5 = 240 / 5 = 48',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 14,
    questao: 'Se 5 kg de feijão custam R$ 30, quanto custa 8 kg?',
    nome_t: 'Regra de 3',
    nome_v: 'ENEM',
    enunciado: 'R$ 40',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 14,
    questao: 'Se 5 kg de feijão custam R$ 30, quanto custa 8 kg?',
    nome_t: 'Regra de 3',
    nome_v: 'ENEM',
    enunciado: 'R$ 60',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 14,
    questao: 'Se 5 kg de feijão custam R$ 30, quanto custa 8 kg?',
    nome_t: 'Regra de 3',
    nome_v: 'ENEM',
    enunciado: 'R$ 54',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 24,
    questao: 'Um carro percorre 150 km em 3 horas. Quantos km percorrerá em 5 horas?',
    nome_t: 'Regra de 3',
    nome_v: 'FUVEST',
    enunciado: '250 km',
    validacao: 's',
    comentario: 'Regra de 3: 150 km → 3 h / x km → 5 h. Logo: x = (150 × 5) / 3 = 750 / 3 = 250',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 24,
    questao: 'Um carro percorre 150 km em 3 horas. Quantos km percorrerá em 5 horas?',
    nome_t: 'Regra de 3',
    nome_v: 'FUVEST',
    enunciado: '300 km',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 24,
    questao: 'Um carro percorre 150 km em 3 horas. Quantos km percorrerá em 5 horas?',
    nome_t: 'Regra de 3',
    nome_v: 'FUVEST',
    enunciado: '200 km',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  },
  {
    idq: 24,
    questao: 'Um carro percorre 150 km em 3 horas. Quantos km percorrerá em 5 horas?',
    nome_t: 'Regra de 3',
    nome_v: 'FUVEST',
    enunciado: '400 km',
    validacao: 'n',
    comentario: '',
    imgq: '',
    dificuldade: 'Médio'
  }
];

export const api = {
  // Buscar todas as questões
  async getTodasQuestoes() {
    try {
      console.log('Tentando buscar questões do servidor...');
      const response = await fetch(`${API_BASE_URL}/busca/questoes-tema`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        console.warn(`Erro do servidor: ${response.status}`);
        throw new Error(`HTTP ${response.status}`);
      }
      
      const dados = await response.json();
      console.log('Questões carregadas do servidor:', dados);
      return dados;
    } catch (error) {
      console.error('Erro ao buscar do servidor, usando dados locais:', error);
      return DADOS_MOCK;
    }
  },

  // Buscar questões por tema (Porcentagem, Fração, etc.)
  async getQuestoesPorTema(tema) {
    try {
      console.log(`Buscando questões por tema: ${tema}`);
      const response = await fetch(`${API_BASE_URL}/busca/questoes-tema/filtrar/${encodeURIComponent(tema)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        console.warn(`Erro do servidor: ${response.status}`);
        throw new Error(`HTTP ${response.status}`);
      }
      
      const dados = await response.json();
      console.log(`Questões do tema ${tema}:`, dados);
      return dados;
    } catch (error) {
      console.error(`Erro ao buscar tema do servidor, usando dados locais: ${tema}`, error);
      return DADOS_MOCK.filter(q => q.nome_t === tema);
    }
  },

  // Buscar questões por vestibular (ENEM, FUVEST, PUC)
  async getQuestoesPorVestibular(vestibular) {
    try {
      console.log(`Buscando questões por vestibular: ${vestibular}`);
      const response = await fetch(`${API_BASE_URL}/busca/questoes-tema/vestibular/${encodeURIComponent(vestibular)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        console.warn(`Erro do servidor: ${response.status}`);
        throw new Error(`HTTP ${response.status}`);
      }
      
      const dados = await response.json();
      console.log(`Questões do vestibular ${vestibular}:`, dados);
      return dados;
    } catch (error) {
      console.error(`Erro ao buscar vestibular do servidor: ${vestibular}`, error);
      return DADOS_MOCK.filter(q => q.nome_v === vestibular);
    }
  }
};