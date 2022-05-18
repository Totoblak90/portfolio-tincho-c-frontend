import axios from "axios";

function Gallery() {
    const getGallery = axios.get('http://localhost:1500/api/gallery', {})
    .then(res => {
        console.log(res)
        return (
            <div className="Gallery">
                Hola
            </div>
        );
    })
    .catch(err => console.log(err))
  }
  
  export default Gallery;