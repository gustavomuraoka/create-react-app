import React from 'react';

interface TituloEsquerdoProps {
  texto: string;
  link?: string;
}

const TituloEsquerdo: React.FC<TituloEsquerdoProps> = ({texto, link}) => {
  return (
    <div style={styles.textContainer}>
      <p style={styles.text}><b>{texto}</b></p>
      {link && ( // Verifica se o link foi fornecido
        <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
          Repositório do Projeto
        </a>
      )}
    </div>
  );
};

const styles = {
  textContainer: {
    width: '50vw', // Ocupa metade da largura da tela
    textAlign: 'left' as 'left', // Alinha o texto à esquerda
    position: 'relative' as 'relative', // Usa o fluxo normal para alinhar
    marginLeft: 0, // Garantia de que o texto encoste na borda esquerda
  },
  text: {
    fontSize: '3rem',
    color: '#333',
    margin: 0,
    lineHeight: '1.5',
  },
  link: {
    display: 'inline-block', // Permite ajustar o espaçamento ao redor
    marginTop: '10px',
    fontSize: '1.5rem',
    color: '#007bff',
    textDecoration: 'none',
  },
};



export default TituloEsquerdo;
