// src/pages/Questoes/Questoes.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { api } from '../../services/api';
import styles from './Questoes.module.css';

export default function Questoes() {
  const [searchParams] = useSearchParams();
  const [questoes, setQuestoes] = useState([]);
  const [respostas, setRespostas] = useState({});
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const temaParam = searchParams.get('tema');

  // Agrupar alternativas por questão (usando ID único)
  const agruparAlternativas = (dadosRaw) => {
    const questoesMap = new Map();

    // Primeiro passe: criar estrutura das questões
    dadosRaw.forEach(row => {
      const chave = `${row.idq}-${row.questao}`;
      
      if (!questoesMap.has(chave)) {
        questoesMap.set(chave, {
          id: row.idq,
          questao: row.questao,
          materia: row.nome_t,
          vestibular: row.nome_v,
          alternativas: [],
          indiceRespostaCorreta: null,
          comentario: row.comentario || '',
          imagem: row.imgq || '',
          dificuldade: row.dificuldade || 'Médio'
        });
      }
    });

    // Segundo passe: adicionar alternativas na ordem correta
    dadosRaw.forEach(row => {
      const chave = `${row.idq}-${row.questao}`;
      const questaoObj = questoesMap.get(chave);
      
      if (row.enunciado) {
        questaoObj.alternativas.push({
          texto: row.enunciado,
          correta: row.validacao === 's'
        });

        // Guardar o índice da resposta correta
        if (row.validacao === 's') {
          questaoObj.indiceRespostaCorreta = questaoObj.alternativas.length - 1;
        }
      }
    });

    // Remover duplicatas e retornar
    return Array.from(questoesMap.values());
  };

  useEffect(() => {
    const carregarQuestoes = async () => {
      setCarregando(true);
      setErro(null);

      try {
        let dados;
        if (temaParam) {
          console.log('🔍 Carregando questões do tema:', temaParam);
          dados = await api.getQuestoesPorTema(temaParam);
        } else {
          console.log('🔍 Carregando todas as questões');
          dados = await api.getTodasQuestoes();
        }

        console.log('📊 Dados brutos recebidos:', dados?.length || 0, 'registros');

        if (!dados || dados.length === 0) {
          setErro('Nenhuma questão encontrada. Usando dados de exemplo.');
        } else {
          const questoesAgrupadas = agruparAlternativas(dados);
          console.log('✅ Questões agrupadas:', questoesAgrupadas.length, 'questões');
          questoesAgrupadas.forEach((q, idx) => {
            console.log(`  [${idx}] ${q.questao} - ${q.alternativas.length} alternativas`);
          });
          setQuestoes(questoesAgrupadas);
          setRespostas({});
          setErro(null);
        }
      } catch (err) {
        console.error('Erro ao carregar questões:', err);
        setErro(`⚠️ Não foi possível conectar com o banco de dados. Usando dados de exemplo para fins de demonstração.`);
        // Mesmo com erro, tenta usar dados locais
        try {
          const dados = temaParam ? 
            (await api.getQuestoesPorTema(temaParam)) : 
            (await api.getTodasQuestoes());
          const questoesAgrupadas = agruparAlternativas(dados);
          setQuestoes(questoesAgrupadas);
        } catch (errLocal) {
          console.error('Erro mesmo com dados locais:', errLocal);
        }
      } finally {
        setCarregando(false);
      }
    };

    carregarQuestoes();
  }, [temaParam]);

  const handleResposta = (questaoIdx, alternativaIdx) => {
    setRespostas({
      ...respostas,
      [questaoIdx]: alternativaIdx
    });
  };

  const calcularProgresso = () => {
    return Math.round((Object.keys(respostas).length / questoes.length) * 100);
  };

  if (carregando) {
    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.navbar}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoText}>Prego</span>
              <span className={styles.logoMath}>Math</span>
            </Link>
            <nav className={styles.menu}>
              <Link to="/" className={styles.menuItem}>HOME</Link>
              <a href="#enem" className={styles.menuItem}>ENEM</a>
              <a href="#puc" className={styles.menuItem}>PUC</a>
              <a href="#fuvest" className={styles.menuItem}>FUVEST</a>
              <a href="#videos" className={styles.menuItem}>VIDEO-AULAS</a>
            </nav>
            <button className={styles.searchBtn}>Busque 🔍</button>
          </div>
        </header>

        <main className={styles.mainContent}>
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>Carregando questões...</p>
          </div>
        </main>
      </div>
    );
  }

  // Se não há questões mas tem erro, mostra aviso
  if (questoes.length === 0) {
    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.navbar}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoText}>Prego</span>
              <span className={styles.logoMath}>Math</span>
            </Link>
            <nav className={styles.menu}>
              <Link to="/" className={styles.menuItem}>HOME</Link>
              <a href="#enem" className={styles.menuItem}>ENEM</a>
              <a href="#puc" className={styles.menuItem}>PUC</a>
              <a href="#fuvest" className={styles.menuItem}>FUVEST</a>
              <a href="#videos" className={styles.menuItem}>VIDEO-AULAS</a>
            </nav>
            <button className={styles.searchBtn}>Busque 🔍</button>
          </div>
        </header>

        <main className={styles.mainContent}>
          <div className={styles.erroContainer}>
            <p>⚠️ {erro || 'Nenhuma questão encontrada'}</p>
            <Link to="/" className={styles.botaoVoltar}>Voltar para Home</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.navbar}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>Prego</span>
            <span className={styles.logoMath}>Math</span>
          </Link>
          <nav className={styles.menu}>
            <Link to="/" className={styles.menuItem}>HOME</Link>
            <a href="#enem" className={styles.menuItem}>ENEM</a>
            <a href="#puc" className={styles.menuItem}>PUC</a>
            <a href="#fuvest" className={styles.menuItem}>FUVEST</a>
            <a href="#videos" className={styles.menuItem}>VIDEO-AULAS</a>
          </nav>
          <button className={styles.searchBtn}>Busque 🔍</button>
        </div>
      </header>

      {/* Aviso se houver erro */}
      {erro && (
        <div className={styles.avisoContainer}>
          <p>{erro}</p>
        </div>
      )}

      {/* Main Content */}
      <main className={styles.mainContent}>
        {questoes.length === 0 ? (
          <div className={styles.semQuestoes}>
            <p>Nenhuma questão encontrada para o filtro selecionado.</p>
            <Link to="/" className={styles.botaoVoltar}>Voltar para Home</Link>
          </div>
        ) : (
          <div className={styles.questoesList}>
            {questoes.map((questao, questaoIdx) => {
              const respostaIdx = respostas[questaoIdx];
              const respondeu = respostaIdx !== undefined;
              const acertou = respondeu && respostaIdx === questao.indiceRespostaCorreta;

              return (
                <div key={questao.id || questaoIdx} className={styles.questaoCard}>
                  {/* Meta info */}
                  <div className={styles.metaInfo}>
                    <span className={styles.badge}>{questao.materia}</span>
                    <span className={styles.badgeVest}>{questao.vestibular}</span>
                    <span className={styles.badgeDif}>{questao.dificuldade}</span>
                  </div>

                  {/* Texto da questão */}
                  <div className={styles.questaoTexto}>
                    <p>{questao.questao}</p>
                  </div>

                  {/* Input para resposta */}
                  {respondeu && (
                    <input 
                      type="text" 
                      className={`${styles.respostaInput} ${acertou ? styles.acerto : styles.erro}`}
                      value={questao.alternativas[respostaIdx].texto}
                      readOnly
                    />
                  )}

                  {/* Alternativas com letras */}
                  <div className={styles.alternativas}>
                    {questao.alternativas.map((alt, altIdx) => {
                      const isSelected = respostaIdx === altIdx;
                      const isCorreta = altIdx === questao.indiceRespostaCorreta;
                      const mostrarResultado = respondeu && (isSelected || isCorreta);

                      return (
                        <button
                          key={altIdx}
                          className={`${styles.alternativa} 
                            ${isSelected ? styles.selecionada : ''} 
                            ${mostrarResultado && isCorreta ? styles.correta : ''} 
                            ${isSelected && !isCorreta && respondeu ? styles.errada : ''}`}
                          onClick={() => handleResposta(questaoIdx, altIdx)}
                          disabled={respondeu}
                        >
                          <span className={styles.letra}>
                            {String.fromCharCode(65 + altIdx)}
                          </span>
                          <span className={styles.texto}>{alt.texto}</span>
                          {mostrarResultado && isCorreta && <span className={styles.icone}>✓</span>}
                          {isSelected && !isCorreta && respondeu && <span className={styles.icone}>✗</span>}
                        </button>
                      );
                    })}
                  </div>

                  {/* Comentário e resultado */}
                  {respondeu && (
                    <div className={`${styles.resultado} ${acertou ? styles.acertoBox : styles.erroBox}`}>
                      <div className={styles.resultadoHeader}>
                        {acertou ? (
                          <>
                            <span className={styles.iconeResultado}>✓</span>
                            <span className={styles.textoResultado}>Resposta Correta!</span>
                          </>
                        ) : (
                          <>
                            <span className={styles.iconeResultado}>✗</span>
                            <span className={styles.textoResultado}>Resposta Incorreta</span>
                          </>
                        )}
                      </div>
                      {questao.comentario && (
                        <div className={styles.comentario}>
                          <strong>Explicação:</strong> {questao.comentario}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Barra de progresso */}
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ 
                        width: `${calcularProgresso()}%`,
                        backgroundColor: calcularProgresso() < 50 ? '#ff9500' : calcularProgresso() < 75 ? '#4CAF50' : '#27ae60'
                      }}
                    ></div>
                  </div>

                  <div className={styles.progressText}>
                    {questaoIdx + 1} de {questoes.length} - {calcularProgresso()}%
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 SESI Vinhedo - CE 242. Todos os direitos reservados.</p>
        <p>Desenvolvido por alunos da Instituição SESI Vinhedo-Ce242.</p>
      </footer>
    </div>
  );
}