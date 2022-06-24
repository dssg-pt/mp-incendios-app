import "./App.css";
import CustomDrawer from "./components/drawer.js";
import Map from "./components/map.js";
import HowTo from "./components/howTo.js";
import Methodology from "./components/methodology.js";
import Authors from "./components/authors.js";
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
            <Route path={"/"} element={<Map />} />
            <Route path={"/Mapa"} element={<Map />} />
            <Route path={"/Como%20usar"} element={<HowTo />} />
            <Route path={"/Metodologia"} element={<Methodology />} />
            <Route path={"/Autores"} element={<Authors />} />
            <Route path={"/outros"} element={<Other />} />
          </Routes>
          <CustomDrawer></CustomDrawer>
        </Router>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
