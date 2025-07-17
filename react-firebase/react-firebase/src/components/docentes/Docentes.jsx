import { useAuth } from "../context/AuthContext"

export default function Docentes() {
    
    const {user, loading} = useAuth();
    console.log(user)

    if(loading) return <p>cargando...</p>

    return (
        <div>
            <h1>Docenes aquí</h1>
            <p>bienvenido {user.displayName}</p>
        </div>
    )
}
