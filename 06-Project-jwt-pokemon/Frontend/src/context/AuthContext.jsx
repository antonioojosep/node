import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser({ token: token, userId: userId  });
    }
  }, [navigate]);

  const login = async (username, password) => {
    try {
      const { data } = await axios.post("http://localhost:3000/auth/login", { username, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setUser({ token: data.token , userId: data.userId  });
      navigate("/dashboard");
    } catch (error) {
      alert("Error al iniciar sesión");
      console.error("Error al iniciar sesión", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    navigate("/login");
  };

  return <AuthContext value={{ user, login, logout }}>{children}</AuthContext>;
};


export default AuthContext;
