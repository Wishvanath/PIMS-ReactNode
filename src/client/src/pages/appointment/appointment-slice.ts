import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import thunk methods
import { fetchAppointmentDetailsById, fetchAllAppointmentDetails } from './appointment-thunk';
import { AsyncStatus } from '../../utils/async-status';
import IAppointment from './appointment-interface';

const initialState = {
  appointmentDetailsByIdAsyncStatus: AsyncStatus.INITIAL,
  appointmentDetailsById: [],

  allAppointmentDetailsAsyncStatus: AsyncStatus.INITIAL,
  allAppointmentDetails: [],
  
} as any;

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    // kind of function
  },
  extraReducers(builder: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder
      //get appointment details by id
      .addCase(fetchAppointmentDetailsById.pending, (state: IAppointment) => {
        state.appointmentDetailsByIdAsyncStatus = AsyncStatus.LOADING;
      })
      .addCase(fetchAppointmentDetailsById.rejected, (state: IAppointment) => {
        state.appointmentDetailsByIdAsyncStatus = AsyncStatus.FAILURE;
      })
      .addCase(
        fetchAppointmentDetailsById.fulfilled,
        (state: IAppointment, { payload }: PayloadAction<any>) => {
          state.appointmentDetailsByIdAsyncStatus = AsyncStatus.SUCCESS;
          state.appointmentDetailsById = payload;
          console.log("Payload:=======>", payload);
        }
      )

      // get all appointment details by filter and search keyword
      
      .addCase(fetchAllAppointmentDetails.pending, (state: any) => {
        state.allAppointmentDetailsAsyncStatus = AsyncStatus.LOADING;
      })
      .addCase(fetchAllAppointmentDetails.rejected, (state: any) => {
        state.allAppointmentDetailsAsyncStatus = AsyncStatus.FAILURE;
      })
      .addCase(
        fetchAllAppointmentDetails.fulfilled,
        (state: IAppointment, { payload }: any) => {
          state.allAppointmentDetailsAsyncStatus = AsyncStatus.SUCCESS;
          state.allAppointmentDetails = payload;
          console.log("Payload:=======>", payload);
        }
      );
  },
});

export default appointmentSlice.reducer;
