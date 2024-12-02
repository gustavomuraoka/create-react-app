import React from 'react';

const TituloProjetos: React.FC = () => {
  return (
    <div style={styles.container}>
      <p style={styles.largeText}>Projetos</p>
      <p style={styles.smallText}>Projetos reais onde as tecnologias descritas foram utilizadas</p>
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

export default TituloProjetos;
