import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectProjects } from "../../Redux/projects/selectors";
import { getAllProjects } from "../../Redux/projects";
import "./proyecto.css";

function Proyecto() {
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
    <div> 
      <section className="section-proyects">
        <div>
          <h2>Mis proyectos</h2>
          <div>
            {proyectos.length > 0 ? (
              proyectos.map((project) => {
                const source = `http://localhost:1500/proyect/${project.image}`;
                const link = `/home/${project.id}`
                return (
                  <Link key={project.id} to={link}>
                    <div>
                      <h3 >{project.name}</h3>
                      <img src={source} alt="Imagen no disponible" />
                    </div>
                  </Link>
                );
              })
            ) : (
              <p>No hay imagenes en este momento</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Proyecto;
