import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import AppLayout from './AppLayout';
import PageNotFound from './pages/not-found/not-found';
import Appointment from './pages/appointment/appointment';

const AppRouter = () => (
  <AppLayout>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="*" element={<PageNotFound />} />
        {/* define more routes here */}
      </Routes>
    </Router>
  </AppLayout>
);

export default AppRouter;
