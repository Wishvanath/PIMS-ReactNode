import React, { useEffect, useState } from 'react';
import { Button, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchAppointmentDetailsById,
  fetchAllAppointmentDetails,
} from './appointment-thunk';
import { hasSucceded } from '../../utils/async-status';
import { IRootState } from '../../app/store';
import {
  selectAppointmentDetailsById,
  selectAllAppointmentDetails,
  selectAllAppointmentDetailsAsyncStatus,
  selectAppointmentDetailsByIdAsyncStatus,
} from './appointment-selector';
import AppointmentForm from '../../components/appointment-form/appointment-form';
import AppointmentsTable from '../../components/appointment-table/appointment-table';

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};
const content = <div style={contentStyle} />;

const Appointment = () => {
  const dispatch = useDispatch();
  const appointmentById = useSelector(selectAppointmentDetailsById);
  const allAppointmentDetails = useSelector(selectAllAppointmentDetails);
  const allAppointmentDetailsAsyncStatus = useSelector(
    selectAllAppointmentDetailsAsyncStatus
  );
  const appointmentDetailsByIdAsyncStatus = useSelector(
    selectAppointmentDetailsByIdAsyncStatus
  );
  const patients = allAppointmentDetails.rows;
  // const [demoLoading, setDemoLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setDemoLoading(true)
  //   }, 5000)
  // }, [])

  const bodyPyload: any = {
    limit: 10,
    offset: 0,
    keyword: '',
    filters: {
      assignedDoctor: [1, 2],
    },
  };

  console.log(appointmentById);

  useEffect(() => {
    dispatch(fetchAppointmentDetailsById(89));
    console.log("hasSucceded(appointmentDetailsByIdAsyncStatus):==========>",hasSucceded(appointmentDetailsByIdAsyncStatus));
  }, []);

  useEffect(() => {
    dispatch(fetchAllAppointmentDetails(bodyPyload));
  }, []);

  const loading =
    hasSucceded(allAppointmentDetailsAsyncStatus) &&
    hasSucceded(appointmentDetailsByIdAsyncStatus);

  return (
    <>
      {loading ? (
        <>
          <h1>Single Appointment</h1>
          {JSON.stringify(appointmentById)}

          <h1>All Appointment details data</h1>
          {JSON.stringify(allAppointmentDetails.rows)}

          <h1>Appointment Table</h1>
      <AppointmentsTable patients={patients} count = {20}/>
        </>
      ) : (
        <>
          <Spin tip="Loading" size="large">
            {content}
          </Spin>
        </>
      )}
      
      <h1>Appointment Form</h1>
      <AppointmentForm />


     

      
    </>
  );
};

export default Appointment;
