import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAppointmentDetailsById, fetchAllAppointmentDetails } from './appointment-thunk';
import { hasSucceded } from '../../utils/async-status';
import { IRootState } from '../../app/store';
import { selectAppointmentDetailsById, selectAllAppointmentDetails } from './appointment-selector';

const Appointment = () => {
  const dispatch = useDispatch();
  const appointmentById = useSelector(selectAppointmentDetailsById);
  const allAppointmentDetails = useSelector(selectAllAppointmentDetails);

  const bodyPyload: any = {
    limit: 10,
    offset: 0,
    keyword: "Wish",
    filters: {
        assignedDoctor: [
            1,
            2
        ]
    }
  }

  console.log(appointmentById);

  useEffect(() => {
    dispatch(fetchAppointmentDetailsById(1));
  }, []);

  useEffect(() => {
    dispatch(fetchAllAppointmentDetails(
      bodyPyload
    ));
    
  }, []);


  // useEffect(
  //   () => () => {
  //     dispatch(fetchAppointmentDetailsById(1))
  //   }
  // );

  return (
    <>
      <h1>Single Appointment</h1>
      {JSON.stringify(appointmentById)}

      <h1>All Appointment details data</h1>

      {JSON.stringify(allAppointmentDetails)}
      


    </>
  );
};

export default Appointment;
