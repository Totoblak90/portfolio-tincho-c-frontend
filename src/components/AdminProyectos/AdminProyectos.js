import AdminAssets from "../AdminAssets/adminAssets";
import "./AdminProyectos.css";

import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectProjects } from "../../Redux/projects/selectors";
import { getAllProjects } from "../../Redux/projects";

function AdminProyectos() {

    const dispatch = useAppDispatch();
    const proyectos = useAppSelector(selectProjects);
  
    useEffect(() => {
      const getProyects = async () =>
        await axios
          .get("http://localhost:1500/api/projects")
          .then((res) => dispatch(getAllProjects(res.data)))
          .catch((error) => alert(error.response.data.message));
  
      getProyects();
    }, []);
    
    return (
        <>
            <h2>Proyectos:</h2>

            <AdminAssets />
        </>
    )
}

export default AdminProyectos;