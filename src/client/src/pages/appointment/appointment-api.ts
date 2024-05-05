import requestInstance from '../../utils/instance-utils';

export const fetchAppointmentDetailsById = (appointmentId: number) =>
  requestInstance.get(`/appointment/${appointmentId}`);

export const fetchAllAppointmentDetails = (
  limit: number,
  offset: number,
  keyword: any,
  filters: any
) =>
  requestInstance.post(`/appointment/all-details`, {
    limit,
    offset,
    keyword,
    filters,
  });

export const createAppointment = (
  firstName: string,
  lastName: string,
  nationality: string,
  gender: string,
  address: string,
  dob: string,
  phone: string,
  email: string,
  type: string,
  date: string,
  time: string,
  appointmentDescp: string,
  doctorId: string
) =>
  requestInstance.post(`/appointment/create`, {
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
  });
