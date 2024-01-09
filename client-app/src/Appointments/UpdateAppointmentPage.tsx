import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateAppointmentForm from './CreateAppointmentForm';
import axios from 'axios';

const UpdateAppointmentPage = () => {
    const { id } = useParams();
    const [appointmentData, setAppointmentData] = useState({
        userEmail: '',
        carId: '',
        date: '',
        description: '',
    });

    const fetchAppointmentData = async () => {
        try {
            console.log(`This is the id for the update query: ${id}`);
            const response = await axios.get(`https://localhost:7053/Appointment/${id}`);
            console.log(response.data);
            const appointmentDetails = response.data;
            setAppointmentData({
                userEmail: appointmentDetails.userEmail,
                carId: appointmentDetails.carId,
                date: appointmentDetails.date,
                description: appointmentDetails.description || '', // Use default value if 'description' is null or undefined
            });
        } catch (error) {
            console.error('Error fetching appointment data:', error);
        }
    };

    useEffect(() => {
        fetchAppointmentData();
    }, [id]);

    const updateAppointment = async (updatedData: any) => {
        try {
            updatedData.userEmail = window.sessionStorage.getItem('email');
            console.log(updatedData);
            const response = await axios.put(`https://localhost:7053/Appointment/${id}`, updatedData);
            console.log('Updating appointment data:', response.data);
            window.location.href = '/Appointments';
        } catch (error) {
            console.error('Error updating appointment data:', error);
        }
    };

    return (
        <div className="fullscreen" style={{ backgroundColor: '#222831', color: '#EEEEEE', position: 'fixed', top: 0 }}>
            <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Update Appointment</h2>
            <CreateAppointmentForm onSubmit={updateAppointment} initialData={appointmentData} />
        </div>
    );
};

export default UpdateAppointmentPage;
