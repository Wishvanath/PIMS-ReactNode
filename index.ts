import http from 'http';
import path from 'path';
import dotenv from 'dotenv';
import appWrapper from './app';

if (process.env.NODE_ENV !== 'production') {
  const envPath = path.join(`${__dirname}`, '..', '..', '.env');
  dotenv.config({
    path: envPath,
    debug: true,
  });
}

const port = parseInt(process.env.API_CORE_PORT as string, 10) || 4000;
const applicationSetup = async () => {
  try {
    const app = await appWrapper();
    app.set('port', port);
    http.createServer(app).listen(port, () => {
      console.log(`Backend server is listening on PORT: ${port}`);
    });
  } catch (error:any) {
    if (error.syscall !== 'listen') {
      throw error;
    }
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(`PORT: ${port} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`PORT: ${port} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
};
applicationSetup();