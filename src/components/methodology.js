import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./styles.css";

export default function Methodology() {
  return (
    <div>
      <Toolbar />
      <Typography variant="h5" className="paragraphs">
        Dataset
      </Typography>
      <Typography className="paragraphs">
        Os dados desta visualização resultam da compilação, limpeza, filtragem e
        validação de várias fontes de dados disponibilizados pelo{" "}
        <a href="https://www.icnf.pt/" target="_blank" rel="noreferrer">
          Instituto de Conservação da Natureza e das Florestas (ICNF)
        </a>
        :
      </Typography>
      <Typography className="paragraphs">
        <ul>
          <li>
            Para o período 1980-2015, através do arquivo histórico do ICNF
            disponibilizado no{" "}
            <a
              href="https://github.com/centraldedados/incendios/"
              target="_blank"
              rel="noreferrer"
            >
              repositório de incêndios da Central de Dados{" "}
            </a>
          </li>
          <li>
            Para o período 2015-2021, através do serviço web do ICNF, extraído
            através da ferramenta{" "}
            <a
              href="https://github.com/vostpt/icnf_mapas"
              target="_blank"
              rel="noreferrer"
            >
              icnf_mapas
            </a>{" "}
            da{" "}
            <a href="https://vost.pt" target="_blank" rel="noreferrer">
              VOST PT
            </a>
          </li>
        </ul>
      </Typography>
      <Typography className="paragraphs">
        Todos os dados, incluindo as versões originais e as transformadas, estão
        disponíveis no{" "}
        <a
          href=" https://github.com/dssg-pt/mp-incendios"
          target="_blank"
          rel="noreferrer"
        >
          repositório mp-incêndios
        </a>
        .
      </Typography>
    </div>
  );
}
