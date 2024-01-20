import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface CarListProps {
    cars: Array<{
        Id: number;
        Manufacturer: string;
        Model: string;
        Year: number;
    }>;
    onDelete: (id: number) => void;
}

const CarList: React.FC<CarListProps> = ({ cars, onDelete }) => {

    const handleDeleteAttempt = async (Id: number) => {
        try {
            // Replace 'your_endpoint' with the actual endpoint to get appointments for the car
            const userEmail = window.sessionStorage.getItem('email')?.toString() || '';
            debugger;
            // Make the GET request to the adjusted endpoint
            const response = await axios.get(`https://localhost:7053/Appointment/${Id}/${userEmail}`, {
                params: { userEmail: userEmail }
            });

            // Check if there are any appointments
            if (response.data === true) {
                // If there are appointments, confirm with the user before deleting
                const isConfirmed = window.confirm('This car has appointments scheduled. Are you sure you want to delete the car and all associated appointments?');
                if (isConfirmed) {
                    // If the user confirms, proceed with the delete
                    onDelete(Id);
                    debugger;
                    await axios.delete(`https://localhost:7053/Appointment/all/${Id}/${userEmail}`);
                }
            } else {
                // If there are no appointments, just proceed with the delete
                onDelete(Id);
            }
        } catch (error) {
            console.error('Error fetching appointments or deleting the car:', error);
            alert('There was an error processing your request.');
        }
    };

    return (
        <div className="container" style={{ backgroundColor: "#222831", color: "#EEEEEE", padding: "20px" }}>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#222831", color: "white" }}>#</th>
                        <th style={{ backgroundColor: "#222831", color: "white" }}>Brand</th>
                        <th style={{ backgroundColor: "#222831", color: "white" }}>Model</th>
                        <th style={{ backgroundColor: "#222831", color: "white" }}>Year</th>
                        <th style={{ backgroundColor: "#222831", color: "white" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car.Id}>
                            <td style={{ backgroundColor: "#222831", color: "white" }}>{car.Id}</td>
                            <td style={{ backgroundColor: "#222831", color: "white" }}>{car.Manufacturer}</td>
                            <td style={{ backgroundColor: "#222831", color: "white" }}>{car.Model}</td>
                            <td style={{ backgroundColor: "#222831", color: "white" }}>{car.Year}</td>
                            <td style={{ backgroundColor: "#222831", color: "white" }}>
                                <Link to={`/UpdateCar/${car.Id}`}>
                                    <button className="btn btn-primary mx-4" onClick={() => onUpdate(car.Id)}>
                                        Update
                                    </button>
                                </Link>
                                <button className="btn btn-primary" onClick={() => handleDeleteAttempt(car.Id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const onUpdate = async (Id: number) => {
    // Your update logic goes here
};

export default CarList;
