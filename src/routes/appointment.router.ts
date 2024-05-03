import  express  from "express";

import {
    getAppointmentDetails, 
    getAllAppointmentDetails,
    createAppointment
} from '../controllers/appointment.controller'
const appointmentRouter = express.Router();

appointmentRouter.get(
    '/:id',
    getAppointmentDetails
);

appointmentRouter.post(
    '/all-details',
    getAllAppointmentDetails
);
appointmentRouter.post(
    '/',
    createAppointment
);

export default appointmentRouter;