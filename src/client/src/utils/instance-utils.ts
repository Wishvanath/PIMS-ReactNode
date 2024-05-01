import axios from 'axios';

// const apiCoreHost = (process.env.CORE_API_URL || '').trimRight();

// const apiCoreHost = (process.env.CORE_API_URL || '').trimRight();

const apiCoreHost = "http://localhost:4000/pims";


const requestHandler = (req: any) => req;
const coreApiInstance = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: `${apiCoreHost}/api/`,
});

coreApiInstance.interceptors.request.use((request) => requestHandler(request));

export default coreApiInstance;
