import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./styles.css";

export default function Other() {
  return (
    <div>
      <Toolbar />
      <Typography variant="h5" className="paragraphs">
        Outros recursos
      </Typography>
      <Typography className="paragraphs">
        {" "}
        No âmbito específico dos incêndios florestais, recomendamos os seguintes
        recursos, que são boas fontes de informação oficial ou ferramentas que
        disponibilizam estados da situação actualizados em tempo real:{" "}
        <ul>
          <li>
            <a
              href="http://www.prociv.pt/pt-pt/SITUACAOOPERACIONAL/Paginas/default.aspx?cID=14"
              target="_blank"
              rel="noreferrer"
            >
              Ocorrências activas, Proteccção Civil
            </a>
          </li>
          <li>
            {" "}
            <a href="https://fogos.pt/" target="_blank" rel="noreferrer">
              Fogos.pt
            </a>{" "}
          </li>
          <li>
            <a
              href="http://www.prociv.pt/pt-pt/SITUACAOOPERACIONAL/Paginas/default.aspx?cID=14"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Instituto de Conservação da Natureza e das Florestas (entidade
              governamental responsável pela floresta nacional)
            </a>
          </li>
        </ul>
      </Typography>
    </div>
  );
}
