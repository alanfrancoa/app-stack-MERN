import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { TaskProvider } from './context/TaskContext.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import TaskFormPage from './pages/TaskFormPage.jsx'
import TasksPage from './pages/TasksPage.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path='/tasks' element={<TasksPage />} />
              <Route path='/add-task' element={<TaskFormPage />} />
              <Route path='/tasks/:id' element={<TaskFormPage />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App