import React from 'react';

interface ListaDuasColunasProps {
  itens: string[];
}

const ListaTecnologias: React.FC<ListaDuasColunasProps> = ({ itens }) => {
  return (
    <div style={styles.container}>
      <ul style={styles.list}>
        {itens.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', // Centraliza horizontalmente
    alignItems: 'center', // Centraliza verticalmente
    height: '80vh', // Ocupa a altura total da tela
  },
  list: {
    display: 'grid', // Usa grid layout para as colunas
    gridTemplateColumns: '1fr 1fr', // Define 2 colunas iguais
    gap: '20px', // Espaçamento entre os itens
    listStyle: 'none', // Remove os marcadores da lista
    padding: 0,
    margin: 0,
    textAlign: 'center' as 'center', // Alinha o texto centralmente
  },
  listItem: {
    backgroundColor: '#f0f0f0',
    padding: '10px 20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default ListaTecnologias;
