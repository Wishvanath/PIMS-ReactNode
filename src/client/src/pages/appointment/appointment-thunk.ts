import { createAsyncThunk } from '@reduxjs/toolkit';
import * as appointmentService from './appointment-api';

export const fetchAppointmentDetailsById: any = createAsyncThunk(
  '/appointment',
  async (appointmentId: number) => {
    try {
      const response = await appointmentService.fetchAppointmentDetailsById(
        appointmentId
      );
      console.log('Response data : ============>', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAllAppointmentDetails: any = createAsyncThunk(
  '/appointment-details',
  async ({ limit, offset, keyword = '', filters = {} }: any) => {
    try {
      console.log('Thunk body console:===========>', limit, offset, keyword);
      const response = await appointmentService.fetchAllAppointmentDetails(
        limit,
        offset,
        keyword,
        filters
      );
      console.log('Response data : ============>', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createAppointment: any = createAsyncThunk(
  '/create',
  async ({
    firstName,
    lastName,
    nationality,
    gender,
    address,
    dob,
    phone,
    email,
    type,
    date,
    time,
    appointmentDescp,
    doctorId,
  }: any) => {
    try {
      console.log('Thunk console:=============>', firstName, lastName);
      const response = await appointmentService.createAppointment(
        firstName,
        lastName,
        nationality,
        gender,
        address,
        dob,
        phone,
        email,
        type,
        date,
        time,
        appointmentDescp,
        doctorId
      );
      console.log("Appointmeent thunk response:========>", response.data);
      return response.data
    } catch (error) {
      console.log(error);
    }
  }
);


export const updateAppointmentById: any = createAsyncThunk(
  '/update',
  async ({
    firstName,
    lastName,
    nationality,
    gender,
    address,
    dob,
    phone,
    email,
    type,
    date,
    time,
    appointmentDescp,
    doctorId,
    patientId
  }: any) => {
    try {
      console.log('Thunk console:=============>', firstName, lastName);
      const response = await appointmentService.updateAppointmentById(
        firstName,
        lastName,
        nationality,
        gender,
        address,
        dob,
        phone,
        email,
        type,
        date,
        time,
        appointmentDescp,
        doctorId,
        patientId
      );
      console.log("Appointmeent thunk response:========>", response.data);
      return response.data
    } catch (error) {
      console.log(error);
    }
  }
);