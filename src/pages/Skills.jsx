import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/DashboardLayout';
import Table from '../components/Table';
import ModalForm from '../components/ModalForm';
import FormField from '../components/FormField';
import { 
  getSkills, 
  createSkill, 
  updateSkill, 
  deleteSkill 
} from '../api/api';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    level: 80,
    category: '',
    icon: '' // Added icon field
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Pagination state
  const [pagination, setPagination] = useState({
    currentPage: 1,
    lastPage: 1,
    perPage: 10,
    total: 0,
    from: 0,
    to: 0
  });

  // Fetch skills
  useEffect(() => {
    fetchSkills(pagination.currentPage);
  }, []);

  const fetchSkills = async (page = 1) => {
    try {
      setLoading(true);
      const response = await getSkills({ page: page });
      
      // Handle paginated response
      if (response.data && response.data.data) {
        setSkills(response.data.data);
        setPagination({
          currentPage: response.data.current_page,
          lastPage: response.data.last_page,
          perPage: response.data.per_page,
          total: response.data.total,
          from: response.data.from,
          to: response.data.to
        });
      } else {
        // Fallback for non-paginated response
        const skillsData = response.data.data || response.data || [];
        setSkills(skillsData);
        setPagination({
          currentPage: 1,
          lastPage: 1,
          perPage: skillsData.length,
          total: skillsData.length,
          from: 1,
          to: skillsData.length
        });
      }
      
      console.log('Skills:', response.data);
    } catch (error) {
      toast.error('Failed to fetch skills');
      console.error('Error fetching skills:', error);
      setSkills([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.lastPage) {
      fetchSkills(newPage);
    }
  };

  // Filter skills based on search term
  const filteredSkills = skills && Array.isArray(skills) ? skills.filter(skill =>
    (skill.name && skill.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (skill.category && skill.category.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : [];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Skill name is required';
    }
    
    if (formData.level < 0 || formData.level > 100) {
      newErrors.level = 'Level must be between 0 and 100';
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
      if (currentSkill) {
        await updateSkill(currentSkill.id, formData);
        toast.success('Skill updated successfully');
      } else {
        await createSkill(formData);
        toast.success('Skill created successfully');
      }
      
      setIsModalOpen(false);
      fetchSkills(pagination.currentPage); // Refresh current page
    } catch (error) {
      toast.error('Failed to save skill');
      console.error('Error saving skill:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit skill
  const handleEdit = (skill) => {
    setCurrentSkill(skill);
    setFormData({
      name: skill.name || '',
      level: skill.level || 80,
      category: skill.category || '',
      icon: skill.icon || '' // Added icon field
    });
    setIsModalOpen(true);
  };

  // Handle delete skill
  const handleDelete = async (skill) => {
    if (window.confirm(`Are you sure you want to delete "${skill.name}"?`)) {
      try {
        await deleteSkill(skill.id);
        toast.success('Skill deleted successfully');
        fetchSkills(pagination.currentPage); // Refresh current page
      } catch (error) {
        toast.error('Failed to delete skill');
        console.error('Error deleting skill:', error);
      }
    }
  };

  // Handle add new skill
  const handleAdd = () => {
    setCurrentSkill(null);
    setFormData({
      name: '',
      level: 80,
      category: '',
      icon: '' // Added icon field
    });
    setErrors({});
    setIsModalOpen(true);
  };

  // Columns configuration for the table
  const columns = [
    {
      header: 'Name',
      accessor: 'name'
    },
    {
      header: 'Category',
      accessor: 'category'
    },
    {
      header: 'Icon',
      accessor: 'icon',
      render: (value) => value ? (
        <div className="flex items-center">
          <span className="text-2xl">{value}</span>
        </div>
      ) : (
        <span className="text-gray-400">No icon</span>
      )
    },
    {
      header: 'Level',
      accessor: 'level',
      render: (value) => (
        <div className="flex items-center">
          <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${value}%` }}
            ></div>
          </div>
          <span>{value}%</span>
        </div>
      )
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Skills</h1>
            <p className="text-gray-600">Manage your technical skills</p>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={20} className="mr-2" />
            Add Skill
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
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Skills Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Table
            columns={columns}
            data={filteredSkills}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
            emptyMessage="No skills found"
          />
        </motion.div>

        {/* Pagination */}
        {!loading && skills && skills.length > 0 && (
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">{pagination.from}</span> to{' '}
              <span className="font-medium">{pagination.to}</span> of{' '}
              <span className="font-medium">{pagination.total}</span> results
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                disabled={pagination.currentPage === 1}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  pagination.currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                <ChevronLeft size={16} className="mr-1" />
                Previous
              </button>
              <div className="flex items-center px-4 py-2 text-sm text-gray-700">
                Page {pagination.currentPage} of {pagination.lastPage}
              </div>
              <button
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                disabled={pagination.currentPage === pagination.lastPage}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  pagination.currentPage === pagination.lastPage
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                Next
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        )}

        {/* Modal Form */}
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={currentSkill ? 'Edit Skill' : 'Add Skill'}
          onSubmit={handleSubmit}
          submitText={isSubmitting ? 'Saving...' : 'Save Skill'}
          size="md"
        >
          <div className="space-y-4">
            <FormField
              label="Skill Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
              placeholder="Enter skill name"
              required
            />
            
            <FormField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="Enter category (e.g., Frontend, Backend)"
            />
            
            <FormField
              label="Icon (Emoji or Icon Class)"
              name="icon"
              value={formData.icon}
              onChange={handleInputChange}
              placeholder="Enter icon (e.g., 💻, fa-code, etc.)"
              helpText="Enter an emoji or icon class to represent this skill"
            />
            
            <FormField
              label="Level (0-100%)"
              name="level"
              type="number"
              value={formData.level}
              onChange={handleInputChange}
              error={errors.level}
              min="0"
              max="100"
            />
          </div>
        </ModalForm>
      </div>
    </DashboardLayout>
  );
};

export default Skills;