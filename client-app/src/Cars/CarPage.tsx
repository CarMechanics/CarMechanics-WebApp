import { Link } from 'react-router-dom';
import CarList from './CarList';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../LandingPage.css';
import Navbar from '../Navbar';

const CarPage = () => {
  const [cars, setCars] = useState<Array<Car>>([]);
  interface Car {
    Id: number;
    Manufacturer: string;
    Model: string;
    Year: number;
  }


  useEffect(() => {
    axios.get('https://localhost:7053/Car', { params: { userEmail: window.sessionStorage.getItem('email')?.toString() } })
      .then(response => {
        // Assuming the response data is an array of cars
        console.log(response.data);
        const formattedCars = response.data.map((car: any) => ({
          Id: car.id,
          Manufacturer: car.brandInfo.manufacturer,
          Model: car.brandInfo.model,
          Year: car.yearOfManufacture,
        }));
        setCars(formattedCars);
      })
      .catch(error => {
        console.log(window.sessionStorage.getItem('email')?.toString());
        console.error('Error fetching cars:', error);
      });
  }, []);

  const onDelete = async (Id: number) => {
    try {
      console.log(Id);
      const response = await fetch('https://localhost:7053/Car', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Id),
      });

      if (!response.ok) {
        // Handle the error, e.g., show an error message or log the error.
        console.error(`Error: ${response.status} - ${response.statusText}`);
      } else {
        // Successful submission, handle accordingly.
        const updatedCars = cars.filter((car) => car.Id !== Id);
        setCars(updatedCars);
        console.log('Deletion successful');
      }
    } catch (error) {
      // Handle network or other errors.
      console.error('Error:', error);
    }
  }

  return (
    <div
      className='fullscreen'
      style={{
        backgroundColor: 'rgb(34, 40, 49)',
        backgroundSize: 'cover',
        color: '#EEEEEE',
        position: 'fixed',
        top: 0,
      }}

    >
      <Navbar />
      <Link to="/AddCar">
        <button className='btn btn-primary my-5'>Add Car</button>
      </Link>
      <CarList cars={cars} onDelete={onDelete} />
    </div>
  );
};

export default CarPage;
