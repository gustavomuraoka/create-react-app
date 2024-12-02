import React from 'react';

// Definição das props que o componente aceitará
interface TextoDireitoProps {
  texto: string;
}

const TextoDireito: React.FC<TextoDireitoProps> = ({ texto }) => {
  return (
    <div style={styles.textContainer}>
      <p style={styles.text}>{texto}</p>
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
    fontSize: '20px',
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
