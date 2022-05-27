import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setGalleries } from "../../Redux/gallery";
import { selectGallery } from "../../Redux/gallery/selectors";

import "./galeria.css";

function Galeria() {
  // --------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------VARIABLES DE USO GRAL-----------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------
  const dispatch = useAppDispatch();
  const gallery = useAppSelector(selectGallery);
  const imagenGaleria = document.getElementsByClassName('imagen-galeria');
  const arrayDeImagenes = Array.prototype.slice.call( imagenGaleria );
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

  // --------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------JSX-----------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <section className="section-galeria">
        {gallery.length > 0 ? (
          gallery.map((image) => {
            const source = `http://localhost:1500/gallery/${image.filename}`;
            arrayDeImagenes?.forEach(imagen => {
              const ancho = imagen.naturalWidth;
              const alto = imagen.naturalHeight;
              if (alto > ancho) {
                imagen.classList.add('imagen-vertical');
              } else {
                imagen.classList.add('imagen-horizontal');
              }
            })
            return (
                <img
                  key={image.id}
                  src={source}
                  alt="No se cargó correctamente la imágen"
                  className="imagen-galeria"
                />
            );
          })
        ) : (
          <p>No hay imagenes en este momento</p>
        )}
    </section>
  );
}

export default Galeria;
