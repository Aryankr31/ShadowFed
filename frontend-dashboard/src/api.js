import axios from 'axios';

export default axios.create({
  baseURL: 'http://13.233.117.79:8000', // FastAPI metrics endpoint
});
