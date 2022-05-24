import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AdminCreateProyect.css";



const formValidation =  (proyecto) => {
        let errors = {
            name: "El campo de nombre es requerido. Debe tener un mínimo de 3 caracteres",
            description: "El campo de descripción es requerido. Debe tener un mínimo de 10 caracteres",
            proyect_date: "La fecha de inicio del proyecto es requerida.",
            image: "La imágen es obligatoria.",
        }

        if (typeof proyecto.name === 'string' && proyecto.name !== "" && proyecto.name.length >= 3 ) {
            errors.name = "";
        }  

        if (typeof proyecto.description === 'string' && proyecto.description !== "" && proyecto.description.length >= 10) {
            errors.description = "";
        }  

        if (typeof proyecto.proyect_date === 'string' && proyecto.proyect_date !== "") {
            errors.proyect_date = ""
        }

        if (proyecto.image) {
            errors.image = ""
        }

        return errors;

    //     let errors = {
    //         name: "El campo de nombre es requerido. Debe tener un mínimo de 3 caracteres",
    //         description: "El campo de descripción es requerido. Debe tener un mínimo de 10 caracteres",
    //         image: "La imágen es obligatoria."
    //     }

    //     if (typeof proyecto.name === 'string' && proyecto.name !== "" && proyecto.name.length >= 3 ) {
    //         errors.name = "";
    //     }  
        
    //     if (typeof proyecto.description === 'string' && proyecto.description !== "" && proyecto.description.length >= 10) {
    //         errors.description = "";
    //     }  

    //     if (proyecto.image) {
    //         errors.image = ""
    //     }

    //     return errors
}



function AdminCreateProyect() {
    const navigate = useNavigate();
    const [proyecto, setProyecto] = useState({name: "", image: "", proyect_date: "", description: ""});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setErrors(formValidation(proyecto));
    }, [proyecto])

    const createProyect = (body) => {
        const formData = new FormData();
        formData.append('name', body.name);
        formData.append('description', body.description);
        formData.append('proyect_date', body.proyect_date);
        formData.append('image', body.image);

        axios.post("http://localhost:1500/api/projects/saveProyect", formData, {headers: {Authorization: localStorage.getItem('tokenPorfolio')}})
            .then(res => {
                alert("Proyecto creado correctamente.");
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
        createProyect(proyecto)
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
                    <label htmlFor="proyect_date">Fecha:</label>
                    <input type="date" name="proyect_date" id="proyect_date" value={proyecto.proyect_date} onChange={(e) => {handleInputChange(e)}}></input>
                    <span>{errors.proyect_name && proyecto.proyect_name ? errors.proyect_name : ''}</span> 
                    <label htmlFor="proyect_image">Imágen:</label>
                    <input type="file" name="image" id="proyect_image" onChange={(e) => {handleFileInputChange(e)}}></input>
                    <span>{errors.image && proyecto.image ? errors.image : ''}</span>
                    <button type="submit" disabled={errors.name || errors.description || errors.proyect_date || errors.image}>Crear proyecto</button>
                </form>
            </div>
        </section>
    </>
}

export default AdminCreateProyect;