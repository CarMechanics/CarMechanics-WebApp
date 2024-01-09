import React from "react";

interface Appointment {
    id: any,
    userEmail: string;
    carId: string;
    date: string;
    description: string;
    labours: any,
  }
  
  interface AppointmentProps {
    appointment: Appointment;
    onUpdate: (userEmail: string, carId: string, date: string, description: string) => void;
    onDelete: (userEmail: string, carId: string) => void;
  }
  
  const Appointment: React.FC<AppointmentProps> = ({ appointment, onUpdate, onDelete }) => {
    const { userEmail, carId, date, description } = appointment;
  
    return (
      <div>
        <span>{`User Email: ${userEmail}, Car: ${carId}, Date: ${date}`}</span>
        <button onClick={() => onUpdate(userEmail, carId, date, description)}>Update</button>
        <button onClick={() => onDelete(userEmail, carId)}>Delete</button>
      </div>
    );
  };
  
  export default Appointment;