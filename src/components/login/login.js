import axios from "axios";
import { useState } from "react";
import "./login.css";

function Login() {

    /**
     * Guarda el token en el localStorage para poder hacer tareas admin
     * @param {*} body 
     */
    const loginPost = (body) => 
        axios.post("http://localhost:1500/api/users/login", body)
            .then(res => {
                localStorage.setItem('tokenPorfolio', res.data.token)
                // Si inicia sesión OK además de guardar el token hay que redirigirlo al panel administrativo;
            })
            .catch(err => alert(err.response.data.message))

    /**
     * Cambia la contraseña del usuario
     * @param {*} body
     */
    const resetPasswordPost = (body) => 
        axios.put("http://localhost:1500/api/users/reset-password", body, {headers: {Authorization: localStorage.getItem('tokenPorfolio')}})
            .then(res => {
                handleSectionToggle();
                alert('Contraseña cambiada con éxito')
            })
            .catch(err => alert(err.response.data.message));
    // --------------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------USESTATE------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------------------------------
    const [ login, setLogin ] = useState({username: "", password: ""});
    const [isActive, setIsActive] = useState(false);
    const [ resetPassword, setResetPassword ] = useState({oldPassword: "", newPassword: "", username: "", repeatNewPassword: ""});
    // --------------------------------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------HANDLERS----------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------------------------------
    const handleLoginOnChange = (event) => {
        event.preventDefault();
        setLogin({...login, [event.target.name]: event.target.value})
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (login.email === '' || login.password === '') {
            return alert("Debes completar todos los campos")
        } else {
            loginPost(login)
        }
    }

    const handleResetPasswordOnChange = (event) => {
        event.preventDefault();
        setResetPassword({...resetPassword, [event.target.name]: event.target.value})
    }

    const handleResetPasswordSubmit = (event) => {
        event.preventDefault();
        if (resetPassword.newPassword === '' || resetPassword.oldPassword === '' || resetPassword.username === '') {
            return alert("Debes completar todos los campos");
        } else {
            resetPasswordPost(resetPassword);
        }
    }

    const handleSectionToggle = event => {
        setIsActive(current => !current);
      };
    // --------------------------------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------JSX---------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <section className={isActive ? 'no-show' : 'section-login'}>
                <div className="section-login__card">
                    <div className="section-login__card--header">
                        <h2>Login</h2>
                    </div>
                    <div className="section-login__card--body">
                        <form >
                        <label htmlFor="changePassword_1">Nombre de usuario</label>
                            <input type='text' id="changePassword_1" name="username" value={login.username} onChange={handleLoginOnChange} placeholder="Nombre de usuario"></input>
                            <label htmlFor="ChangePassword_2">Contraseña</label>
                            <input type='password' id="ChangePassword_2" name="password" value={login.password} onChange={handleLoginOnChange} placeholder="Contraseña"></input>
                            <button onClick={(e) => handleLoginSubmit(e)} disabled={!login.password || !login.username}>Iniciar Sesión</button>
                        </form>
                    </div>
                    <div className="section-login__card--footer">
                        <button onClick={handleSectionToggle}>Cambiar contraseña</button>
                    </div>
                </div>
            </section>
            <section className={isActive ? 'section-login' : 'no-show'}>
            <div className="section-login__card">
                    <div className="section-login__card--header">
                        <h2>Cambiar contraseña</h2>
                    </div>
                    <div className="section-login__card--body">
                        <form >
                        <label htmlFor="userName">Nombre de usuario</label>
                            <input type='text' id="userName" name="username" value={resetPassword.username} onChange={handleResetPasswordOnChange} placeholder="Nombre de usuario"></input>
                            <label htmlFor="oldPassword">Contraseña anterior</label>
                            <input type='password' id="oldPassword" name="oldPassword" value={resetPassword.oldPassword} onChange={handleResetPasswordOnChange} placeholder="Contraseña anterior"></input>
                            <label htmlFor="newPassword">Contraseña nueva</label>
                            <input type='password' id="newPassword" name="newPassword" value={resetPassword.newPassword} onChange={handleResetPasswordOnChange} placeholder="Contraseña nueva"></input>
                            <label htmlFor="repeatNewPassword">Repetir contraseña nueva</label>
                            <input type='password' id="repeatNewPassword" name="repeatNewPassword" value={resetPassword.repeatNewPassword} onChange={handleResetPasswordOnChange}  placeholder="Repetir contraseña nueva"></input>
                            <button onClick={(e) => handleResetPasswordSubmit(e)} disabled={(resetPassword.newPassword === '' || resetPassword.oldPassword === '' || resetPassword.username === '') || (resetPassword.newPassword !== resetPassword.repeatNewPassword)}>Cambiar contraseña</button>
                        </form>
                    </div>
                    <div className="section-login__card--footer">
                        <button onClick={handleSectionToggle}>Volver</button>
                    </div>
            </div>
            </section>
        </div>
    )
};

export default Login;