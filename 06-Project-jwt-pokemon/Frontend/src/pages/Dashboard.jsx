import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
    navigate("/login");
  }
}, [user,logout,navigate]);

  return (
    <>
    <title>Dashboard</title>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg text-center">
          <h2 className="mb-6 text-2xl font-bold text-gray-700">Bienvenido al Dashboard</h2>
          <button
            onClick={logout}
            className="w-full rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
