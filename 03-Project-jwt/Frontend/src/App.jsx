import { use } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const App = () => {

  const { user } = use(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user == null ? <Navigate to="/login" /> : <Navigate to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
