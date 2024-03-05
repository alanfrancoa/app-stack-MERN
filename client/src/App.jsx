import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>HomePage</h1>}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/tasks' element={<h1>Tasks</h1>}/>
        <Route path='/add-task' element={<h1>New Task</h1>}/>
        <Route path='/tasks/:id' element={<h1>Update Task</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App