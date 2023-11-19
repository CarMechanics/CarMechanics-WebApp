import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CarForm from './CreateCarForm';
import axios from 'axios';

const UpdateCarPage = () => {
    const { id } = useParams();
    const [carData, setCarData] = useState({
        brand: '',
        model: '',
        year: '',
        vin: '',
        kilometers: '',
    });

    const fetchCarData = async () => {
        try {
            console.log(`This is the id for the update query: ${id}`);
            const response = await axios.get(`https://localhost:7053/Car/${id}`);
            console.log(response.data);
            const carDetails = response.data;
            setCarData({
                brand: carDetails.brandInfo.manufacturer,
                model: carDetails.brandInfo.model,
                year: carDetails.yearOfManufacture,
                vin: carDetails.vin || '', // Use default value if 'vin' is null or undefined
                kilometers: carDetails.numberOfKilometers || '', // Use default value if 'kilometers' is null or undefined
            });
        } catch (error) {
            console.error('Error fetching car data:', error);
        }
    };

    useEffect(() => {
        fetchCarData();
    }, [id]);

    const updateCar = async (updatedData: any) => {
        try {
            updatedData.userEmail = window.sessionStorage.getItem("email");
            updatedData.kilometers = updatedData.kilometers.toString();
            updatedData.year = updatedData.year.toString();
            console.log(updatedData);
            const response = await axios.put(`https://localhost:7053/Car/${id}`, updatedData);
            console.log('Updating car data:', response.data);
            window.location.href = "/Cars"
        } catch (error) {
            console.error('Error updating car data:', error);
        }
    };

    if (!carData.brand) {
        return <div>Loading...</div>;
    }

    return (
        <div className='fullscreen' style={{ backgroundColor: "#222831", color: "#EEEEEE", position:'fixed', top:0 }}>
            <h2 style={{textAlign:"center", marginTop:"10px"}}>Update Car</h2>
            <CarForm onSubmit={updateCar} initialData={carData} />
        </div>
    );
};

export default UpdateCarPage;
