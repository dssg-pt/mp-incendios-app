import Toolbar from "@mui/material/Toolbar";

export default function Map() {
  return (
    <div>
      <Toolbar />
      <iframe
        style={{
          position: "absolute",
          height: "93%",
          width: "100%",
          border: "none",
        }}
        src="https://kepler.gl/demo/map?mapUrl=https://raw.githubusercontent.com/dssg-pt/mp-incendios/main/map/map_fogos_ptcontinental_1980_2021.json"
        title="Mapa que representa a evolução de área ardida em Portugal continental entre 1980 e 2021"
      ></iframe>
    </div>
  );
}
