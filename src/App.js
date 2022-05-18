import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./Redux/hooks";
import { setGalleries } from './Redux/gallery'
import { selectGallery } from "./Redux/gallery/selectors";
import { getAllProjects } from './Redux/projects'
import { selectProjects } from "./Redux/projects/selectors";
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const galleries = useAppSelector(selectGallery)
  const projects = useAppSelector(selectProjects)

  useEffect( () => {
    const  getGallery = async () => axios.get(`http://localhost:1500/api/gallery`, {}).then(res => dispatch(setGalleries(res.data))).catch(console.log)
    const getProjects = async () => axios.get(`http://localhost:1500/api/projects`, {}).then(res => dispatch(getAllProjects(res.data))).catch(console.log)
    
    getGallery()
    getProjects()
      

  },[])
    console.log("Galleries", galleries)
    console.log("Projects", projects)
  return (
      <div className="App">
        El App.js carga
      </div>
  );
}


export default App;
