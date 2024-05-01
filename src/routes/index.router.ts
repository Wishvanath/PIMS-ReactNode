import express from 'express';
import appointmentRouter from './appointment.router';

const router = express.Router();

router.use('/appointment', appointmentRouter);

export default router;
