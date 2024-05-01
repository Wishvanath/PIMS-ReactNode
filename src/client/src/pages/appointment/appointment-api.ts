import requestInstance from '../../utils/instance-utils';

export const fetchAppointmentDetailsById = (appointmentId: number) =>
  requestInstance.get(`/appointment/${appointmentId}`);


export const fetchAllAppointmentDetails = (
  limit: number,
  offset: number,
  keyword: any,
  filters: any,
) =>
  requestInstance.post(`/appointment/all-details`, {
    limit,
    offset,
    keyword,
    filters
  });
