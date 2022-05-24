import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectProjectsID } from "../../Redux/projects/selectors";
import { getOneProyect } from "../../Redux/projects";


const formValidation =  (proyecto) => {

    let errors = {
        name: "El campo de nombre es requerido. Debe tener un mínimo de 3 caracteres",
        description: "El campo de descripción es requerido. Debe tener un mínimo de 10 caracteres",
        image: "La imágen es obligatoria."
    }

    if (typeof proyecto.name === 'string' && proyecto.name !== "" && proyecto.name.length >= 3 ) {
        errors.name = "";
    }  
    
    if (typeof proyecto.description === 'string' && proyecto.description !== "" && proyecto.description.length >= 10) {
        errors.description = "";
    }  

    if (proyecto.image) {
        errors.image = ""
    }

    return errors
}

function AdminEditProyect() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const proyectById = useAppSelector(selectProjectsID);
    const navigate = useNavigate();
    const [proyecto, setProyecto] = useState({name: "", image: "" , description: ""});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const getProyectId = (id) =>
            axios
                .get(`http://localhost:1500/api/projects/${id}`)
                .then((res) => dispatch(getOneProyect(res.data)))
                .catch((error) => alert(error.response.data.message));
        getProyectId(id);
    }, [])

    useEffect(() => {
        setProyecto({name: proyectById.name, description: proyectById.description})
    }, [proyectById]);

    useEffect(() => {
        setErrors(formValidation(proyecto));
    }, [proyecto])

    const editProyecto = (body) => {
        const formData = new FormData();
        formData.append('name', body.name);
        formData.append('description', body.description);
        formData.append('image', body.image);
        formData.append('oldFilename', proyectById.filename);

        axios.put(`http://localhost:1500/api/projects/editProyect/${id}`, formData, {headers: {Authorization: localStorage.getItem('tokenPorfolio')}})
            .then(res => {
                alert("Proyecto editado correctamente.");
                navigate('/admin')
            })
            .catch((err) => alert(err.response.data.message))
    };

    const handleInputChange = (event) => {
        setProyecto({...proyecto, [event.target.name]: event.target.value})
    }

    const handleFileInputChange = (event) => {
        setProyecto({...proyecto, [event.target.name]: event.target.files[0]})
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        editProyecto(proyecto)
    }

    return <>
        <section >
            <Link to="/admin">
                <button>Volver</button>
            </Link>
            <div>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <label htmlFor="proyect_name">Nombre:</label>
                    <input type="text" name="name" id="proyect_name" value={proyecto.name} onChange={(e) => {handleInputChange(e)}}></input>
                    <span>{errors.name && proyecto.name ? errors.name : ''}</span> 
                    <label htmlFor="proyect_description">Descripción:</label>
                    <input type="text" name="description" id="proyect_description" value={proyecto.description} onChange={(e) => {handleInputChange(e)}}></input>
                    <span>{errors.description && proyecto.description ? errors.description : ''}</span> 
                    <label htmlFor="proyect_image">Imágen:</label>
                    <input type="file" name="image" id="proyect_image" onChange={(e) => {handleFileInputChange(e)}}></input>
                    <span>{errors.image && proyecto.image ? errors.image : ''}</span>
                    <button type="submit" disabled={errors.name || errors.description || errors.image}>Editar proyecto</button>
                </form>
            </div>
        </section>
    </> 
}

export default AdminEditProyect;