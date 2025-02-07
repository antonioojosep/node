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
    <div>
      <h2>Bienvenido al Dashboard</h2>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;
