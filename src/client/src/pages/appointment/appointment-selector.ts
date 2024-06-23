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

export const selectCreateAppointmentResponseAsyncStatus = (state: IRootState) =>
    state.appointment.createAppointmentResponseAsyncStatus;

export const selectCreateAppointmentResponse = (state: IRootState) => 
    state.appointment.createAppointmentResponse;

export const selectUpdateAppointmentByIdResponse = (state: IRootState) => 
    state.appointment.updateAppointmentByIdResponse;

export const selectUpdateAppointmentByIdAsyncStatus = (state: IRootState) => 
    state.appointment.updateAppointmentByIdResponseAsyncStatus;