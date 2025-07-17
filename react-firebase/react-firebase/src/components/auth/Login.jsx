import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [credenciales, guardarCredenciales] = useState({
        email: "",
        password: ""
    });

    const { login, loginConGoogle } = useAuth();
    const navigate = useNavigate();

    // iniciar sesión en el servidor
    const iniciarSesionGoogle = async e => {
        e.preventDefault();
        
        try {
            // autenticar al usuario
            await loginConGoogle();
            // redireccionar
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    // iniciar sesión en el servidor
    const iniciarSesion = async e => {
        e.preventDefault();
        
        try {
            // autenticar al usuario
            await login(credenciales.email, credenciales.password);
            // redireccionar
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }


    //almacenar lo que el usuario escribe en el state
    const leerDatos = e => {
        guardarCredenciales({
            ...credenciales,
            [e.target.name] : e.target.value
        })
    }


    return (
        <div className="login">
            <h2>Iniciar Sesión</h2>

            <div className="contenedor-formulario">
                <form
                    onSubmit={iniciarSesion}
                >

                    <div className="campo">
                        <label>Email</label>
                        <input 
                            type="text"
                            name="email"
                            placeholder="Email para Iniciar Sesión"
                            required
                            onChange={leerDatos}
                        />
                    </div>

                    <div className="campo">
                        <label>Password</label>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password para Iniciar Sesión"
                            required
                            onChange={leerDatos}
                        />
                    </div>

                    <input type="submit" className="btn btn-verde btn-block mb-10" value="Enviar" />

                    <button className="btn btn-azul btn-block" onClick={iniciarSesionGoogle}>Acceder con Google</button>
                </form>
            </div>
        </div>
    )
}