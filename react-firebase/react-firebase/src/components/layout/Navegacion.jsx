import { Link } from "react-router-dom";
import {useAuth} from "../context/AuthContext";

export default function Navegacion() {

    const {user} = useAuth();

    if(!user) return null;

    return (
        <aside className="sidebar col-3">
            <h2>Administración</h2>

            <nav className="navegacion">
                <Link to={"/"} className="clientes">Docentes</Link>
                <Link to={"/docentes"} className="productos">Grupos</Link>
                <Link to={"/extraordinarios"} className="pedidos">Extraordinarios</Link>
            </nav>
        </aside>
    )
}