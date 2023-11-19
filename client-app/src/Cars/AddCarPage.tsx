import CarForm from "./CreateCarForm";
import axios from "axios";
const AddCarPage = () => {
    return (
        <div>
            <CarForm onSubmit={onSubmit}/>
        </div>
    )
};

const onSubmit = async (formData:any) => {
    try {
        console.log(window.sessionStorage.getItem("email"));
        console.log(formData);
        const response = await axios.post('https://localhost:7053/Car', {
            brand: formData.brand,
            kilometers: formData.kilometers,
            model: formData.model,
            vin: formData.vin,
            year: formData.year,
            userEmail: window.sessionStorage.getItem("email")
        });
        window.location.href = "/Cars";

    } catch (error) {
        // Handle login error
        console.error('Login error', error);
    }
}

export default AddCarPage;