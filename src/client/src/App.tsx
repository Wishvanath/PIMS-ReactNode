import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import PageNotFound from './pages/not-found/not-found';
import Appointment from './pages/appointment/appointment';
import SideBar from './components/sidebar/sidebar';
import SignUp from './pages/signup/signup';
import Dashboard from './pages/overview/overview';
import Patients from './pages/patients/patients';
import Doctors from './pages/doctors/doctors';
import Pharmacy from './pages/pharmacy/pharmacy';
import Billings from './pages/billings/billings';
import Settings from './pages/settings/settings';
import SinglePatient from './pages/patients/single-patient';
import AppointmentForm from './components/appointment-form/appointment-form';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="/" element={<SideBar />}>
      <Route index path="appointment" element={<Appointment />} />
      <Route index path="/new-appointment" element={<AppointmentForm />} />
      <Route index path="dashboard" element={<Dashboard />} />
      <Route index path="patients" element={<Patients />} />
      <Route index path="patients/:id" element={<SinglePatient />} />
      <Route index path="doctors" element={<Doctors />} />
      <Route index path="pharmacy" element={<Pharmacy />} />
      <Route index path="billings" element={<Billings />} />
      <Route index path="settings" element={<Settings />} />
    </Route>
  </Routes>
);

export default App;
