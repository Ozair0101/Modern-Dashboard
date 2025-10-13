import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search } from 'lucide-react';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/DashboardLayout';
import Table from '../components/Table';
import ModalForm from '../components/ModalForm';
import FormField from '../components/FormField';
import { 
  getEducations, 
  createEducation, 
  updateEducation, 
  deleteEducation 
} from '../api/api';

const Educations = () => {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEducation, setCurrentEducation] = useState(null);
  const [formData, setFormData] = useState({
    school: '', // Changed from 'institution' to 'school' to match backend
    degree: '',
    field_of_study: '',
    start_date: '',
    end_date: '',
    grade: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch educations
  useEffect(() => {
    fetchEducations();
  }, []);

  const fetchEducations = async () => {
    try {
      setLoading(true);
      const response = await getEducations();
      // Handle paginated response - extract data array
      const educationsData = response.data.data || response.data || [];
      setEducations(educationsData);
    } catch (error) {
      toast.error('Failed to fetch educations');
      console.error('Error fetching educations:', error);
      setEducations([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  // Filter educations based on search term
  const filteredEducations = educations && Array.isArray(educations) ? educations.filter(edu =>
    (edu.school && edu.school.toLowerCase().includes(searchTerm.toLowerCase())) || // Changed from 'institution' to 'school'
    (edu.degree && edu.degree.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (edu.field_of_study && edu.field_of_study.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : [];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
    
    if (!formData.school.trim()) { // Changed from 'institution' to 'school'
      newErrors.school = 'School name is required'; // Changed from 'institution' to 'school'
    }
    
    if (!formData.degree.trim()) {
      newErrors.degree = 'Degree is required';
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
      if (currentEducation) {
        await updateEducation(currentEducation.id, formData);
        toast.success('Education updated successfully');
      } else {
        await createEducation(formData);
        toast.success('Education created successfully');
      }
      
      setIsModalOpen(false);
      fetchEducations();
    } catch (error) {
      toast.error('Failed to save education');
      console.error('Error saving education:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit education
  const handleEdit = (education) => {
    setCurrentEducation(education);
    setFormData({
      school: education.school || '', // Changed from 'institution' to 'school'
      degree: education.degree || '',
      field_of_study: education.field_of_study || '',
      start_date: education.start_date || '',
      end_date: education.end_date || '',
      grade: education.grade || '',
      description: education.description || ''
    });
    setIsModalOpen(true);
  };

  // Handle delete education
  const handleDelete = async (education) => {
    if (window.confirm(`Are you sure you want to delete education at "${education.school}"?`)) { // Changed from 'institution' to 'school'
      try {
        await deleteEducation(education.id);
        toast.success('Education deleted successfully');
        fetchEducations();
      } catch (error) {
        toast.error('Failed to delete education');
        console.error('Error deleting education:', error);
      }
    }
  };

  // Handle add new education
  const handleAdd = () => {
    setCurrentEducation(null);
    setFormData({
      school: '', // Changed from 'institution' to 'school'
      degree: '',
      field_of_study: '',
      start_date: '',
      end_date: '',
      grade: '',
      description: ''
    });
    setErrors({});
    setIsModalOpen(true);
  };

  // Columns configuration for the table
  const columns = [
    {
      header: 'School', // Changed from 'Institution' to 'School'
      accessor: 'school' // Changed from 'institution' to 'school'
    },
    {
      header: 'Degree',
      accessor: 'degree'
    },
    {
      header: 'Field of Study',
      accessor: 'field_of_study'
    },
    {
      header: 'Duration',
      accessor: 'start_date',
      render: (_, row) => {
        if (!row.start_date) return 'N/A';
        const start = new Date(row.start_date).getFullYear();
        const end = row.end_date ? new Date(row.end_date).getFullYear() : 'Present';
        return `${start} - ${end}`;
      }
    },
    {
      header: 'Grade',
      accessor: 'grade'
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Educations</h1>
            <p className="text-gray-600">Manage educational background</p>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={20} className="mr-2" />
            Add Education
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
              placeholder="Search educations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Educations Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Table
            columns={columns}
            data={filteredEducations}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
            emptyMessage="No educations found"
          />
        </motion.div>

        {/* Modal Form */}
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={currentEducation ? 'Edit Education' : 'Add Education'}
          onSubmit={handleSubmit}
          submitText={isSubmitting ? 'Saving...' : 'Save Education'}
          size="lg"
        >
          <div className="space-y-4">
            <FormField
              label="School" // Changed from 'Institution' to 'School'
              name="school" // Changed from 'institution' to 'school'
              value={formData.school} // Changed from 'institution' to 'school'
              onChange={handleInputChange}
              error={errors.school} // Changed from 'institution' to 'school'
              placeholder="Enter school name" // Changed from 'institution' to 'school'
              required
            />
            
            <FormField
              label="Degree"
              name="degree"
              value={formData.degree}
              onChange={handleInputChange}
              error={errors.degree}
              placeholder="Enter degree (e.g., Bachelor's, Master's)"
              required
            />
            
            <FormField
              label="Field of Study"
              name="field_of_study"
              value={formData.field_of_study}
              onChange={handleInputChange}
              placeholder="Enter field of study"
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
              />
            </div>
            
            <FormField
              label="Grade/CGPA"
              name="grade"
              value={formData.grade}
              onChange={handleInputChange}
              placeholder="Enter grade or CGPA"
            />
            
            <FormField
              label="Description"
              name="description"
              type="textarea"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter additional details"
              rows={3}
            />
          </div>
        </ModalForm>
      </div>
    </DashboardLayout>
  );
};

export default Educations;