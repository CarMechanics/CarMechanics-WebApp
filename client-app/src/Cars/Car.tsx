import React from 'react';

interface CarProps {
  car: {
    Id: number;
    Manufacturer: string;
    Model: string;
    Year: number;
  };
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

const Car: React.FC<CarProps> = ({ car, onUpdate, onDelete }) => {
  return (
    <div>
      <span>{`Brand: ${car.Manufacturer}, Model: ${car.Model}, Year: ${car.Year}`}</span>
      <button onClick={() => onUpdate(car.Id)}>Update</button>
      <button onClick={() => onDelete(car.Id)}>Delete</button>
    </div>
  );
};

export default Car;