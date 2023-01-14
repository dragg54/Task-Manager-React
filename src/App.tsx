import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import TaskBoard from './components/Task/TaskBoard';
import AuthProvider, { useAuth } from './contexts/AuthProvider';
import './index.css'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const user = useAuth()
  console.log(user.state.user)
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path='/dashboard' element={<Home />}>
            <Route path='/dashboard/task' element ={<TaskBoard/>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
