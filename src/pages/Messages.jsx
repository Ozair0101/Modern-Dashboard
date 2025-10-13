import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/DashboardLayout';
import Table from '../components/Table';
import ModalForm from '../components/ModalForm';
import { 
  getMessages, 
  getMessage, 
  deleteMessage 
} from '../api/api';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch messages
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await getMessages();
      // Handle paginated response - extract data array
      const messagesData = response.data.data || response.data || [];
      setMessages(messagesData);
    } catch (error) {
      toast.error('Failed to fetch messages');
      console.error('Error fetching messages:', error);
      setMessages([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  // Filter messages based on search term
  const filteredMessages = messages && Array.isArray(messages) ? messages.filter(msg =>
    (msg.name && msg.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (msg.email && msg.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (msg.subject && msg.subject.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : [];

  // Handle view message
  const handleView = async (message) => {
    try {
      const response = await getMessage(message.id);
      setSelectedMessage(response.data);
      setIsViewModalOpen(true);
    } catch (error) {
      toast.error('Failed to fetch message details');
      console.error('Error fetching message:', error);
    }
  };

  // Handle delete message
  const handleDelete = async (message) => {
    if (window.confirm(`Are you sure you want to delete message from "${message.name}"?`)) {
      try {
        setIsDeleting(true);
        await deleteMessage(message.id);
        toast.success('Message deleted successfully');
        fetchMessages();
      } catch (error) {
        toast.error('Failed to delete message');
        console.error('Error deleting message:', error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
      header: 'Subject',
      accessor: 'subject'
    },
    {
      header: 'Date',
      accessor: 'created_at',
      render: (value) => formatDate(value)
    },
    {
      header: 'Status',
      accessor: 'read',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {value ? 'Read' : 'Unread'}
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
            <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600">Manage contact form messages</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Messages Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Table
            columns={columns}
            data={filteredMessages}
            onView={handleView}
            onDelete={handleDelete}
            actions={['delete']}
            loading={loading}
            emptyMessage="No messages found"
          />
        </motion.div>

        {/* View Message Modal */}
        <ModalForm
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          title={selectedMessage ? `Message from ${selectedMessage.name}` : 'Message Details'}
          submitText="Close"
          onSubmit={(e) => {
            e.preventDefault();
            setIsViewModalOpen(false);
          }}
          size="lg"
        >
          {selectedMessage && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedMessage.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-sm text-gray-900">
                    <a href={`mailto:${selectedMessage.email}`} className="text-blue-600 hover:text-blue-800">
                      {selectedMessage.email}
                    </a>
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <p className="mt-1 text-sm text-gray-900">{formatDate(selectedMessage.created_at)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <p className="mt-1 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedMessage.read 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {selectedMessage.read ? 'Read' : 'Unread'}
                    </span>
                  </p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <p className="mt-1 text-sm text-gray-900">{selectedMessage.subject}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                  {selectedMessage.message}
                </div>
              </div>
            </div>
          )}
        </ModalForm>
      </div>
    </DashboardLayout>
  );
};

export default Messages;