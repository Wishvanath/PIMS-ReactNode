import { AsyncStatus } from '../../utils/async-status';

export default interface IAppointment {
  asyncStatus:
    | typeof AsyncStatus.INITIAL
    | typeof AsyncStatus.CANCELLED
    | typeof AsyncStatus.LOADING
    | typeof AsyncStatus.SUCCESS
    | typeof AsyncStatus.FAILURE;
  appointmentDetailsByIdAsyncStatus:
    | typeof AsyncStatus.INITIAL
    | typeof AsyncStatus.CANCELLED
    | typeof AsyncStatus.LOADING
    | typeof AsyncStatus.SUCCESS
    | typeof AsyncStatus.FAILURE;
  allAppointmentDetailsAsyncStatus:
    | typeof AsyncStatus.INITIAL
    | typeof AsyncStatus.CANCELLED
    | typeof AsyncStatus.LOADING
    | typeof AsyncStatus.SUCCESS
    | typeof AsyncStatus.FAILURE;
  patientId: number;
  firstName: string;
  lastName: string;
  nationality: string;
  gender: string;
  address: string;
  dob: string;
  phone: string;
  email: string;
  appointment: Array<IAppointmentDetails>;
  appointmentDetailsById: any;
  allAppointmentDetails: any;
}

export interface IAppointmentDetails {
  id: number;
  patientId: number;
  type: string;
  createdDate: string;
  updatedDate: string;
  date: string;
  time: string;
  appointmentDescp: string;
  doctorId: number;
}
