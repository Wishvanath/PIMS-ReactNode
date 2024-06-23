import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'antd';

interface Patient {
  patientId: number;
  firstName: string;
  phone: string;
  gender: string;
  appointment: {
    type: string;
    date: string;
    time: string;
    appointmentDescp: string;
    doctorId: number;
  }[];
}

interface Props {
  patients: Patient[];
  count: number;
}


const AppointmentTable: React.FC<Props> = ({ patients, count }) => {
  const navigate = useNavigate();
  const onViewVlick = (id: number) => {
    navigate(`/patients/${id}`);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of items per page
  const columns = [
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Appointment Type',
      dataIndex: 'appointmentType',
      key: 'appointmentType',
      //   render: (_: any, record: any) => record.appointment[0].type,
    },
    {
      title: 'Appointment Date',
      dataIndex: 'appointmentDate',
      key: 'appointmentDate',
      //   render: (_: any, record: any) => new Date(record.appointment[0].date).toLocaleDateString(),
    },
    {
      title: 'Appointment Time',
      dataIndex: 'appointmentTime',
      key: 'appointmentTime',
      //   render: (_: any, record: any) => new Date(record.appointment[0].time).toLocaleTimeString(),
    },
    {
      title: 'Description',
      dataIndex: 'appointmentDesc',
      key: 'appointmentDesc',
      //   render: (_: any, record: any) => record.appointment[0].appointmentDescp,
    },
    {
      title: 'View',
      dataIndex: 'view',
      key: 'view',
      // render: (_: any, record: any) => record.firstName,
    },
  ];


  const data = patients.map((patient, index) => ({
    key: index,
    firstName: patient.firstName,
    phone: patient.phone,
    appointmentType: patient.appointment[0].type,
    appointmentDate: patient.appointment[0].date,
    appointmentTime: patient.appointment[0].time,
    appointmentDesc: patient.appointment[0].appointmentDescp,
    view: (
      <Button onClick={(e) => onViewVlick(patient.patientId)}>
        View Details
      </Button>
    ),
  }));

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: count,
          onChange: onPageChange,
          showSizeChanger: false, // Optional: Hides the page size changer
        }}
      />
    </>
  );
};

export default AppointmentTable;
