import { useState, use } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = use(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <>
    <title>Iniciar sesion</title>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700" >Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="username" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} 
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} 
             className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"/>
          <button type="submit"
             className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
              Iniciar sesión
          </button>
          <button type="button" onClick={handleRegisterClick}
             className="w-full rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700">
              Registrarse
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
