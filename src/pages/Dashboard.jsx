import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import DashboardLayout from '../components/DashboardLayout';
import { 
  getUsers, 
  getSkills, 
  getProjects, 
  getExperiences, 
  getEducations, 
  getMessages, 
  getTestimonials,
  getSocialLinks
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
    testimonials: 0,
    socialLinks: 0
  });
  const [loading, setLoading] = useState(true);
  const [recentActivity, setRecentActivity] = useState([]);
  const [chartData, setChartData] = useState([]);

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
        testimonialsRes,
        socialLinksRes
      ] = await Promise.all([
        getUsers().catch(() => ({ data: { data: [] } })),
        getSkills().catch(() => ({ data: { data: [] } })),
        getProjects().catch(() => ({ data: { data: [] } })),
        getExperiences().catch(() => ({ data: { data: [] } })),
        getEducations().catch(() => ({ data: { data: [] } })),
        getMessages().catch(() => ({ data: { data: [] } })),
        getTestimonials().catch(() => ({ data: { data: [] } })),
        getSocialLinks().catch(() => ({ data: { data: [] } }))
      ]);
      
      const statsData = {
        users: usersRes.data.data?.length || usersRes.data?.length || 0,
        skills: skillsRes.data.data?.length || skillsRes.data?.length || 0,
        projects: projectsRes.data.data?.length || projectsRes.data?.length || 0,
        experiences: experiencesRes.data.data?.length || experiencesRes.data?.length || 0,
        educations: educationsRes.data.data?.length || educationsRes.data?.length || 0,
        messages: messagesRes.data.data?.length || messagesRes.data?.length || 0,
        testimonials: testimonialsRes.data.data?.length || testimonialsRes.data?.length || 0,
        socialLinks: socialLinksRes.data.data?.length || socialLinksRes.data?.length || 0
      };
      
      setStats(statsData);
      
      // Prepare chart data
      const chartData = [
        { name: 'Users', value: statsData.users },
        { name: 'Skills', value: statsData.skills },
        { name: 'Projects', value: statsData.projects },
        { name: 'Experiences', value: statsData.experiences },
        { name: 'Educations', value: statsData.educations },
        { name: 'Messages', value: statsData.messages },
        { name: 'Testimonials', value: statsData.testimonials },
        { name: 'Social Links', value: statsData.socialLinks }
      ];
      setChartData(chartData);
      
      // Prepare recent activity data
      const activity = [
        { id: 1, action: 'Added new project', time: '2 hours ago', type: 'project' },
        { id: 2, action: 'Updated skill', time: '5 hours ago', type: 'skill' },
        { id: 3, action: 'Received new message', time: '1 day ago', type: 'message' },
        { id: 4, action: 'Added testimonial', time: '2 days ago', type: 'testimonial' },
        { id: 5, action: 'Updated experience', time: '3 days ago', type: 'experience' }
      ];
      setRecentActivity(activity);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  // Stat card component
  const StatCard = ({ title, value, icon, color, onClick }) => (
    <div 
      className="dashboard-card group hover:scale-105 cursor-pointer transition-all duration-300"
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
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      </div>
    </div>
  );

  // Colors for the pie chart
  const COLORS = ['#4f46e5', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#ec4899', '#06b6d4', '#f97316'];

  return (
    <DashboardLayout>
      {/* Welcome Banner */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, Admin! 👋</h2>
            <p className="text-blue-100">Here's what's happening with your portfolio dashboard today.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button 
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              onClick={() => navigate('/dashboard/profile')}
            >
              View Profile
            </button>
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
          value={stats.socialLinks} 
          icon={<i className="fas fa-link text-white"></i>} 
          color="bg-gradient-to-r from-indigo-500 to-indigo-600" 
          onClick={() => navigate('/dashboard/social-links')}
        />
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Data Chart */}
        <div className="dashboard-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="dashboard-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Content Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="dashboard-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              className="btn-primary btn-lg group flex flex-col items-center justify-center h-24 transition-all hover:shadow-lg"
              onClick={() => navigate('/dashboard/projects')}
            >
              <i className="fas fa-folder-plus text-xl mb-2 group-hover:scale-110 transition-transform"></i>
              <span>Add Project</span>
            </button>
            <button 
              className="btn-secondary btn-lg group flex flex-col items-center justify-center h-24 transition-all hover:shadow-lg"
              onClick={() => navigate('/dashboard/skills')}
            >
              <i className="fas fa-code text-xl mb-2 group-hover:scale-110 transition-transform"></i>
              <span>Add Skill</span>
            </button>
            <button 
              className="btn-secondary btn-lg group flex flex-col items-center justify-center h-24 transition-all hover:shadow-lg"
              onClick={() => navigate('/dashboard/experiences')}
            >
              <i className="fas fa-briefcase text-xl mb-2 group-hover:scale-110 transition-transform"></i>
              <span>Add Experience</span>
            </button>
            <button 
              className="btn-accent btn-lg group flex flex-col items-center justify-center h-24 transition-all hover:shadow-lg"
              onClick={() => navigate('/dashboard/testimonials')}
            >
              <i className="fas fa-comment-medical text-xl mb-2 group-hover:scale-110 transition-transform"></i>
              <span>Add Testimonial</span>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;