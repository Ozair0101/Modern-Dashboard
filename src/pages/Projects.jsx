import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, AlertTriangle } from 'lucide-react';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/DashboardLayout';
import Table from '../components/Table';
import ModalForm from '../components/ModalForm';
import FormField from '../components/FormField';
import { 
  getProjects, 
  createProject, 
  updateProject, 
  deleteProject 
} from '../api/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    demo_link: '',
    github_link: '',
    featured: false,
    image: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await getProjects();
      setProjects(response.data);
    } catch (error) {
      toast.error('Failed to fetch projects');
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      image: file
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.technologies.trim()) {
      newErrors.technologies = 'Technologies are required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('technologies', formData.technologies);
      formDataToSend.append('demo_link', formData.demo_link || '');
      formDataToSend.append('github_link', formData.github_link || '');
      formDataToSend.append('featured', formData.featured);
      
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }
      
      // If editing, include _method for PUT request
      if (currentProject) {
        formDataToSend.append('_method', 'PUT');
      }
      
      if (currentProject) {
        await updateProject(currentProject.id, formDataToSend);
        toast.success('Project updated successfully');
      } else {
        await createProject(formDataToSend);
        toast.success('Project created successfully');
      }
      
      setIsModalOpen(false);
      fetchProjects();
    } catch (error) {
      toast.error('Failed to save project');
      console.error('Error saving project:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit project
  const handleEdit = (project) => {
    setCurrentProject(project);
    setFormData({
      title: project.title || '',
      description: project.description || '',
      technologies: project.technologies || '',
      demo_link: project.demo_link || '',
      github_link: project.github_link || '',
      featured: project.featured || false,
      image: null
    });
    setIsModalOpen(true);
  };

  // Handle delete project
  const handleDelete = async (project) => {
    if (window.confirm(`Are you sure you want to delete "${project.title}"?`)) {
      try {
        await deleteProject(project.id);
        toast.success('Project deleted successfully');
        fetchProjects();
      } catch (error) {
        toast.error('Failed to delete project');
        console.error('Error deleting project:', error);
      }
    }
  };

  // Handle add new project
  const handleAdd = () => {
    setCurrentProject(null);
    setFormData({
      title: '',
      description: '',
      technologies: '',
      demo_link: '',
      github_link: '',
      featured: false,
      image: null
    });
    setErrors({});
    setIsModalOpen(true);
  };

  // Columns configuration for the table
  const columns = [
    {
      header: 'Title',
      accessor: 'title'
    },
    {
      header: 'Technologies',
      accessor: 'technologies'
    },
    {
      header: 'Demo Link',
      accessor: 'demo_link',
      render: (value) => (
        value ? (
          <a 
            href={value} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            View
          </a>
        ) : (
          <span className="text-gray-400">N/A</span>
        )
      )
    },
    {
      header: 'GitHub Link',
      accessor: 'github_link',
      render: (value) => (
        value ? (
          <a 
            href={value} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            View
          </a>
        ) : (
          <span className="text-gray-400">N/A</span>
        )
      )
    },
    {
      header: 'Featured',
      accessor: 'featured',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {value ? 'Yes' : 'No'}
        </span>
      )
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600">Manage your portfolio projects</p>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={20} className="mr-2" />
            Add Project
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Projects Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Table
            columns={columns}
            data={filteredProjects}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
            emptyMessage="No projects found"
          />
        </motion.div>

        {/* Modal Form */}
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={currentProject ? 'Edit Project' : 'Add Project'}
          onSubmit={handleSubmit}
          submitText={isSubmitting ? 'Saving...' : 'Save Project'}
          size="lg"
        >
          <div className="space-y-4">
            <FormField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              error={errors.title}
              placeholder="Enter project title"
              required
            />
            
            <FormField
              label="Description"
              name="description"
              type="textarea"
              value={formData.description}
              onChange={handleInputChange}
              error={errors.description}
              placeholder="Enter project description"
              rows={4}
              required
            />
            
            <FormField
              label="Technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleInputChange}
              error={errors.technologies}
              placeholder="Enter technologies used (comma separated)"
              required
            />
            
            <FormField
              label="Demo Link"
              name="demo_link"
              type="url"
              value={formData.demo_link}
              onChange={handleInputChange}
              placeholder="https://example.com"
            />
            
            <FormField
              label="GitHub Link"
              name="github_link"
              type="url"
              value={formData.github_link}
              onChange={handleInputChange}
              placeholder="https://github.com/username/repo"
            />
            
            <FormField
              label="Featured Project"
              name="featured"
              type="checkbox"
              value={formData.featured}
              onChange={handleInputChange}
            />
            
            <FormField
              label="Project Image"
              name="image"
              type="file"
              onChange={handleFileChange}
              placeholder="Upload project image"
            />
            
            {currentProject && currentProject.image_url && (
              <div className="mt-2">
                <p className="text-sm text-gray-600 mb-2">Current Image:</p>
                <img 
                  src={currentProject.image_url} 
                  alt={currentProject.title} 
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            )}
          </div>
        </ModalForm>
      </div>
    </DashboardLayout>
  );
};

export default Projects;