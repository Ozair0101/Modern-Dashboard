import React, { useState, useEffect, useRef } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../contexts/AuthContext';
import { getProfile, updateProfile, getUserProfile, updateUserProfile } from '../api/api';
import { toast } from 'react-toastify';

const Profile = () => {
  const authContext = useAuth();
  const { user, setUser } = authContext || {};
  
  const [profile, setProfile] = useState({
    name: '',
    title: '',
    bio: '',
    about: '',
    profile_image: '',
    resume: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    company: '',
    address: '',
    about_me: '',
    phone_number: '',
    date_of_birth: '',
    profile_picture: ''
  });
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState('');
  const fileInputRef = useRef(null);

  // Fetch user profile data
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      // First try to get the new profile structure
      if (user && user.id) {
        try {
          const response = await getUserProfile(user.id);
          // Merge the profile data with user data for display
          setProfile(prev => ({
            ...prev,
            ...response.data,
            name: user.name || '',
            email: user.email || '',
            title: user.title || '',
            bio: user.bio || '',
            about: user.about || '',
            profile_image: user.profile_image || '',
            phone: user.phone || '',
            location: user.location || '',
            website: user.website || '',
            company: user.company || '',
            address: user.address || ''
          }));
          setPreviewImage(response.data.profile_picture || user.profile_image || '');
        } catch (error) {
          // If new profile doesn't exist, fall back to old structure
          const response = await getProfile();
          setProfile(response.data);
          setPreviewImage(response.data.profile_image || '');
        }
      } else {
        // Fallback if user context is not available
        const response = await getProfile();
        setProfile(response.data);
        setPreviewImage(response.data.profile_image || '');
      }
    } catch (error) {
      toast.error('Failed to fetch profile data');
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.match('image.*')) {
        toast.error('Please select an image file');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
      
      // Update profile state with file (we'll handle upload on form submit)
      setProfile(prev => ({
        ...prev,
        profile_picture: file
      }));
      
      // Clear any previous image errors
      if (errors.profile_picture) {
        setErrors(prev => ({
          ...prev,
          profile_picture: ''
        }));
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setPreviewImage('');
    setProfile(prev => ({
      ...prev,
      profile_picture: ''
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!profile.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!profile.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      // Create FormData for file upload
      const formData = new FormData();
      
      // Append all profile fields for the new profile system
      Object.keys(profile).forEach(key => {
        // Skip profile_picture for now, we'll handle it separately
        if (key !== 'profile_picture' && key !== 'profile_image') {
          formData.append(key, profile[key] || '');
        }
      });
      
      // Handle profile picture
      if (profile.profile_picture && typeof profile.profile_picture !== 'string') {
        // It's a file object
        formData.append('profile_picture', profile.profile_picture);
      } else if (typeof profile.profile_picture === 'string') {
        // It's already a URL, send it as is
        formData.append('profile_picture', profile.profile_picture);
      }
      
      // For the old system, handle profile_image
      if (profile.profile_image && typeof profile.profile_image !== 'string') {
        // It's a file object
        formData.append('profile_image', profile.profile_image);
      } else if (typeof profile.profile_image === 'string') {
        // It's already a URL, send it as is
        formData.append('profile_image', profile.profile_image);
      }
      
      let response;
      // Update the new profile system if user ID is available
      if (user && user.id) {
        response = await updateUserProfile(user.id, formData);
        // Also update the old system for backward compatibility
        await updateProfile(formData);
      } else {
        // Fallback to old system
        response = await updateProfile(formData);
      }
      
      // Update state with response data
      setProfile(response.data);
      setPreviewImage(response.data.profile_picture || response.data.profile_image || '');
      
      // Update user in context if setUser is available and is a function
      if (setUser && typeof setUser === 'function') {
        setUser({
          ...user,
          ...response.data
        });
      }
      
      // Also update localStorage
      localStorage.setItem('userData', JSON.stringify({
        ...user,
        ...response.data
      }));
      
      setIsEditing(false);
      toast.success('Profile updated successfully');
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
      toast.error('Failed to update profile');
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 rounded-t-2xl">
                <div className="flex flex-wrap -mx-3">
                  <div className="flex-none w-auto max-w-full px-3">
                    <div className="text-size-base h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200 ease-soft-in-out">
                      <img 
                        src={previewImage || profile.profile_image || "https://themewagon.github.io/argon-dashboard-tailwind/assets/img/bruce-mars.jpg"} 
                        alt="profile_image" 
                        className="w-full shadow-soft-sm rounded-xl object-cover h-full" 
                        onError={(e) => {
                          e.target.src = "https://themewagon.github.io/argon-dashboard-tailwind/assets/img/bruce-mars.jpg";
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-none w-auto max-w-full px-3 my-auto">
                    <div className="h-full">
                      <h5 className="mb-1 dark:text-white">{profile.name || 'Dashboard Admin'}</h5>
                      <p className="mb-0 font-semibold leading-normal dark:text-white dark:opacity-60 text-sm">{profile.title || 'Administrator'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-auto p-4">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3">
                  <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                    <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                          <i className="ni leading-none ni-mobile-button text-dark relative top-0.75 text-xs"></i>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">Mobile</h6>
                          <span className="leading-tight dark:text-white/80 text-xs">{profile.phone || profile.phone_number || 'Not provided'}</span>
                        </div>
                      </div>
                    </li>
                    <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 border-t-0 text-inherit rounded-xl">
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                          <i className="ni leading-none ni-email-83 text-dark relative top-0.75 text-xs"></i>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">Email</h6>
                          <span className="leading-tight dark:text-white/80 text-xs">{profile.email || 'Not provided'}</span>
                        </div>
                      </div>
                    </li>
                    <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 border-t-0 text-inherit rounded-xl">
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                          <i className="ni leading-none ni-pin-3 text-dark relative top-0.75 text-xs"></i>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">Location</h6>
                          <span className="leading-tight dark:text-white/80 text-xs">{profile.location || profile.address || 'Not provided'}</span>
                        </div>
                      </div>
                    </li>
                    <li className="relative flex justify-between py-2 pr-4 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                          <i className="ni leading-none ni-world text-dark relative top-0.75 text-xs"></i>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">Website</h6>
                          <span className="leading-tight dark:text-white/80 text-xs">
                            {profile.website ? (
                              <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                Visit Website
                              </a>
                            ) : (
                              'Not provided'
                            )}
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-full px-3 lg:w-2/3 lg:flex-none">
          <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-2xl">
              <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-auto max-w-full px-3">
                  <h6 className="mb-0 dark:text-white">Profile Information</h6>
                </div>
                <div className="flex-none w-auto max-w-full px-3 ml-auto">
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-auto p-4">
              {isEditing ? (
                <form onSubmit={handleSubmit}>
                  {/* Profile Image Upload Section */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img 
                          src={previewImage || profile.profile_image || "https://themewagon.github.io/argon-dashboard-tailwind/assets/img/bruce-mars.jpg"} 
                          alt="Preview" 
                          className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                          onError={(e) => {
                            e.target.src = "https://themewagon.github.io/argon-dashboard-tailwind/assets/img/bruce-mars.jpg";
                          }}
                        />
                        {previewImage && (
                          <button
                            type="button"
                            onClick={removeImage}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                          >
                            ×
                          </button>
                        )}
                      </div>
                      <div>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleImageChange}
                          accept="image/*"
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={triggerFileInput}
                          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                          Choose Image
                        </button>
                        <p className="text-xs text-gray-500 mt-1">JPG, PNG, GIF up to 5MB</p>
                      </div>
                    </div>
                    {errors.profile_picture && <p className="mt-1 text-sm text-red-600">{errors.profile_picture}</p>}
                    {errors.profile_image && <p className="mt-1 text-sm text-red-600">{errors.profile_image}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={profile.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="text"
                        name="phone_number"
                        value={profile.phone_number || profile.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                      <input
                        type="date"
                        name="date_of_birth"
                        value={profile.date_of_birth}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        name="address"
                        value={profile.address || profile.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={profile.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                      <input
                        type="url"
                        name="website"
                        value={profile.website}
                        onChange={handleInputChange}
                        placeholder="https://example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">About Me</label>
                    <textarea
                      name="about_me"
                      value={profile.about_me}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="mb-4">
                    <h6 className="font-bold leading-tight uppercase dark:text-white text-xs text-slate-500">Title</h6>
                    <p className="text-gray-700">{profile.title || 'Not provided'}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="font-bold leading-tight uppercase dark:text-white text-xs text-slate-500">About Me</h6>
                    <p className="text-gray-700">{profile.about_me || 'Not provided'}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="font-bold leading-tight uppercase dark:text-white text-xs text-slate-500">Bio</h6>
                    <p className="text-gray-700">{profile.bio || 'Not provided'}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="font-bold leading-tight uppercase dark:text-white text-xs text-slate-500">Date of Birth</h6>
                    <p className="text-gray-700">{profile.date_of_birth || 'Not provided'}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="font-bold leading-tight uppercase dark:text-white text-xs text-slate-500">Company</h6>
                    <p className="text-gray-700">{profile.company || 'Not provided'}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="font-bold leading-tight uppercase dark:text-white text-xs text-slate-500">Address</h6>
                    <p className="text-gray-700">{profile.address || profile.location || 'Not provided'}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;