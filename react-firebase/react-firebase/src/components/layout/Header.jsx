import { useAuth } from "../context/AuthContext";

export default function Header() {

    const {user, logout} = useAuth();

    const cerrarSesion = async () => {
        await logout();
    }

    return (
        <header className="barra">
            <div className="contenedor">
                <div className="contenido-barra">
                    <h1>Uagro - Extraordinarios</h1>

                    { user ? (
                        <button
                        type="button"
                        className="btn btn-rojo"
                        onClick={cerrarSesion}
                        >
                        <i className="far fa-times-circle"></i>

                            Cerrar Sesión
                        </button>
                    ) : null }

                </div>
            </div>
        </header>
    )
}