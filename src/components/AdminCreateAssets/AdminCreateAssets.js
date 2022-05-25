import axios from "axios";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { getOneProyect } from "../../Redux/projects";
import { selectProjectsID } from "../../Redux/projects/selectors";
import { FiTrash2, FiUpload } from "react-icons/fi";
import Swal from 'sweetalert2';

import "./AdminCreateAssets.css";

function AdminCreateAssets() {
  // --------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------VARIABLES DE USO GRAL-----------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const proyectById = useAppSelector(selectProjectsID);
  let counter = 0;

  // --------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------USEEFFECT-----------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    /**
     * Obtiene un proyecto por id
     *
     * @param {*} id
     */
    const getProyectId = (id) =>
      axios
        .get(`http://localhost:1500/api/projects/${id}`)
        .then((res) => dispatch(getOneProyect(res.data)))
        .catch((error) => alert(error.response.data.message));

    getProyectId(id);
  }, []);

  // --------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------FUNCIONES-----------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------
  /**
   * Agrega un archivo a un proyecto
   */
  const agregarArchivo = () => {
    Swal.fire({
        title: 'Seleccionar archivo',
        input: 'file',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'No hay un archivo cargado'
            }

            const isValid = value?.type === "image/jpg" || 
            value?.type === "image/jpeg" || 
            value?.type === "image/png" || 
            value?.type === "video/mp4" || 
            value?.type === "video/quicktime" ||
            value?.type === "video/x-msvideo";

            if (!isValid) {
                return "El formato no es válido. Los formatos aceptados son: JPG, JPEG, PNG, MP4, QUICKTIME O MOV"
            }  
        }
      }).then(res => {
          if (res.isConfirmed) {
              const formData = new FormData()
              formData.append('image', res.value);
    
              axios.post(`http://localhost:1500/api/assets/saveAsset/${id}`, formData, {headers: {Authorization: localStorage.getItem('tokenPorfolio')}})
                .then(res => window.location.reload())
                .catch((err) => alert(err.response.data.message))
          }
      }).catch(err => alert("Error inesperado, esperá un rato y volvé a intentar"))
  }

  /**
   * Borra una imágen del proyecto
   *
   * @param {*} filename
   */
     const deleteImagen = (id, filename) => {
      if (window.confirm("Estas seguro que querés borrar la imágen?")) {
        axios
          .delete("http://localhost:1500/api/assets/deleteAssets", {
            data: { 
              assets: [{
                id,
                filename
              }] 
            },
            headers: { Authorization: localStorage.getItem("tokenPorfolio") },
          })
          .then((res) => {
            alert("imágen borrada correctamente");
            document.location.reload();
          })
          .catch((err) => alert(err.response.data.message));
      }
    };

  // --------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------JSX-----------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------
  return (
  <>
    <section>
      <div>
        <h1>{proyectById?.name} <FiUpload onClick={() => agregarArchivo()}/></h1>
        <div>
          <h2>Fotos del proyecto:</h2>
          <table>
            <thead>
              <tr>
                <th>Número</th>
                <th>Imágen</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {proyectById?.AssetProyecto?.length ? (
                proyectById?.AssetProyecto?.map((foto) => {
                  const source = `http://localhost:1500/assets-proyectos/${foto.filename}`;
                  counter++
                  return (
                    <tr key={foto.id}>
                      <td>
                        {counter}
                      </td>
                      <td>
                      {
                            foto.filename.includes("mp4") || foto.filename.includes("mov") ? <video 
                                src={source} 
                                autoPlay={true} 
                                muted={true}
                                loop={true} 
                                controls={true}
                                className="asset-proyecto"
                            ></video> :  <img
                            src={source}
                            alt="No se cargó la imágen correctamente"
                            className="asset-proyecto"/>
                        }
                      </td>
                      <td>
                        < FiTrash2 onClick={() => deleteImagen(foto.id, foto.filename)}/>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr><td>N/A</td><td>N/A</td><td>N/A</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <Link to="/admin">
          <button>Volver</button>
        </Link>
    </div>
  </section>
</>
)
}

export default AdminCreateAssets;
