import React, { useState } from 'react';
import styles from './Simulado.module.css';

export default function Simulado() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState(10);
  const [vestibulares, setVestibulares] = useState({
    ENEM: false,
    UNICAMP: false,
    FUVEST: false
  });

  const handleVestibularChange = (vest) => {
    setVestibulares({
      ...vestibulares,
      [vest]: !vestibulares[vest]
    });
  };

  const handleIniciar = () => {
    if (!nome.trim()) {
      alert('Por favor, digite seu nome!');
      return;
    }
    
    const vestSelected = Object.values(vestibulares).some(v => v);
    if (!vestSelected) {
      alert('Selecione pelo menos um vestibular!');
      return;
    }

    alert(`Simulado iniciado para ${nome} com ${quantidade} questões!`);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Prego</span>
            <span className={styles.logoMath}>Math</span>
          </div>
          <nav className={styles.menu}>
            <a href="/" className={styles.menuItem}>HOME</a>
            <a href="#enem" className={styles.menuItem}>ENEM</a>
            <a href="#puc" className={styles.menuItem}>PUC</a>
            <a href="#fuvest" className={styles.menuItem}>FUVEST</a>
            <a href="#videos" className={styles.menuItem}>VIDEO-AULAS</a>
          </nav>
          <button className={styles.searchBtn}>Busque 🔍</button>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.card}>
          <h1 className={styles.cardTitle}>Simulado - ENEM</h1>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Seu nome completo:</label>
            <input 
              type="text" 
              className={styles.input}
              placeholder="Ex: Pedro Henrique Almeida de Pinto Grosso"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Quantidade de Questões:</label>
            <div className={styles.buttonGroup}>
              {['Ex:5-10', '5', '10', '20', '30'].map((opt) => (
                <button
                  key={opt}
                  className={`${styles.qtdBtn} ${quantidade === (opt === 'Ex:5-10' ? 'Ex:5-10' : parseInt(opt)) ? styles.active : ''}`}
                  onClick={() => setQuantidade(opt === 'Ex:5-10' ? 'Ex:5-10' : parseInt(opt))}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Selecione os Vestibulares:</label>
            <div className={styles.checkboxGroup}>
              {['ENEM', 'UNICAMP', 'FUVEST'].map((vest) => (
                <label key={vest} className={styles.checkboxLabel}>
                  <input 
                    type="checkbox"
                    checked={vestibulares[vest]}
                    onChange={() => handleVestibularChange(vest)}
                    className={styles.checkbox}
                  />
                  <span className={styles.icon}>📋</span>
                  <span>{vest}</span>
                </label>
              ))}
            </div>
          </div>

          <button className={styles.iniciarBtn} onClick={handleIniciar}>
            Iniciar Simulado →
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 SESI Vinhedo - CE 242. Todos os direitos reservados.</p>
        <p>Desenvolvido por alunos da Instituição SESI Vinhedo-Ce242.</p>
      </footer>
    </div>
  );
}