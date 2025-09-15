import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Portfolio from './components/portfolio/Portfolio';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Billing from './pages/Billing';
import VirtualReality from './pages/VirtualReality';
import RTL from './pages/RTL';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Portfolio />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/tables" element={
            <ProtectedRoute>
              <Tables />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/billing" element={
            <ProtectedRoute>
              <Billing />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/virtual-reality" element={
            <ProtectedRoute>
              <VirtualReality />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/rtl" element={
            <ProtectedRoute>
              <RTL />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App
