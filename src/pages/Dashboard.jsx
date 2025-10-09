import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { 
  getUsers, 
  getSkills, 
  getProjects, 
  getExperiences, 
  getEducations, 
  getMessages, 
  getTestimonials 
} from '../api/api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    users: 0,
    skills: 0,
    projects: 0,
    experiences: 0,
    educations: 0,
    messages: 0,
    testimonials: 0
  });
  const [loading, setLoading] = useState(true);

  // Fetch statistics
  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      
      // Fetch all statistics in parallel
      const [
        usersRes,
        skillsRes,
        projectsRes,
        experiencesRes,
        educationsRes,
        messagesRes,
        testimonialsRes
      ] = await Promise.all([
        getUsers().catch(() => ({ data: [] })),
        getSkills().catch(() => ({ data: [] })),
        getProjects().catch(() => ({ data: [] })),
        getExperiences().catch(() => ({ data: [] })),
        getEducations().catch(() => ({ data: [] })),
        getMessages().catch(() => ({ data: [] })),
        getTestimonials().catch(() => ({ data: [] }))
      ]);
      
      setStats({
        users: usersRes.data.length,
        skills: skillsRes.data.length,
        projects: projectsRes.data.length,
        experiences: experiencesRes.data.length,
        educations: educationsRes.data.length,
        messages: messagesRes.data.length,
        testimonials: testimonialsRes.data.length
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  // Stat card component
  const StatCard = ({ title, value, icon, color, onClick }) => (
    <div 
      className="dashboard-card group hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {loading ? (
              <div className="h-8 w-12 bg-gray-200 rounded animate-pulse"></div>
            ) : (
              value
            )}
          </p>
        </div>
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      {/* Welcome Banner */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, Admin! 👋</h2>
            <p className="text-blue-100">Here's what's happening with your portfolio dashboard today.</p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Users" 
          value={stats.users} 
          icon={<i className="fas fa-users text-white"></i>} 
          color="bg-gradient-to-r from-blue-500 to-blue-600" 
          onClick={() => navigate('/dashboard/users')}
        />
        
        <StatCard 
          title="Skills" 
          value={stats.skills} 
          icon={<i className="fas fa-code text-white"></i>} 
          color="bg-gradient-to-r from-green-500 to-green-600" 
          onClick={() => navigate('/dashboard/skills')}
        />
        
        <StatCard 
          title="Projects" 
          value={stats.projects} 
          icon={<i className="fas fa-folder text-white"></i>} 
          color="bg-gradient-to-r from-purple-500 to-purple-600" 
          onClick={() => navigate('/dashboard/projects')}
        />
        
        <StatCard 
          title="Messages" 
          value={stats.messages} 
          icon={<i className="fas fa-envelope text-white"></i>} 
          color="bg-gradient-to-r from-yellow-500 to-yellow-600" 
          onClick={() => navigate('/dashboard/messages')}
        />
        
        <StatCard 
          title="Experiences" 
          value={stats.experiences} 
          icon={<i className="fas fa-briefcase text-white"></i>} 
          color="bg-gradient-to-r from-orange-500 to-orange-600" 
          onClick={() => navigate('/dashboard/experiences')}
        />
        
        <StatCard 
          title="Educations" 
          value={stats.educations} 
          icon={<i className="fas fa-graduation-cap text-white"></i>} 
          color="bg-gradient-to-r from-red-500 to-red-600" 
          onClick={() => navigate('/dashboard/educations')}
        />
        
        <StatCard 
          title="Testimonials" 
          value={stats.testimonials} 
          icon={<i className="fas fa-comment text-white"></i>} 
          color="bg-gradient-to-r from-pink-500 to-pink-600" 
          onClick={() => navigate('/dashboard/testimonials')}
        />
        
        <StatCard 
          title="Social Links" 
          value={stats.socialLinks || 0} 
          icon={<i className="fas fa-link text-white"></i>} 
          color="bg-gradient-to-r from-indigo-500 to-indigo-600" 
          onClick={() => navigate('/dashboard/social-links')}
        />
      </div>

      {/* Quick Actions */}
      <div className="dashboard-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button 
            className="btn-primary btn-lg group"
            onClick={() => navigate('/dashboard/projects')}
          >
            <i className="fas fa-folder-plus mr-2 group-hover:scale-110 transition-transform"></i>
            Add Project
          </button>
          <button 
            className="btn-secondary btn-lg group"
            onClick={() => navigate('/dashboard/skills')}
          >
            <i className="fas fa-code mr-2 group-hover:scale-110 transition-transform"></i>
            Add Skill
          </button>
          <button 
            className="btn-secondary btn-lg group"
            onClick={() => navigate('/dashboard/experiences')}
          >
            <i className="fas fa-briefcase mr-2 group-hover:scale-110 transition-transform"></i>
            Add Experience
          </button>
          <button 
            className="btn-accent btn-lg group"
            onClick={() => navigate('/dashboard/testimonials')}
          >
            <i className="fas fa-comment-medical mr-2 group-hover:scale-110 transition-transform"></i>
            Add Testimonial
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;