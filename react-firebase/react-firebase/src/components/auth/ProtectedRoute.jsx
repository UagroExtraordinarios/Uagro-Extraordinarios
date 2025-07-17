import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}) {

    const { user, loading } = useAuth();

    if(loading) return <p>cargando...</p>

    if(!user) return <Navigate to='/iniciar-sesion'/>

    return <>{children}</>
}