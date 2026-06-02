import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
    const [theme] = useState('light');


    return (
        <div className={styles.page}>
            {/* Header/Navbar */}
            <header className={styles.header}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <span className={styles.logoText}>Prego</span>
                        <span className={styles.logoMath}>Math</span>
                    </div>

                    <nav className={styles.menu}>
                        <Link to="/simulado" className={styles.menuItem}>SIMULADO</Link>
                        <a href="#enem" className={styles.menuItem}>ENEM</a>
                        <a href="#puc" className={styles.menuItem}>PUC</a>
                        <a href="#fuvest" className={styles.menuItem}>FUVEST</a>
                        <a href="#videos" className={styles.menuItem}>VIDEO-AULAS</a>
                    </nav>

                    <button className={styles.searchBtn}>Busque 🔍</button>
                </div>
            </header>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className={styles.heroText}>
                        Somos uma turma de estudantes apaixonados por matemática da Instituição SESI Vinhedo - CE 242.
                        Nosso projeto do SENAI que entrou em conjunto com os professores do SESI surgiu
                        de um objetivo de tornar os conteúdos de Matemática
                        mais acessíveis, divertidos e eficientes para os vestibulares. Aqui você encontra simulados,
                        videoaulas e materiais de apoio criados por alunos para alunos.
                        Juntos, acreditamos que o aprendizado colaborativo é a melhor forma de crescer.
                        Bora estudar?
                    </p>
                </div>
                <div className={styles.heroImage}>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23333' width='200' height='200'/%3E%3Ctext x='50%' y='50%' fill='%23fff' text-anchor='middle' dy='.3em' font-size='14'%3EImage Placeholder%3C/text%3E%3C/svg%3E" alt="Study Boy" />
                </div>
            </section>

            {/* Cards Section */}
            <section className={styles.cardsSection}>
                <div className={styles.cardsGrid}>
                    <Link to="/questoes?tema=Porcentagem" className={styles.cardLink}>
                        <div className={styles.card}>
                            <div className={styles.cardBar}></div>
                            <h3>Porcentagem</h3>
                            <p>
                                Domine cálculos de porcentagem com nossos exercícios práticos. Desde problemas de desconto até aumentos percentuais, aprenda as estratégias mais eficientes utilizadas em ENEM e outros vestibulares.
                            </p>
                        </div>
                    </Link>

                    <Link to="/questoes?tema=Fração" className={styles.cardLink}>
                        <div className={styles.card}>
                            <div className={styles.cardBar}></div>
                            <h3>Fração</h3>
                            <p>
                                A Fração é um dos pilares da Matemática. Aprenda a simplificar, comparar e operar frações com facilidade. Nossos exercícios práticos e dicas de resolução vão te ajudar a dominar esse tema essencial.
                            </p>
                        </div>
                    </Link>

                    <Link to="/questoes?tema=Razão e Proporção" className={styles.cardLink}>
                        <div className={styles.card}>
                            <div className={styles.cardBar}></div>
                            <h3>Razão e Proporção</h3>
                            <p>
                                Entenda as relações entre grandezas e como trabalhar com proporções. Aplicações práticas em geometria, física e economia te preparam para as questões mais desafiadoras dos vestibulares.
                            </p>
                        </div>
                    </Link>

                    <Link to="/questoes?tema=Regra de 3" className={styles.cardLink}>
                        <div className={styles.card}>
                            <div className={styles.cardBar}></div>
                            <h3>Regra de 3</h3>
                            <p>
                                A Regra de 3 é fundamental para resolver problemas de proporcionalidade. Aprenda quando usar regra de 3 simples ou composta e domine as técnicas para resolver rapidamente qualquer questão.
                            </p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>© 2026 SESI Vinhedo - CE 242. Todos os direitos reservados.</p>
                <p>Desenvolvido por alunos da Instituição SESI Vinhedo-Ce242.</p>
            </footer>
        </div>
    );
}