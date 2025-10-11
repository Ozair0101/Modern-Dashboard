import { getSkills } from './api';

// Test API connection
export const testApiConnection = async () => {
  try {
    console.log('Testing API connection...');
    const response = await getSkills();
    console.log('API connection successful:', response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('API connection failed:', error.message);
    return { success: false, error: error.message };
  }
};