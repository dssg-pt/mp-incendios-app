import Container from "@mui/material/Container";
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
        src="https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/s/m8b7kej258rtv58/keplergl_7al6go.json"
      ></iframe>
    </div>
  );
}
