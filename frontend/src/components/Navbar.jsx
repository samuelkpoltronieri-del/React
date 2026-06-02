// components/Navbar.jsx
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Preg Math</div>
      <ul className={styles.links}>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/questoes">Questões</Link></li>
        <li><Link to="/conteudos">Conteúdos</Link></li>
        <li><Link to="/simulados">Simulados</Link></li>
      </ul>
    </nav>
  );
}