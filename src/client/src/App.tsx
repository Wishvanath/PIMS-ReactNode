import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import PageNotFound from './pages/not-found/not-found';
import Appointment from './pages/appointment/appointment';
import SideBar from './components/sidebar/sidebar';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/" element={<SideBar />}>
      <Route index path="appointment" element={<Appointment />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  </Routes>
);

export default App;
