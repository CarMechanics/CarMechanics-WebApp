import React from "react";
import Appointment from "./Appointment";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
interface AppointmentListProps {
    appointments: Array<Appointment>;
    onUpdate: (id: any) => void;
    onDelete: (userEmail: string, carId: string, appointmentId: any) => void;
}

interface Car {
    id: number;
    manufacturer: string;
    model: string;
    year: number;
    brandInfo: any,
    yearOfManufacture: number,
}


const AppointmentList: React.FC<AppointmentListProps> = ({ appointments, onUpdate, onDelete }) => {
    const [cars, setCars] = useState<Record<string, Car>>({});

    const isPastAppointment = (appointmentDateStr: string) => {
        const today = new Date();
        const appointmentDate = new Date(appointmentDateStr);
        return appointmentDate.getTime() <= today.getTime();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7053/Car', {
                    params: { userEmail: window.sessionStorage.getItem('email')?.toString() },
                });

                const carData: Record<string, Car> = {};
                Object.values(response.data).forEach((car: any) => {
                    carData[car.id.toString()] = car;
                });

                setCars(carData);
                console.log(cars);
                setTimeout(function () {

                }, 500);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        const fetchDataAsync = async () => {
            await fetchData();
        };

        fetchDataAsync();
    }, []);

    return (
        <div className="container" style={{ backgroundColor: "#222831", color: "#EEEEEE", padding: "20px" }}>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#222831", color: "white" }}>Car</th>
                        <th style={{ backgroundColor: "#222831", color: "white" }}>Date</th>
                        <th style={{ backgroundColor: "#222831", color: "white" }}>Labour description</th>
                        <th style={{ backgroundColor: "#222831", color: "white" }}>Price</th>
                        <th style={{ backgroundColor: "#222831", color: "white" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => {
                        const car = cars[appointment.carId];
                        debugger;
                        return (
                            <tr key={`${appointment.userEmail}-${appointment.carId}`}>
                                <td style={{ backgroundColor: "#222831", color: "white" }}>{`${car?.brandInfo?.manufacturer}, ${car?.brandInfo?.model}, ${car?.yearOfManufacture}`}</td>
                                <td style={{ backgroundColor: "#222831", color: "white" }}>{new Date(appointment.date).toLocaleDateString()}</td>
                                <td style={{ backgroundColor: "#222831", color: "white" }}>{appointment.labours[0].description}</td>
                                <td style={{ backgroundColor: "#222831", color: "white" }}>{appointment.labours[0].price}</td>
                                <td style={{ backgroundColor: "#222831", color: "white" }}>
                                    <Link to={`/UpdateAppointment/${appointment.id}`}>
                                        <button className="btn btn-primary mx-4" onClick={() => onUpdate(appointment.id)}>
                                            Update
                                        </button>
                                    </Link>
                                    <button className="btn btn-primary" onClick={() => onDelete(appointment.userEmail, appointment.carId, appointment.id)}>
                                        Delete
                                    </button>
                                    <Link to={`/QRCode/${appointment.id}`} className="mx-4">
                                        <button className="btn btn-primary">
                                            Generate QR Code
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentList;






