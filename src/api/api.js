import axios from "axios";

const api = axios.create({ 
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api"
});

// Request interceptor to add auth token if needed
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API functions
export const login = (credentials) => api.post('/login', credentials);
export const logout = () => api.post('/logout');
export const getAuthUser = () => api.get('/user');

// Generic CRUD functions
export const getAll = (resource) => api.get(`/${resource}`);
export const getOne = (resource, id) => api.get(`/${resource}/${id}`);
export const create = (resource, data) => api.post(`/${resource}`, data);
export const update = (resource, id, data) => api.put(`/${resource}/${id}`, data);
export const remove = (resource, id) => api.delete(`/${resource}/${id}`);

// Specific API functions for each resource
export const getUsers = () => getAll('users');
export const getUser = (id) => getOne('users', id);
export const createUser = (data) => create('users', data);
export const updateUser = (id, data) => update('users', id, data);
export const deleteUser = (id) => remove('users', id);

export const getSkills = () => getAll('skills');
export const getSkill = (id) => getOne('skills', id);
export const createSkill = (data) => create('skills', data);
export const updateSkill = (id, data) => update('skills', id, data);
export const deleteSkill = (id) => remove('skills', id);

export const getProjects = () => getAll('projects');
export const getProject = (id) => getOne('projects', id);
export const createProject = (data) => create('projects', data);
export const updateProject = (id, data) => update('projects', id, data);
export const deleteProject = (id) => remove('projects', id);

export const getExperiences = () => getAll('experiences');
export const getExperience = (id) => getOne('experiences', id);
export const createExperience = (data) => create('experiences', data);
export const updateExperience = (id, data) => update('experiences', id, data);
export const deleteExperience = (id) => remove('experiences', id);

export const getEducations = () => getAll('educations');
export const getEducation = (id) => getOne('educations', id);
export const createEducation = (data) => create('educations', data);
export const updateEducation = (id, data) => update('educations', id, data);
export const deleteEducation = (id) => remove('educations', id);

export const getSocialLinks = () => getAll('social-links');
export const getSocialLink = (id) => getOne('social-links', id);
export const createSocialLink = (data) => create('social-links', data);
export const updateSocialLink = (id, data) => update('social-links', id, data);
export const deleteSocialLink = (id) => remove('social-links', id);

export const getMessages = () => getAll('messages');
export const getMessage = (id) => getOne('messages', id);
export const createMessage = (data) => create('messages', data);
export const updateMessage = (id, data) => update('messages', id, data);
export const deleteMessage = (id) => remove('messages', id);

export const getTestimonials = () => getAll('testimonials');
export const getTestimonial = (id) => getOne('testimonials', id);
export const createTestimonial = (data) => create('testimonials', data);
export const updateTestimonial = (id, data) => update('testimonials', id, data);
export const deleteTestimonial = (id) => remove('testimonials', id);

export default api;