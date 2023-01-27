import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import TaskBoard from './components/Task/TaskBoard';
import AuthProvider, { useAuth } from './contexts/AuthProvider';
import { TaskContextProvider } from './contexts/TaskProvider';
import { WrapperDisplayContextProvider } from './contexts/WrapperDisplayContext';
import './index.css'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const user = useAuth()
  console.log(user.state.user)
  return (
    <TaskContextProvider>
      <WrapperDisplayContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate replace to="/dashboard/hero" />} />
              <Route path='/dashboard' element={<Home />}>
                <Route path='/dashboard/hero' element={<Hero />} />
                <Route path='/dashboard/task' element={<TaskBoard />} />
              </Route>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </WrapperDisplayContextProvider>
    </TaskContextProvider>
  );
}

export default App;
