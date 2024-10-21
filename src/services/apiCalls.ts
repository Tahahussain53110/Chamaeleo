import axios from 'axios';

export const getEvent = async () => {
  const response = await axios.get('https://4l4tw6qyjcziw6i3pluj63ybre0upsuz.lambda-url.us-east-1.on.aws/api');
  return response.data.data;
};
