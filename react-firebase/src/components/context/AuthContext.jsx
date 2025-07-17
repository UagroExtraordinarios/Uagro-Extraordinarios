import { createContext, useContext, useEffect, useState } from "react"
import { 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../../firebase";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) throw Error("No hay proveedor de autenticación");

    return context;
}

export function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => signOut(auth);

    const loginConGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsuscribe();

    }, []);

    return (
        <AuthContext.Provider value={ {login, logout, user, loading, loginConGoogle} }>
            {children}
        </AuthContext.Provider>
    );
}

