import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Checkbox, Spin } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

import AppointmentTable from '../../components/appointment-table/appointment-table';
import { fetchAllAppointmentDetails } from '../appointment/appointment-thunk';
import { hasSucceded } from '../../utils/async-status';

import {
  selectAllAppointmentDetails,
  selectAllAppointmentDetailsAsyncStatus,
} from '../appointment/appointment-selector';

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};
const content = <div style={contentStyle} />;

const { Search } = Input;
const doctorOptions = [
  { label: 'Dr. Smith', value: 1 },
  { label: 'Dr. Johnson', value: 2 },
  { label: 'Dr. Brown', value: 3 },
  { label: 'Dr. Taylor', value: 4 },
];

const Appointment = () => {
  const dispatch = useDispatch();
  const allAppointmentDetails = useSelector(selectAllAppointmentDetails);
  const allAppointmentDetailsAsyncStatus = useSelector(
    selectAllAppointmentDetailsAsyncStatus
  );
  const patients = allAppointmentDetails.rows;
  const patientsCount = allAppointmentDetails.count;
  const loading = hasSucceded(allAppointmentDetailsAsyncStatus);

  const [searchText, setSearchText] = useState<string>('');
  const [selectedDoctors, setSelectedDoctors] = useState<CheckboxValueType[]>(
    []
  );

  const onSearch = (value: string) => {
    setSearchText(value);
    console.log('Search Text:', value);
    // Implement search logic here
  };

  const onDoctorChange = (checkedValues: CheckboxValueType[]) => {
    setSelectedDoctors(checkedValues);
    console.log('Selected Doctors:', checkedValues);
    // Implement filter logic here
  };

  const bodyPyload: any = {
    limit: patientsCount,
    offset: 0,
    keyword: searchText,
    filters: {
      assignedDoctor: selectedDoctors,
    },
  };

  useEffect(() => {
    dispatch(fetchAllAppointmentDetails(bodyPyload));
  }, [searchText, selectedDoctors]);

  return (
    <>
      <h1>All Patient's Appointment Details</h1>
      <div style={{ padding: 20 }}>
        <Search
          placeholder="Search..."
          onSearch={onSearch}
          enterButton
          style={{ marginBottom: 20 }}
        />
        <Checkbox.Group
          options={doctorOptions}
          value={selectedDoctors}
          onChange={onDoctorChange}
        />
      </div>
      {loading ? (
        <>
          <AppointmentTable patients={patients} count={patientsCount} />
        </>
      ) : (
        <>
          <Spin tip="Loading" size="large">
            {content}
          </Spin>
        </>
      )}
    </>
  );
};
export default Appointment;
