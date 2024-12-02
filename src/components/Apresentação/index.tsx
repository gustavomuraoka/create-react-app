import React from 'react';

const Apresentacao: React.FC = () => {
  return (
    <div style={styles.container}>
      <p style={styles.largeText}>Quem sou eu?</p>
      <p style={styles.smallText}>Brasileiro. 21 Anos. Desenvolvedor. </p>
      <p style={styles.tinyText}>Gustavo Muraoka Silva</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center' as 'center',
  },
  largeText: {
    fontSize: '5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  smallText: {
    fontSize: '2rem',
    color: '#666',
  },
  tinyText: {
    fontSize: '1.5rem',
    color: '#666',
  },
  microText: {
    fontSize: '1rem',
    color: '#666',
  }
};

export default Apresentacao;
