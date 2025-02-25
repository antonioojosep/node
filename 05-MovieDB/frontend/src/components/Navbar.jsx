import React from 'react'
import { use } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Navbar = () => {
    const { logout, isLogged } = use(AuthContext)

    return (
        <nav className="bg-blue-100 flex justify-between p-4 pr-10">
            <ul className="flex flex-row space-x-20 text-xl">
                <li><Link to="/">Inicio</Link></li>
                {isLogged ? (
                    <>
                        <li><Link to="/favorites">Mis Favoritos</Link></li>
                        <li><button className='hover:text-red-500' onClick={logout}>Cerrar Sesión</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to='/login'>Iniciar Sesión</Link></li>
                        <li><Link to='/register'>Registrarse</Link></li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar