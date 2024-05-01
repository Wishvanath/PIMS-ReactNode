import { IRootState } from "../../app/store";

// import interface


export const selectAppointmentDetailsByIdAsyncStatus = (state: IRootState) =>
    state.appointment.appointmentDetailsByIdAsyncStatus;

export const selectAppointmentDetailsById = (state: IRootState) => 
    state.appointment.appointmentDetailsById;

export const selectAllAppointmentDetailsAsyncStatus = (state: IRootState) =>
    state.appointment.allAppointmentDetailsAsyncStatus;

export const selectAllAppointmentDetails = (state: IRootState) => 
    state.appointment.allAppointmentDetails;