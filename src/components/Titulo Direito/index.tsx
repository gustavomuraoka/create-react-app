import React from 'react';

// Definição das props que o componente aceitará
interface TextoDireitoProps {
  texto: string;
  link?: string;
}

const TextoDireito: React.FC<TextoDireitoProps> = ({ texto, link }) => {
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
    textAlign: 'right' as 'right', // Alinha o texto à direita
    position: 'relative' as 'relative', // Usa o fluxo normal para alinhar
    marginLeft: 'auto', // Empurra o texto para o lado direito
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

export default TextoDireito;
