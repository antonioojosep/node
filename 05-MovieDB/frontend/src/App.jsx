import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Movie from './pages/Movie'
import ProtectedRoute from './components/ProtectedRoute'
import Favorites from './pages/Favorites'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route 
        path='/movie/:id' 
        element={
          <ProtectedRoute>
            <Movie />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='/favorites/' 
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        } 
      />
    </Routes>
  )
}

export default App