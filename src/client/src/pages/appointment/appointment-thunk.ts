import { createAsyncThunk } from '@reduxjs/toolkit';
import * as appointmentService from './appointment-api';

export const fetchAppointmentDetailsById:any = createAsyncThunk(
  '/appointment',
  async (appointmentId: number) => {
    try {
      const response = await appointmentService.fetchAppointmentDetailsById(
        appointmentId
      );
      console.log("Response data : ============>",response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAllAppointmentDetails:any = createAsyncThunk(
  '/appointment-details',
  async (
    {
      limit,
      offset,
      keyword = '',
      filters = {}
    }: any
   ) => {
     try {
      console.log("Thunk body console:===========>",limit,offset,keyword);
      const response = await appointmentService.fetchAllAppointmentDetails(
        limit,
        offset,
        keyword,
        filters
      );
      console.log("Response data : ============>",response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
