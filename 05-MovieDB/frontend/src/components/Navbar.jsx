import React, { use } from 'react'
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';

const Navbar = () => {
    const { logout, isLogged } = use(AuthContext);
  return (
    <nav className="bg-blue-100 flex justify-between p-4 pr-10">
      <ul className="flex flex-row space-x-20 text-xl">
        {isLogged? 
        <Link to={Login} ><li><a className='hover:text-red-500'>Iniciar sesion</a></li></Link> 
        :
        <li><button className='hover:text-red-500' onClick={logout}>Cerrar Sesion</button></li>}
      </ul>
    </nav>
  )
}

export default Navbar