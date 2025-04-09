import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CadastroPage from './pages/CadastroPage';
import UserDetailPage from './pages/UserDetailPage'; // arrumar a rota dps 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/usuarios/:cpf" element={<UserDetailPage />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
