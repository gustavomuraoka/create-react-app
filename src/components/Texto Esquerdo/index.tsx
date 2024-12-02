import React from 'react';

interface TextoEsquerdoProps {
  texto: string;
}

const TextoEsquerdo: React.FC<TextoEsquerdoProps> = ({texto}) => {
  return (
    <div style={styles.textContainer}>
      <p style={styles.text}>{texto}</p>
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
    fontSize: '20px',
    color: '#333',
    margin: 0,
    lineHeight: '1.5',
  },
};



export default TextoEsquerdo;
