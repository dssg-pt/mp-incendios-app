import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import barra from "../images/barra_cronologica.png";
import detalhes from "../images/detalhes.png";
import "./styles.css";

export default function HowTo() {
  return (
    <div>
      <Toolbar />
      <Typography variant="h5" className="paragraphs">
        Como usar
      </Typography>
      <Typography className="paragraphs">
        {" "}
        Cada ponto no mapa representa, para um determinado mês entre 15 de
        Janeiro de 1980 e 15 de Setembro de 2021, o total de área florestal
        ardida nesse concelho.
      </Typography>
      <Typography className="paragraphs">
        {" "}
        Os dados correspondem apenas aos concelhos de Portugal Continental.
      </Typography>
      <Typography className="paragraphs">
        {" "}
        O mapa é totalmente interactivo, permitindo aproximar ou afastar o
        território português. É possível navegar no tempo arrastando a pega da
        barra cronológica ao fundo.
      </Typography>
      <div style={{ textAlign: "center" }}>
        {" "}
        <img
          src={barra}
          width={"70%"}
          alt="Imagem que ilustra a barra cronológica da ferramenta e como é possível seleccionar um período e deslizar para observar a evolução da área ardida ao longo dos anos."
        ></img>
      </div>
      <Typography className="paragraphs">
        {" "}
        O tempo que a barra cobre é ajustável. Por omissão, está definido para
        um mês. Aumentá-lo para além de um mês pode levar a que vários pontos
        sejam mostrados sobre o mesmo concelho (por representarem vários meses)
        — nesse caso, o mês com maior área ardida sobrepõe-se a todos os outros.
      </Typography>
      <Typography className="paragraphs">
        {" "}
        Clicar no botão de ▶️ na barra cronológica permite que o mapa seja
        automaticamente animado ao longo dos anos, permitindo observar a
        sazonalidade dos incêndios florestais e padrões plurianuais.
      </Typography>
      <div style={{ textAlign: "center" }}>
        {" "}
        <img
          src={detalhes}
          width={"30%"}
          alt="Imagem ilustrativa da tooltip nos círculos que representam a área ardida em cada concelho."
        ></img>
      </div>
      <Typography className="paragraphs">
        {" "}
        Clicar num círculo revela informação adicional: o concelho, o mês, o ano
        e a área total ardida.
      </Typography>
      <Typography className="paragraphs">
        {" "}
        A área ardida está codificada em duas dimensões: no tamanho e na cor do
        círculo (maior e mais escuro equivale a mais área ardida nesse mês).
      </Typography>
    </div>
  );
}
