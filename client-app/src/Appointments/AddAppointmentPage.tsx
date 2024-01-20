
import React from 'react';
import CreateAppointmentForm from './CreateAppointmentForm';
import axios from 'axios';

const AddAppointmentPage: React.FC = () => {
  const onSubmit = async (formData: any) => {
    try {
      const response = await axios.post('https://localhost:7053/Appointment', {
        userEmail: window.sessionStorage.getItem('email')?.toString(),
        carId: formData.carId,
        date: formData.date,
        description: formData.description
      });
      window.location.href = "/Appointments";
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div>
      <CreateAppointmentForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddAppointmentPage;
