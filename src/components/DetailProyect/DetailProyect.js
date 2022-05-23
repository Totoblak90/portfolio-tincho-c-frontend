import axios from "axios";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { getOneProyect } from "../../Redux/projects";
import { selectProjectsID } from "../../Redux/projects/selectors";
import "./DetailProyect.css";

function DetailProyect() {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const proyectById = useAppSelector(selectProjectsID); 
    useEffect(() => {
    const getProyectId = async (id) =>
        await axios
            .get(`http://localhost:1500/api/projects/${id}`)
            .then((res) => dispatch(getOneProyect(res.data)))
            .catch((error) => alert(error.response.data.message));
    
        getProyectId(id);
    }, []);

    const getFechaInicioProyectoFormateada = (fecha) => {
        const fechaCompleta = new Date(fecha);

        let mes;
        switch (fechaCompleta.getMonth()) {
                case 1: mes =  'Enero'
                break;            
                case 2: mes =  'Febrero'
                break;
                case 3: mes =  'Marzo'
                break;
                case 4: mes =  'Abril'
                break;            
                case 5: mes =  'Mayo'
                break;
                case 6: mes =  'Junio'
                break;
                case 7: mes =  'Julio'
                break;            
                case 8: mes =  'Agosto'
                break;
                case 9: mes =  'Septiembre'
                break;
                case 10: mes =  'Octubre'
                break;            
                case 11: mes =  'Noviembre'
                break;
                case 12: mes =  'Diciembre'
                break;
            default:
                break;
        }

        return `${fechaCompleta.getDay()} de ${mes} de ${fechaCompleta.getFullYear()}`
    }
    
    const projectImage = `http://localhost:1500/proyect/${proyectById.image}`
    return (
        <>
            <section>
                <div>
                    <h1>{proyectById?.name}</h1>
                    <h2>Inicio del proyecto: {getFechaInicioProyectoFormateada(proyectById?.proyect_date)}</h2>
                    <img src={projectImage} />
                    {
                        proyectById?.description?.length ? <p>{proyectById?.description}</p> : <span></span>
                    }
                    
                    <div>
                        <h2>Fotos del proyecto:</h2>
                        {proyectById?.AssetProyecto?.length ? 
                            proyectById?.AssetProyecto?.map(foto => {
                                const source = `http://localhost:1500/assets-proyectos/${foto.filename}`
                                return <img src={source} alt="La foto no se pudo cargar correctamente" key={foto.id}/>
                            }) : <p>No tenemos fotos por ahora</p>}
                    </div>
                    <Link to="/">
                        <button>Volver</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default DetailProyect;