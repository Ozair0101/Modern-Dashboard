import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Link as LinkIcon } from 'lucide-react';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/DashboardLayout';
import Table from '../components/Table';
import ModalForm from '../components/ModalForm';
import FormField from '../components/FormField';
import { 
  getSocialLinks, 
  createSocialLink, 
  updateSocialLink, 
  deleteSocialLink 
} from '../api/api';

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSocialLink, setCurrentSocialLink] = useState(null);
  const [formData, setFormData] = useState({
    platform: '',
    url: '',
    icon: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch social links
  useEffect(() => {
    fetchSocialLinks();
  }, []);

  const fetchSocialLinks = async () => {
    try {
      setLoading(true);
      const response = await getSocialLinks();
      setSocialLinks(response.data);
    } catch (error) {
      toast.error('Failed to fetch social links');
      console.error('Error fetching social links:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter social links based on search term
  const filteredSocialLinks = socialLinks.filter(link =>
    link.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    
    if (!formData.platform.trim()) {
      newErrors.platform = 'Platform name is required';
    }
    
    if (!formData.url.trim()) {
      newErrors.url = 'URL is required';
    } else if (!/^https?:\/\/.*/.test(formData.url)) {
      newErrors.url = 'URL must start with http:// or https://';
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
      if (currentSocialLink) {
        await updateSocialLink(currentSocialLink.id, formData);
        toast.success('Social link updated successfully');
      } else {
        await createSocialLink(formData);
        toast.success('Social link created successfully');
      }
      
      setIsModalOpen(false);
      fetchSocialLinks();
    } catch (error) {
      toast.error('Failed to save social link');
      console.error('Error saving social link:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit social link
  const handleEdit = (socialLink) => {
    setCurrentSocialLink(socialLink);
    setFormData({
      platform: socialLink.platform || '',
      url: socialLink.url || '',
      icon: socialLink.icon || ''
    });
    setIsModalOpen(true);
  };

  // Handle delete social link
  const handleDelete = async (socialLink) => {
    if (window.confirm(`Are you sure you want to delete "${socialLink.platform}" link?`)) {
      try {
        await deleteSocialLink(socialLink.id);
        toast.success('Social link deleted successfully');
        fetchSocialLinks();
      } catch (error) {
        toast.error('Failed to delete social link');
        console.error('Error deleting social link:', error);
      }
    }
  };

  // Handle add new social link
  const handleAdd = () => {
    setCurrentSocialLink(null);
    setFormData({
      platform: '',
      url: '',
      icon: ''
    });
    setErrors({});
    setIsModalOpen(true);
  };

  // Columns configuration for the table
  const columns = [
    {
      header: 'Platform',
      accessor: 'platform'
    },
    {
      header: 'URL',
      accessor: 'url',
      render: (value) => (
        <a 
          href={value} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <LinkIcon size={16} className="mr-1" />
          Visit
        </a>
      )
    },
    {
      header: 'Icon',
      accessor: 'icon',
      render: (value) => value || 'N/A'
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Social Links</h1>
            <p className="text-gray-600">Manage social media links</p>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={20} className="mr-2" />
            Add Social Link
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
              placeholder="Search social links..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Social Links Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Table
            columns={columns}
            data={filteredSocialLinks}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
            emptyMessage="No social links found"
          />
        </motion.div>

        {/* Modal Form */}
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={currentSocialLink ? 'Edit Social Link' : 'Add Social Link'}
          onSubmit={handleSubmit}
          submitText={isSubmitting ? 'Saving...' : 'Save Link'}
          size="md"
        >
          <div className="space-y-4">
            <FormField
              label="Platform"
              name="platform"
              value={formData.platform}
              onChange={handleInputChange}
              error={errors.platform}
              placeholder="Enter platform name (e.g., GitHub, LinkedIn)"
              required
            />
            
            <FormField
              label="URL"
              name="url"
              type="url"
              value={formData.url}
              onChange={handleInputChange}
              error={errors.url}
              placeholder="https://example.com/username"
              required
            />
            
            <FormField
              label="Icon Class (Optional)"
              name="icon"
              value={formData.icon}
              onChange={handleInputChange}
              placeholder="Enter icon class (e.g., fab fa-github)"
            />
          </div>
        </ModalForm>
      </div>
    </DashboardLayout>
  );
};

export default SocialLinks;