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
import "./App.css";

function App() {
  // const dispatch = useAppDispatch();
  // const galleries = useAppSelector(selectGallery);
  // const projects = useAppSelector(selectProjects);
  // const assets = useAppSelector(selectAssets);
  // const proyectById = useAppSelector(selectProjectsID);

  // useEffect(() => {
  //   const getGallery = () =>
  //     axios
  //       .get(`http://localhost:1500/api/gallery`)
  //       .then((res) => dispatch(setGalleries(res.data)))
  //       .catch(console.log);
  //   const getProjects = () =>
  //     axios
  //       .get(`http://localhost:1500/api/projects`)
  //       .then((res) => dispatch(getAllProjects(res.data)))
  //       .catch(console.log);
  //   const getAssets = (id = "8fdf88b8-14a2-448c-8804-144787befcbb") =>
  //     axios
  //       .get(`http://localhost:1500/api/assets/${id}`)
  //       .then((res) => dispatch(getAllAssets(res.data)))
  //       .catch(console.log);

  //   const getProyectId = (id = "8fdf88b8-14a2-448c-8804-144787befcbb") =>
  //     axios
  //       .get(`http://localhost:1500/api/projects/${id}`)
  //       .then((res) => dispatch(getOneProyect(res.data)))
  //       .catch(console.log);

  //   getGallery();
  //   getProjects();
  //   getAssets();
  //   getProyectId();
  // }, []);

  return (
    <div className="App">
      <Galeria />
      <Login />
      <Proyecto />
    </div>
  );
}

export default App;
