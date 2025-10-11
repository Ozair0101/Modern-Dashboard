import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search } from 'lucide-react';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/DashboardLayout';
import Table from '../components/Table';
import ModalForm from '../components/ModalForm';
import FormField from '../components/FormField';
import { 
  getExperiences, 
  createExperience, 
  updateExperience, 
  deleteExperience 
} from '../api/api';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    description: '',
    start_date: '',
    end_date: '',
    currently_working: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch experiences
  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      setLoading(true);
      const response = await getExperiences();
      // Handle paginated response - extract data array
      const experiencesData = response.data.data || response.data || [];
      setExperiences(experiencesData);
    } catch (error) {
      toast.error('Failed to fetch experiences');
      console.error('Error fetching experiences:', error);
      setExperiences([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  // Filter experiences based on search term
  const filteredExperiences = experiences && Array.isArray(experiences) ? experiences.filter(exp =>
    (exp.company && exp.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (exp.position && exp.position.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : [];

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

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.position.trim()) {
      newErrors.position = 'Position is required';
    }
    
    if (!formData.start_date) {
      newErrors.start_date = 'Start date is required';
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
      if (currentExperience) {
        await updateExperience(currentExperience.id, formData);
        toast.success('Experience updated successfully');
      } else {
        await createExperience(formData);
        toast.success('Experience created successfully');
      }
      
      setIsModalOpen(false);
      fetchExperiences();
    } catch (error) {
      toast.error('Failed to save experience');
      console.error('Error saving experience:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit experience
  const handleEdit = (experience) => {
    setCurrentExperience(experience);
    setFormData({
      company: experience.company || '',
      position: experience.position || '',
      description: experience.description || '',
      start_date: experience.start_date || '',
      end_date: experience.end_date || '',
      currently_working: experience.currently_working || false
    });
    setIsModalOpen(true);
  };

  // Handle delete experience
  const handleDelete = async (experience) => {
    if (window.confirm(`Are you sure you want to delete experience at "${experience.company}"?`)) {
      try {
        await deleteExperience(experience.id);
        toast.success('Experience deleted successfully');
        fetchExperiences();
      } catch (error) {
        toast.error('Failed to delete experience');
        console.error('Error deleting experience:', error);
      }
    }
  };

  // Handle add new experience
  const handleAdd = () => {
    setCurrentExperience(null);
    setFormData({
      company: '',
      position: '',
      description: '',
      start_date: '',
      end_date: '',
      currently_working: false
    });
    setErrors({});
    setIsModalOpen(true);
  };

  // Columns configuration for the table
  const columns = [
    {
      header: 'Company',
      accessor: 'company'
    },
    {
      header: 'Position',
      accessor: 'position'
    },
    {
      header: 'Duration',
      accessor: 'start_date',
      render: (_, row) => {
        if (!row.start_date) return 'N/A';
        const start = new Date(row.start_date).getFullYear();
        const end = row.currently_working ? 'Present' : (row.end_date ? new Date(row.end_date).getFullYear() : 'N/A');
        return `${start} - ${end}`;
      }
    },
    {
      header: 'Currently Working',
      accessor: 'currently_working',
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
            <h1 className="text-2xl font-bold text-gray-900">Experiences</h1>
            <p className="text-gray-600">Manage work experiences</p>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={20} className="mr-2" />
            Add Experience
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
              placeholder="Search experiences..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Experiences Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Table
            columns={columns}
            data={filteredExperiences}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
            emptyMessage="No experiences found"
          />
        </motion.div>

        {/* Modal Form */}
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={currentExperience ? 'Edit Experience' : 'Add Experience'}
          onSubmit={handleSubmit}
          submitText={isSubmitting ? 'Saving...' : 'Save Experience'}
          size="lg"
        >
          <div className="space-y-4">
            <FormField
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              error={errors.company}
              placeholder="Enter company name"
              required
            />
            
            <FormField
              label="Position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              error={errors.position}
              placeholder="Enter position title"
              required
            />
            
            <FormField
              label="Description"
              name="description"
              type="textarea"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter job description"
              rows={4}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Start Date"
                name="start_date"
                type="date"
                value={formData.start_date}
                onChange={handleInputChange}
                error={errors.start_date}
                required
              />
              
              <FormField
                label="End Date"
                name="end_date"
                type="date"
                value={formData.end_date}
                onChange={handleInputChange}
                disabled={formData.currently_working}
              />
            </div>
            
            <FormField
              label="Currently Working Here"
              name="currently_working"
              type="checkbox"
              value={formData.currently_working}
              onChange={handleInputChange}
            />
          </div>
        </ModalForm>
      </div>
    </DashboardLayout>
  );
};

export default Experiences;