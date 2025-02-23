import React, { createContext, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    const login = async (username, password) => {
        await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        setIsLogged(true);
    }

    const logout = async () => {
        await fetch('http://localhost:3000/auth/logout', {
            method: 'POST',
        });
        setIsLogged(false);
    }

    const register = async (username, password) => {
        await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
    }
  return (
    <AuthContext value={{ login, logout, register }}>
        {children}
    </AuthContext>
  )
}

export default AuthContext;