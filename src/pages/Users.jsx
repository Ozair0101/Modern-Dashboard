import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search } from 'lucide-react';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/DashboardLayout';
import Table from '../components/Table';
import ModalForm from '../components/ModalForm';
import FormField from '../components/FormField';
import { 
  getUsers, 
  createUser, 
  updateUser, 
  deleteUser 
} from '../api/api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getUsers();
      // Handle paginated response - extract data array
      const usersData = response.data.data || response.data || [];
      setUsers(usersData);
    } catch (error) {
      toast.error('Failed to fetch users');
      console.error('Error fetching users:', error);
      setUsers([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  // Filter users based on search term
  const filteredUsers = users && Array.isArray(users) ? users.filter(user =>
    (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
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
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
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
      if (currentUser) {
        await updateUser(currentUser.id, formData);
        toast.success('User updated successfully');
      } else {
        await createUser(formData);
        toast.success('User created successfully');
      }
      
      setIsModalOpen(false);
      fetchUsers();
    } catch (error) {
      toast.error('Failed to save user');
      console.error('Error saving user:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit user
  const handleEdit = (user) => {
    setCurrentUser(user);
    setFormData({
      name: user.name || '',
      email: user.email || '',
      role: user.role || 'user'
    });
    setIsModalOpen(true);
  };

  // Handle delete user
  const handleDelete = async (user) => {
    if (window.confirm(`Are you sure you want to delete "${user.name}"?`)) {
      try {
        await deleteUser(user.id);
        toast.success('User deleted successfully');
        fetchUsers();
      } catch (error) {
        toast.error('Failed to delete user');
        console.error('Error deleting user:', error);
      }
    }
  };

  // Handle add new user
  const handleAdd = () => {
    setCurrentUser(null);
    setFormData({
      name: '',
      email: '',
      role: 'user'
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
      header: 'Email',
      accessor: 'email'
    },
    {
      header: 'Role',
      accessor: 'role',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'admin' 
            ? 'bg-purple-100 text-purple-800' 
            : 'bg-blue-100 text-blue-800'
        }`}>
          {value}
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
            <h1 className="text-2xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-600">Manage user accounts</p>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={20} className="mr-2" />
            Add User
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
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Table
            columns={columns}
            data={filteredUsers}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
            emptyMessage="No users found"
          />
        </motion.div>

        {/* Modal Form */}
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={currentUser ? 'Edit User' : 'Add User'}
          onSubmit={handleSubmit}
          submitText={isSubmitting ? 'Saving...' : 'Save User'}
          size="md"
        >
          <div className="space-y-4">
            <FormField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
              placeholder="Enter full name"
              required
            />
            
            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              placeholder="Enter email address"
              required
            />
            
            <FormField
              label="Role"
              name="role"
              type="select"
              value={formData.role}
              onChange={handleInputChange}
              options={[
                { value: 'user', label: 'User' },
                { value: 'admin', label: 'Administrator' }
              ]}
            />
          </div>
        </ModalForm>
      </div>
    </DashboardLayout>
  );
};

export default Users;