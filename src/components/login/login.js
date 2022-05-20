import axios from "axios";
import { useState } from "react";
import { useNavigate, Router } from "react-router-dom";
import "./login.css";

function Login() {
    const loginPost = (body) => axios.post("http://localhost:1500/api/users/login", body).then(res => localStorage.setItem('tokenPorfolio', res.data.token)).catch(console.log)
    const [ login, setLogin ] = useState({username: "", password: ""});

    const handleLoginOnChange = (event) => {
        event.preventDefault();
        setLogin({...login, [event.target.name]: event.target.value})
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (!login.email || !login.password) {
            return alert("Debes completar todos los campos")
        } else {
            loginPost(login)
        }
    }

    return (
        <section className="section-login">
            <div className="section-login__card">
                <div className="section-login__card--header">
                    <h2>Login</h2>
                </div>
                <div className="section-login__card--header">
                    <form >
                        <label htmlFor="loginUserName">Nombre de usuario</label>
                        <input type='text' id="loginUserName" name="username" value={login.username} onChange={handleLoginOnChange} placeholder="Nombre de usuario"></input>
                        <label htmlFor="loginPassword">Contraseña</label>
                        <input type='password' id="loginPassword" name="password" value={login.password} onChange={handleLoginOnChange} placeholder="Contraseña"></input>
                        <button onClick={(e) => handleLoginSubmit(e)} disabled={!login.password || !login.username}>Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Login;