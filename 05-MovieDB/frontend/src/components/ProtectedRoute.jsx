import { use } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
    const { isLogged } = use(AuthContext)

    if (!isLogged) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute