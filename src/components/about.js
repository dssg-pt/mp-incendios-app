import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./styles.css";

export default function About() {
  return (
    <div>
      <Toolbar />
      <Typography variant="h5" className="paragraphs">
        Sobre
      </Typography>
      <Typography className="paragraphs">
        {" "}
        Este projecto não tem qualquer ligação oficial à Autoridade Nacional de
        Emergência e Proteção Civil Portuguesa ou ao Instituto de Conservação da
        Natureza e das Florestas, sendo um mero consumidor dos dados
        disponibilizados por essas entidades.
      </Typography>{" "}
      <Typography className="paragraphs">
        {" "}
        Foi desenvolvido maioritariamente pela{" "}
        <a
          href="https://www.linkedin.com/in/nadyabasos/"
          target="_blank"
          rel="noreferrer"
        >
          Nadiia Basos
        </a>{" "}
        auxiliada, numa fase inicial, pela{" "}
        <a
          href="https://www.linkedin.com/in/mariaesteba/"
          target="_blank"
          rel="noreferrer"
        >
          Maria Esteban
        </a>
        , no âmbito de um desafio lançado pela Associação{" "}
        <a href="http://www.dssg.pt" target="_blank" rel="noreferrer">
          {" "}
          Data Science for Social Good Portugal
        </a>{" "}
        (DSSG PT). A DSSG PT é uma comunidade aberta de data scientists
        (cientistas de dados), amantes de dados e entusiastas de dados que
        desejam resolver problemas que realmente importam.
      </Typography>{" "}
      <Typography className="paragraphs">
        {" "}
        Todo o código, dados originais, dados limpos e a visualização (feita em{" "}
        <a href="https://kepler.gl" target="_blank" rel="noreferrer">
          Kepler.gl
        </a>
        ) são disponibilizados sob uma licença aberta no repositório{" "}
        <a
          href="https://github.com/dssg-pt/mp-incendios"
          target="_blank"
          rel="noreferrer"
        >
          mp-incendios
        </a>
        .
      </Typography>{" "}
      <Typography className="paragraphs">
        Sugestões, ideias, dúvidas? ✉️ hello@dssg.pt
      </Typography>{" "}
    </div>
  );
}
