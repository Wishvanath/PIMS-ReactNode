import axios from 'axios';

const microServiceInstance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export { microServiceInstance };
