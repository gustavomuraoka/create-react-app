import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Apresentacao from './components/Apresentação';
import TextoEsquerdo from './components/Texto Esquerdo';
import TextoDireito from './components/Texto Direito';
import TituloTecnologias from './components/TecnologiasTitulo';
import ListaTecnologias from './components/ListaTecnologias';
import TituloProjetos from './components/ProjetosTitulo';
import TituloEsquerdo from './components/Titulo Esquerdo';
import TituloDireito from './components/Titulo Direito';
import TituloInteresse from './components/InteressesTitulo';

const itens = ["• Python", "• Django", "• Flask", "• SQL", "• MongoDB", "• Javascript", "• Typescript", "• React", "• Docker", "• AWS", "• C", "• C#"]
const itensinteresse = ["• Pescar", "• Assistir o Corinthians", "• Academia", "• Futebol", "• Estudar assuntos diversos", "• Mercado de Equity", "• Investimentos de risco", "• Brincar com meus irmãos" ]
function App() {
  return (
    <div style={{ backgroundColor: '#FBE9D0' }}>
      <Navbar />
      <Apresentacao />
      <div style={styles.textContainer}>
        <TextoEsquerdo texto="Natural de São José dos Campos, São Paulo, Brasil. Nascido em Janeiro de 2003, tenho 21 anos. Fiz o ensino médio em 2019 na ETEC Ilza 
        Nascimento Pintus, com o técnico de informática integrado ao currículo. Em 2020, iniciei os estudos na Universidade Federal de São Paulo (UNIFESP), 
        sendo graduado Bacharel de Ciência e Tecnologia. Em 2024, iniciei minha jornada na FATEC Jessen Vidal, no curso de Desenvolvimento de Software Multiplataforma."/>

        <TextoDireito texto="Eternamente buscando melhorar a eficiência de tudo que participo, sou altamente interessado em propor soluções que auxiliem e melhorem processos,
        sendo comprometido à alta qualidade de produtos desenvolvidos. Vejo que participar do 'engineering' de um projeto ou produto é uma das tarefas mais incríveis da área de
        tecnologia no geral. Devido ao background multidisciplinar, prezo pelo conhecimento de múltiplas áreas como um método facilitador de solução de problemas, sendo assim, busco
        sempre aprender mais sobre diversas áreas, como finanças e economia, biologia, dentre outras.
        "/>
      </div>

      <TituloTecnologias/>
      <div style={styles.textContainer}>
        <TextoEsquerdo texto="Já atuei em diversas áreas do desenvolvimento, principalmente na área de desenvolvimente Web e criação de algoritmos para a resolução de problemas 
        pontuais, buscando sempre um método eficiente de resolução. Também já tive oportunidades de participar em projetos de desenvolvimente mobile, deploys de projetos em máquinas
        da AWS, integração de sensores com sistemas de informação e outros."/>

        <TextoDireito texto="Essas experiências me permitem ter um portfolio de soluções amplo, e ainda mais importante, me permite ter uma maior facilidade em aprender quaisquer
        novas tecnologias necessárias para projetos novos, contribuindo positivamente em algo que tenho muito esmero, o aprendizado.
        "/>
      </div>
      <ListaTecnologias itens={itens} />

      {/* Projetos */}

      <TituloProjetos/>
      <div style={styles.textContainer}>
        <TituloEsquerdo texto="CloudStock" link="https://github.com/SkyFlyTeam/cloudStock"/>
        <TextoEsquerdo texto="CloudStock é um sistema web de gestão de estoques para comércio virtual, sendo assim, por intermédio desse podemos controlar a informação sobre entrada e saída de lotes,
        produtos, fornecedores, funcionários, logs, etc. Meu papel no trabalho consistiu na entrega de parte do Front-End, desenvolvido em React, para melhoria de navegabilidade (como barras
         laterais e superiores), além de tabelas, gráficos, e outros componentes que trabalham na ideia de capturar uma informação e exibí=la ao usuário de modo intuitivo. Além dos
         trabalhos desenvolvidos no Front-End, ainda tive a oportunidade de desenvolver parte da API que utilizamos para a obtenção das informações do banco de dados, configurando rotas,
         corrigindo erros e tratando excessões. Utilizamos no projeto o ORM Sequelize para trabalhar com as informações do banco de dados MySQL que foi configurado pela equipe."/>
         <TextoEsquerdo texto="Conhecimentos utilizados: React com Typescript, Express, MySQL, Orientação a objetos e Metodologias ágeis."/>
      </div>

      <div style={styles.textContainer}>
        <TituloDireito texto="SmartFarm" link="https://github.com/SkyFlyTeam/SmartFarm"/>
        <TextoDireito texto="SmartFarm é um sistema web de analytics de uma estufa, sendo uma alternativa ao modelo utilizado pela equipe do time de manufatura da FATEC, que facilita 
        a compreensão dos dados em tempo real, providenciando insights estatísticos da comparação de métricas como temperatura e umidade ao longo do tempo. O sistema integra leituras
        obtidas a partir de sensores e salva as informações em um banco de dados, sendo essas informações posteriormente utilizadas na implementação de gráficos, tabelas,
        informativos, dentre outros. Meu papel no trabalho consitiu na idealização e implementação do Back-End (obviamente acompanhado de meus excelentes companheiros de equipe),
        algumas pontuais criações do Front-End, além do deploy em uma máquina da AWS utilizando também tecnologias de containerização, no caso, Docker. "/>
        <TextoDireito texto="Conhecimentos utilizados: Python, Flask, MySQL, Docker, Máquinas EC2 da AWS, Orientação a objetos e Metodologias ágeis."/>
      </div>

      <div style={styles.textContainer}>
        <TituloEsquerdo texto="QuantMS" link="https://github.com/gustavomuraoka/QuantMS"/>
        <TextoEsquerdo texto="QuantMS é um sistema web que provê informações sobre determinados ativos da bolsa de valores brasileira. Os preços
        dos ativos são exibidos graficamente e a partir das informações dispostas é gerado uma análise quantitativa sobre o ativo usando alguns 
        métodos tradicionais dessa análise. Todo projeto teve seu design realizado por mim, sendo a parte de análise gráfica o quesito mais trabalhado dentre
        as partes envolvidas. Desejo no futuro dar prosseguimento para o projeto, integrando os algoritmos de análise em um sistema web trabalhado com o mesmo
        carinho que foi dado à análise."/>
        <TextoEsquerdo texto="Conhecimentos utilizados: Python, Pandas, Integração com API's externas, Análise Quantitativa de Ações."/>
      </div>

      <TituloInteresse/>
      <ListaTecnologias itens={itensinteresse} />

    </div>
  );
}

const styles = {
  textContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '20px',
    padding: '20px',
  },
};

export default App;
