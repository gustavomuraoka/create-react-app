import React from 'react';

const TituloInteresse: React.FC = () => {
  return (
    <div style={styles.container}>
      <p style={styles.largeText}>Interesses e Hobbies</p>
      <p style={styles.smallText}>O que eu faço quando não estou programando</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center' as 'center',
  },
  largeText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    marginTop: '8rem'
  },
  smallText: {
    fontSize: '2rem',
    color: '#666',
  }
};

export default TituloInteresse;
