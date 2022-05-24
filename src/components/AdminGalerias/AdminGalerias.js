import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setGalleries } from "../../Redux/gallery";
import { selectGallery } from "../../Redux/gallery/selectors";
import { FiTrash2, FiUpload } from "react-icons/fi";
import Swal from 'sweetalert2'
import "./AdminGalerias.css";

function AdminGalerias() {
  // --------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------VARIABLES DE USO GRAL-----------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------
  const dispatch = useAppDispatch();
  const gallery = useAppSelector(selectGallery);
  // --------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------USEEFFECT-----------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    /**
     * Obtiene las imágenes para armar una galería
     */
    const getGallery = () =>
      axios
        .get(`http://localhost:1500/api/gallery`)
        .then((res) => dispatch(setGalleries(res.data)))
        .catch((err) => alert(err.response.data.message));

    getGallery();
  }, []);

  /**
   * Borra una imágen de la galería
   *
   * @param {*} filename
   */
  const deleteImagen = (filename) => {
    if (window.confirm("Estas seguro que querés borrar la imágen?")) {
      axios
        .delete("http://localhost:1500/api/gallery/delete", {
          data: { filename },
          headers: { Authorization: localStorage.getItem("tokenPorfolio") },
        })
        .then((res) => {
          alert("imágen borrada correctamente");
          document.location.reload();
        })
        .catch((err) => alert(err.response.data.message));
    }
  };

  const agregarImagen = () => {
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
    
              axios.post("http://localhost:1500/api/gallery/save", formData, {headers: {Authorization: localStorage.getItem('tokenPorfolio')}})
                .then(res => window.location.reload())
                .catch((err) => alert(err.response.data.message))
          }
      }).catch(err => alert("Error inesperado, esperá un rato y volvé a intentar"))
  }

  let counter = 0;

  return (
    <>
      <h2>
        Galeria:
        <button onClick={() => agregarImagen()}><FiUpload/> Agregar imágen</button>
      </h2>
        <table>
            <thead>
                {
                    gallery?.length > 0 ? 
                            <tr>
                                <th>Número</th>
                                <th>Imágen</th>
                                <th>Borrar</th>
                            </tr>
                        : <tr><th>No hay imágenes en la galería</th></tr>
                }
            </thead>
            <tbody>
                {
                    gallery?.length > 0 ? gallery.map(image => {
                        const source = `http://localhost:1500/gallery/${image.filename}`;
                        counter++;
                        return <tr key={image.id}>
                                    <td>{counter}</td>
                                    <td>
                                        {
                                            image.filename.includes("mp4") || image.filename.includes("mov") ? <video 
                                                src={source} 
                                                autoPlay={true} 
                                                muted={true}
                                                loop={true} 
                                                controls={true}
                                                className="imagen-galeria"
                                            ></video> :  <img
                                            src={source}
                                            alt="No se cargó la imágen correctamente"
                                            className="imagen-galeria"/>
                                        }
                                    </td>
                                    <td>
                                        <FiTrash2 onClick={() => deleteImagen(image.filename)} />
                                    </td>
                                </tr>
                    }) : <tr><td>No hay imágenes</td></tr>
                }
            </tbody>
      </table>
    </>
  );
}

export default AdminGalerias;
