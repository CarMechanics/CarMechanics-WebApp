import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div className="container" style={{ backgroundColor: "#222831", color: "#EEEEEE", padding: "20px" }}>
        <table className="table">
            <thead>
                <tr>
                    <th style={{backgroundColor:"#222831", color:"white"}}>#</th>
                    <th style={{backgroundColor:"#222831", color:"white"}}>Brand</th>
                    <th style={{backgroundColor:"#222831", color:"white"}}>Model</th>
                    <th style={{backgroundColor:"#222831", color:"white"}}>Year</th>
                    <th style={{backgroundColor:"#222831", color:"white"}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car) => (
                    <tr key={car.Id}>
                        <td style={{backgroundColor:"#222831", color:"white"}}>{car.Id}</td>
                        <td style={{backgroundColor:"#222831", color:"white"}}>{car.Manufacturer}</td>
                        <td style={{backgroundColor:"#222831", color:"white"}}>{car.Model}</td>
                        <td style={{backgroundColor:"#222831", color:"white"}}>{car.Year}</td>
                        <td style={{backgroundColor:"#222831", color:"white"}}>
                            <Link to={`/UpdateCar/${car.Id}`}>
                                <button className="btn btn-primary mx-4" onClick={() => onUpdate(car.Id)}>
                                    Update
                                </button>
                            </Link>
                            <button className="btn btn-primary" onClick={() => onDelete(car.Id)}>
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
