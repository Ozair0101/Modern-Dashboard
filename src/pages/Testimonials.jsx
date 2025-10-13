import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Star } from 'lucide-react';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/DashboardLayout';
import Table from '../components/Table';
import ModalForm from '../components/ModalForm';
import FormField from '../components/FormField';
import { 
  getTestimonials, 
  createTestimonial, 
  updateTestimonial, 
  deleteTestimonial 
} from '../api/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    content: '',
    rating: 5,
    featured: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch testimonials
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await getTestimonials();
      // Handle paginated response - extract data array
      const testimonialsData = response.data.data || response.data || [];
      setTestimonials(testimonialsData);
    } catch (error) {
      toast.error('Failed to fetch testimonials');
      console.error('Error fetching testimonials:', error);
      setTestimonials([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  // Filter testimonials based on search term
  const filteredTestimonials = testimonials && Array.isArray(testimonials) ? testimonials.filter(testimonial =>
    (testimonial.name && testimonial.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (testimonial.company && testimonial.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (testimonial.position && testimonial.position.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : [];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'number' ? parseInt(value) : value
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
      newErrors.name = 'Name is required';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Testimonial content is required';
    }
    
    if (formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 1 and 5';
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
      if (currentTestimonial) {
        await updateTestimonial(currentTestimonial.id, formData);
        toast.success('Testimonial updated successfully');
      } else {
        await createTestimonial(formData);
        toast.success('Testimonial created successfully');
      }
      
      setIsModalOpen(false);
      fetchTestimonials();
    } catch (error) {
      toast.error('Failed to save testimonial');
      console.error('Error saving testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit testimonial
  const handleEdit = (testimonial) => {
    setCurrentTestimonial(testimonial);
    setFormData({
      name: testimonial.name || '',
      position: testimonial.position || '',
      company: testimonial.company || '',
      content: testimonial.content || '',
      rating: testimonial.rating || 5,
      featured: testimonial.featured || false
    });
    setIsModalOpen(true);
  };

  // Handle delete testimonial
  const handleDelete = async (testimonial) => {
    if (window.confirm(`Are you sure you want to delete testimonial from "${testimonial.name}"?`)) {
      try {
        await deleteTestimonial(testimonial.id);
        toast.success('Testimonial deleted successfully');
        fetchTestimonials();
      } catch (error) {
        toast.error('Failed to delete testimonial');
        console.error('Error deleting testimonial:', error);
      }
    }
  };

  // Handle add new testimonial
  const handleAdd = () => {
    setCurrentTestimonial(null);
    setFormData({
      name: '',
      position: '',
      company: '',
      content: '',
      rating: 5,
      featured: false
    });
    setErrors({});
    setIsModalOpen(true);
  };

  // Render star rating
  const renderRating = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  // Columns configuration for the table
  const columns = [
    {
      header: 'Name',
      accessor: 'name'
    },
    {
      header: 'Position',
      accessor: 'position'
    },
    {
      header: 'Company',
      accessor: 'company'
    },
    {
      header: 'Rating',
      accessor: 'rating',
      render: (value) => renderRating(value)
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
            <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
            <p className="text-gray-600">Manage client testimonials</p>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={20} className="mr-2" />
            Add Testimonial
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
              placeholder="Search testimonials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Testimonials Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Table
            columns={columns}
            data={filteredTestimonials}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
            emptyMessage="No testimonials found"
          />
        </motion.div>

        {/* Modal Form */}
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={currentTestimonial ? 'Edit Testimonial' : 'Add Testimonial'}
          onSubmit={handleSubmit}
          submitText={isSubmitting ? 'Saving...' : 'Save Testimonial'}
          size="lg"
        >
          <div className="space-y-4">
            <FormField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
              placeholder="Enter client name"
              required
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="Enter position/title"
              />
              
              <FormField
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter company name"
              />
            </div>
            
            <FormField
              label="Rating (1-5)"
              name="rating"
              type="number"
              value={formData.rating}
              onChange={handleInputChange}
              error={errors.rating}
              min="1"
              max="5"
            />
            
            <FormField
              label="Testimonial Content"
              name="content"
              type="textarea"
              value={formData.content}
              onChange={handleInputChange}
              error={errors.content}
              placeholder="Enter testimonial content"
              rows={4}
              required
            />
            
            <FormField
              label="Featured Testimonial"
              name="featured"
              type="checkbox"
              value={formData.featured}
              onChange={handleInputChange}
            />
          </div>
        </ModalForm>
      </div>
    </DashboardLayout>
  );
};

export default Testimonials;