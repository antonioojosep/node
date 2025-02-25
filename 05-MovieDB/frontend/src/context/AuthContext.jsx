import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [userId , setUserId] = useState(null);
    const navigate = useNavigate();

    const login = async (username, password) => {
        const response =await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        setUserId(data.userId);
        setIsLogged(true);
        navigate('/');
    }

    const logout = async () => {
        await fetch('http://localhost:3000/auth/logout', {
            method: 'POST',
        });
        setIsLogged(false);
        navigate('/');
    }

    const register = async (username, password) => {
        await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        navigate('/');
    }

    return (
        <AuthContext value={{ login, logout, register, isLogged , userId}}>
            {children}
        </AuthContext>
    )
}

export default AuthContext;