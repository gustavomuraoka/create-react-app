import React from 'react';

const TituloTecnologias: React.FC = () => {
  return (
    <div style={styles.container}>
      <p style={styles.largeText}>Tecnologias</p>
      <p style={styles.smallText}>Experiência acumulada ao longo do tempo </p>
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

export default TituloTecnologias;
