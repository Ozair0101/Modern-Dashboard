import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PortfolioHome from './components/portfolio/PortfolioHome';
import Portfolio3D from './components/portfolio/Portfolio3D';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import VirtualReality from './pages/VirtualReality';
import Profile from './pages/Profile';
// Import new admin pages
import Users from './pages/Users';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Educations from './pages/Educations';
import SocialLinks from './pages/SocialLinks';
import Messages from './pages/Messages';
import Testimonials from './pages/Testimonials';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/3d" element={<Portfolio3D />} />
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
          <Route path="/dashboard/virtual-reality" element={
            <ProtectedRoute>
              <VirtualReality />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          
          {/* New Admin Routes */}
          <Route path="/dashboard/users" element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/skills" element={
            <ProtectedRoute>
              <Skills />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/projects" element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/experiences" element={
            <ProtectedRoute>
              <Experiences />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/educations" element={
            <ProtectedRoute>
              <Educations />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/social-links" element={
            <ProtectedRoute>
              <SocialLinks />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/messages" element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/testimonials" element={
            <ProtectedRoute>
              <Testimonials />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App