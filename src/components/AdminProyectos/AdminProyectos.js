import "./AdminProyectos.css";

import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectProjects } from "../../Redux/projects/selectors";
import { getAllProjects } from "../../Redux/projects";
import { FiTrash2, FiEdit2, FiPlus, FiUpload, FiImage } from "react-icons/fi";

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

  const deleteProyect = (filename, id) => {
    if (window.confirm("¿Estás seguro que queres eliminar este proyecto?")) {
      axios
        .delete(`http://localhost:1500/api/projects/deleteProyect/${id}`, {
          data: { image: filename },
          headers: { Authorization: localStorage.getItem("tokenPorfolio") },
        })
        .then((res) => {
          alert("Proyecto borrado correctamente");
          document.location.reload();
        })
        .catch((err) => alert(err.response.data.message));
    }
  };

  const getFechaInicioProyectoFormateada = (fecha) => {
    const fechaCompleta = new Date(fecha);

    let mes;
    switch (fechaCompleta.getMonth()) {
      case 1:
        mes = "Enero";
        break;
      case 2:
        mes = "Febrero";
        break;
      case 3:
        mes = "Marzo";
        break;
      case 4:
        mes = "Abril";
        break;
      case 5:
        mes = "Mayo";
        break;
      case 6:
        mes = "Junio";
        break;
      case 7:
        mes = "Julio";
        break;
      case 8:
        mes = "Agosto";
        break;
      case 9:
        mes = "Septiembre";
        break;
      case 10:
        mes = "Octubre";
        break;
      case 11:
        mes = "Noviembre";
        break;
      case 12:
        mes = "Diciembre";
        break;
      default:
        break;
    }

    return `${fechaCompleta.getDay()} de ${mes} de ${fechaCompleta.getFullYear()}`;
  };

  let counter = 0;

  return (
    <>
      <h2>
        Proyectos:
        <Link to="/admin/create-proyect">
          <button>
            {" "}
            <FiPlus /> Crear proyecto
          </button>
        </Link>
      </h2>
      <>
        <table>
          <thead>
            {proyectos?.length > 0 ? (
              <tr>
                <th>Número</th>
                <th>Imágen</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Fecha de Inicio</th>
                <th>Acciones</th>
              </tr>
            ) : (
              <tr>
                <th>No hay proyectos disponibles</th>
              </tr>
            )}
          </thead>
          <tbody>
            {proyectos?.length > 0 ? (
              proyectos.map((proyecto) => {
                const source = `http://localhost:1500/proyect/${proyecto.image}`;
                counter++;
                return (
                  <tr key={proyecto.id}>
                    <td>{counter}</td>
                    <td>
                      <img
                        src={source}
                        alt="No se cargó la imágen correctamente"
                        className="imagen-proyecto"
                      />
                    </td>
                    <td>{proyecto.name}</td>
                    <td>{proyecto.description}</td>
                    <td>
                      {getFechaInicioProyectoFormateada(proyecto.proyect_date)}
                    </td>
                    <td>
                      <Link to={"/admin/edit-proyect/" + proyecto.id}>
                        <FiEdit2 />
                      </Link>
                      <FiTrash2
                        onClick={() =>
                          deleteProyect(proyecto.image, proyecto.id)
                        }
                      />
                      <Link to={"/admin/assets/" + proyecto.id}>
                          <FiImage />
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No hay Proyectos</td>
              </tr>
            )}
          </tbody>
        </table>
      </>

    </>
  );
}

export default AdminProyectos;
