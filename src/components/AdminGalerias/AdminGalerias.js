import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setGalleries } from "../../Redux/gallery";
import { selectGallery } from "../../Redux/gallery/selectors";
import { FiTrash2 } from "react-icons/fi";
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
    const getGallery = async () =>
      await axios
        .get(`http://localhost:1500/api/gallery`)
        .then((res) => dispatch(setGalleries(res.data)))
        .catch((err) => alert(err.response.data.message));

    getGallery();
  }, []);

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
  let counter = 0;

  return (
    <>
      <h2>Galeria:</h2>
      <table>
        {gallery?.length > 0 ? (
          gallery.map((image) => {
            const source = `http://localhost:1500/gallery/${image.filename}`;
            counter++;
            return (
              <>
                <thead>
                  <tr>
                    <th>Número</th>
                    <th>Imágen</th>
                    <th>Borrar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{counter}</td>
                    <td>
                      <img
                        src={source}
                        alt="No se cargó la imágen correctamente"
                        className="imagen-galeria"
                      />
                    </td>
                    <td>
                      <button onClick={() => deleteImagen(image.filename)}>
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })
        ) : (
          <p>No hay imágenes en la galería</p>
        )}
      </table>
    </>
  );
}

export default AdminGalerias;
