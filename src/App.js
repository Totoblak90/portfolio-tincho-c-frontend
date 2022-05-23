// import axios from "axios";
// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "./Redux/hooks";
// import { setGalleries } from "./Redux/gallery";
// import { selectGallery } from "./Redux/gallery/selectors";
// import { getAllProjects, getOneProyect } from "./Redux/projects";
// import { selectProjects, selectProjectsID } from "./Redux/projects/selectors";
// import { getAllAssets } from "./Redux/assets-proyecto";
// import { selectAssets } from "./Redux/assets-proyecto/selectors";
import Login from "./components/login/login";
import Galeria from "./components/galeria/galeria";
import Proyecto from "./components/Proyectos/proyecto";
import Home from "./components/Home/Home";
import DetailProyect from "./components/DetailProyect/DetailProyect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route path="/:id" element={<DetailProyect />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
