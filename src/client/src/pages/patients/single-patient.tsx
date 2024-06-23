import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form, Input, DatePicker, Button, message } from 'antd';
import dayjs from 'dayjs';
import { useForm } from 'antd/es/form/Form';

// import * as moment from 'moment';
import { fetchAppointmentDetailsById, updateAppointmentById } from '../appointment/appointment-thunk';
import { hasSucceded } from '../../utils/async-status';
import {
  selectAppointmentDetailsById,
  selectAppointmentDetailsByIdAsyncStatus,
  selectUpdateAppointmentByIdAsyncStatus,
  selectUpdateAppointmentByIdResponse,
} from '../appointment/appointment-selector';
const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};
const content = <div style={contentStyle} />;

// const formatDateString = (dateString: string): string => {
//   const date = new Date(dateString);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// };

const SinglePatient = () => {
  const dispatch = useDispatch();
  const [form] = useForm();

  const appointmentById = useSelector(selectAppointmentDetailsById);
  const appointmentDetailsByIdAsyncStatus = useSelector(
    selectAppointmentDetailsByIdAsyncStatus
  );
  const updateAppointmentByIdAsyncStatus = useSelector(
    selectUpdateAppointmentByIdAsyncStatus
  );
  const { id } = useParams();
  const data = appointmentById[0];

  useEffect(() => {
    dispatch(fetchAppointmentDetailsById(id));
  }, [id,updateAppointmentByIdAsyncStatus]);

  const loading = hasSucceded(appointmentDetailsByIdAsyncStatus);

  
  const onFinish = async (values: any) => {
    // console.log("Form values:=========>", values);
    values.patientId = data.patientId;
    console.log(JSON.stringify(values))
    await dispatch(updateAppointmentById(values));
    // await dispatch(fetchAppointmentDetailsById(id));
   if (!hasSucceded(updateAppointmentByIdAsyncStatus)) {
     message.success('Successfully created appointment');
    //  form.resetFields();
    
   } else {
     message.error('Error Occored');
   }
 };


  return (
    <>
      <h1>Patient details</h1>
      {loading ? (
        <>
          {/* <h1>Single Appointment</h1> */}
          {/* {JSON.stringify(appointmentById)} */}

          <Form layout="vertical"
           onFinish={onFinish}
           form={form}
           initialValues={{
            type: 'Clinical',
            firstName: data.firstName,
            lastName: data.lastName,
            nationality: data.nationality,
            gender: data.gender,
            address: data.address,
            dob:dayjs(data.dob),
            phone: data.phone,
            email: data.email,
            appointmentDescp: data.appointment[0].appointmentDescp,
            date: dayjs(data.appointment[0].date),
            time: dayjs(data.appointment[0].time),
            doctorId: data.appointment[0].doctorId,

            // Default appointment type
          }}
          >
            <Form.Item label="First Name"  name="firstName">
              <Input value={data.firstName} />
            </Form.Item>
            <Form.Item label="Last Name" name="lastName">
              <Input value={data.lastName}  />
            </Form.Item>
            <Form.Item label="Nationality" name="nationality">
              <Input value={data.nationality}  />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
              <Input value={data.gender}  />
            </Form.Item>
            <Form.Item label="Address"  name="address">
              <Input value={data.address}  />
            </Form.Item>
            <Form.Item label="Date of Birth" name="dob">
              <DatePicker
                // value={dayjs(data.dob)}
                format="YYYY-MM-DD"
              />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input value={data.phone}  />
            </Form.Item>
            <Form.Item label="Email"  name="email">
              <Input value={data.email}  />
            </Form.Item>
            <Form.Item label="Appointment Description"  name="appointmentDescp">
              <Input value={data.appointment[0].appointmentDescp}  />
            </Form.Item>
            <Form.Item label="Appointment Date" name="date">
              <DatePicker
                value={dayjs(data.appointment[0].date)}
                format="YYYY-MM-DD"
              />
            </Form.Item>
            <Form.Item label="Appointment Time" name="time">
              <DatePicker
                value={dayjs(data.appointment[0].time)}
                format="YYYY-MM-DD"
              />
            </Form.Item>
            <Form.Item label="Doctor ID" name="doctorId">
              <Input value={data.appointment[0].doctorId}  />
            </Form.Item>
            <Form.Item label="Appointment Type" name="type">
          <Input disabled />
        </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>


          </Form>
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

export default SinglePatient;
