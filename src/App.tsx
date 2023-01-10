import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import './index.css'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
   <AuthProvider>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<Login/>}/>
    </Routes>
   </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
