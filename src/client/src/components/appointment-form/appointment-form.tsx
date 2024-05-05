import React from 'react';
import { Form, Input, Select, DatePicker, TimePicker, Button, message } from 'antd';
// import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment } from '../../pages/appointment/appointment-thunk';
import { hasSucceded } from '../../utils/async-status';
import { selectCreateAppointmentResponseAsyncStatus } from '../../pages/appointment/appointment-selector';
import { useForm } from 'antd/es/form/Form';


const { Option } = Select;
const AppointmentForm = () => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const createAppointmentAsyncStatus = useSelector(selectCreateAppointmentResponseAsyncStatus)
    
  const onFinish = (values:any) => {
    // console.log('Submitted values:', values);
    console.log("VALUES: =======>", JSON.stringify(values))
    // Handle submission logic here (e.g., API call)
    dispatch(createAppointment(values))
    console.log("DIspatch createAppointmentAsyncStatus value :==============> ",hasSucceded(createAppointmentAsyncStatus) );  
    if( !hasSucceded(createAppointmentAsyncStatus)){
      // success message
      message.success('Successfully created appointment')
      form.resetFields();
    }else{
      message.error('Error Occored');
    }
  };

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
      initialValues={{
        type: 'Clinical', // Default appointment type
      }}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Nationality"
        name="nationality"
        rules={[{ required: true, message: 'Please input your nationality!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: 'Please select your gender!' }]}
      >
        <Select>
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please input your address!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="dob"
        rules={[{ required: true, message: 'Please select your date of birth!' }]}
      >
        <DatePicker format='YYYY-MM-DD' />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email address!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Appointment Type"
        name="type"
      >
        <Input disabled />
      </Form.Item>

      <Form.Item
        label="Appointment Date"
        name="date"
        rules={[{ required: true, message: 'Please select appointment date!' }]}
      >
        <DatePicker format='YYYY-MM-DD' />
      </Form.Item>

      <Form.Item
        label="Appointment Time"
        name="time"
        rules={[{ required: true, message: 'Please select appointment time!' }]}
      >
        <DatePicker format='YYYY-MM-DD' />
      </Form.Item>

      <Form.Item
        label="Appointment Description"
        name="appointmentDescp"
        rules={[{ required: true, message: 'Please provide appointment description!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Doctor ID"
        name="doctorId"
        rules={[{ required: true, message: 'Please input doctor ID!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AppointmentForm;
