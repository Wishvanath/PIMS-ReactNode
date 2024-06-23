import  express  from "express";

import {
    getAppointmentDetails, 
    getAllAppointmentDetails,
    createAppointment,
    updateAppointmentById
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
    '/create',
    createAppointment
);

appointmentRouter.put(
    '/update',
    updateAppointmentById
);

export default appointmentRouter;