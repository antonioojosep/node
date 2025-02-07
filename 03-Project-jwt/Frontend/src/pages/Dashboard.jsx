import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div>
      <h2>Bienvenido al Dashboard</h2>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;
