import "./App.css";
import CustomDrawer from "./components/drawer.js";
import Map from "./components/map.js";
import HowTo from "./components/howTo.js";
import Methodology from "./components/methodology.js";
import About from "./components/about.js";
import Other from "./components/otherResources.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto Mono, sans-serif",
      textTransform: "none",
    },
  },
});

export default function App() {
  return ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router basemname={`/${process.env.PUBLIC_URL}`}>
          <Routes>
            <Route exact path={"/"} element={<Map />} />
            <Route exact path={"/Mapa"} element={<Map />} />
            <Route exact path={"/Como%20usar"} element={<HowTo />} />
            <Route exact path={"/Dataset"} element={<Methodology />} />
            <Route exact path={"/Sobre"} element={<About />} />
            <Route exact path={"/outros"} element={<Other />} />
          </Routes>
          <CustomDrawer></CustomDrawer>
        </Router>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
