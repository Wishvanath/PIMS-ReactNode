import  express  from "express";

import {
    getAppointmentDetails, 
    getAllAppointmentDetails
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

export default appointmentRouter;