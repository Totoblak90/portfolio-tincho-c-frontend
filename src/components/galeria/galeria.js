import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setGalleries } from "../../Redux/gallery";
import { selectGallery } from "../../Redux/gallery/selectors"

import './galeria.css';

function Galeria() {
  const dispatch = useAppDispatch();
  const gallery = useAppSelector(selectGallery);

    useEffect(() => {
    /**
     * Obtiene las imágenes para armar una galería
     */
    const getGallery = async () =>
     await axios
        .get(`http://localhost:1500/api/gallery`)
        .then((res) => dispatch(setGalleries(res.data)))
        .catch(err => alert(err.response.data.message));

    getGallery();
  });
  
    return (
        <div>
            <section className="section-galeria">
                <div className="section-galeria__container">
                {
                    gallery.map(image => {
                        const source = `http://localhost:1500/gallery/${image.filename}`
                            return <div id={image.id} className="section-galeria__container--image-container">
                                        <img src={source} alt="Hay que hacer una mejora en el backend" />
                                    </div>
                            
                    })
                }
                </div>
            </section>
        </div>
    )
};

export default Galeria;