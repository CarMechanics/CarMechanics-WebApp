import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppointmentList from './AppointmentList';

const AppointmentPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Array<Appointment>>([]);

  interface Appointment {
    id: any,
    userEmail: string;
    carId: string;
    date: string;
    description: string;
    labours: any
  }

  useEffect(() => {
    // Fetch appointments from the server
    axios
      .get('https://localhost:7053/Appointment', {
        params: { userEmail: window.sessionStorage.getItem('email')?.toString() },
      })
      .then((response) => {
        // Assuming the response data is an array of appointments
        debugger;
        console.log(response.data);
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  const onUpdate = async (id: any) => {
    // Your update logic goes here
  };

  const onDelete = async (userEmail: string, carId: string, appointmentId : any) => {
    try {
        console.log(JSON.stringify({ appointmentId }));
      const response = await fetch('https://localhost:7053/Appointment', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentId),
      });

      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      } else {
        // Successful deletion, update the state accordingly
        const updatedAppointments = appointments.filter(
          (appointment) => !(appointment.userEmail === userEmail && appointment.carId === carId)
        );
        setAppointments(updatedAppointments);
        console.log('Deletion successful');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="fullscreen" style={{ backgroundColor: '#222831', color: '#EEEEEE', position: 'fixed', top: 0 }}>
      <Link to="/AddAppointment">
        <button className="btn btn-primary my-5">Add Appointment</button>
      </Link>
      <AppointmentList appointments={appointments} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default AppointmentPage;
