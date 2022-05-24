import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./AdminCreateProyect.css";

function AdminCreateProyect() {
    const navigate = useNavigate();
    const [proyecto, setProyecto] = useState({name: "", image: "", proyect_date: "", description: ""});

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
        <section>
            <Link to="/admin">
                <button>Volver</button>
            </Link>
            <div>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <label htmlFor="proyect_name">Nombre</label>
                    <input type="text" name="name" id="proyect_name" value={proyecto.name} onChange={(e) => handleInputChange(e)}></input>
                    <label htmlFor="proyect_description">Descripción</label>
                    <input type="text" name="description" id="proyect_description" value={proyecto.description} onChange={(e) => handleInputChange(e)}></input>
                    <label htmlFor="proyect_date">Fecha</label>
                    <input type="date" name="proyect_date" id="proyect_date" value={proyecto.proyect_date} onChange={(e) => handleInputChange(e)}></input>
                    <label htmlFor="proyect_image">Fecha</label>
                    <input type="file" name="image" id="proyect_image" onChange={(e) => handleFileInputChange(e)}></input>
                    <button type="submit">Crear proyecto</button>
                </form>
            </div>
        </section>
    </>
}

export default AdminCreateProyect;