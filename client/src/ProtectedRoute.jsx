import { useAuth } from "./context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const { loading, isAuthenticated } = useAuth()

    if(loading) return <h1>Loading...</h1>
    if (!loading && !isAuthenticated) {
        return <Navigate to='/login' replace />
    }
    //si no esta loggeado ni cargando, redirecciona al login, replace para que no vuelva a la ruta anterior, se sobreescribe. 

    return (
        <Outlet />
    )
}
//si esta autenticado, continua a las rutas hijas, con el comando Outlet de React Router Dom

export default ProtectedRoute