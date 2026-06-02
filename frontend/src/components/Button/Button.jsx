import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, onClick, variant = 'primary', disabled = false, className = '' }) {
  return (
    <button 
      className={`${styles.btn} ${styles[variant]} ${className}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
