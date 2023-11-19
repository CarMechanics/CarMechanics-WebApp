import React, { useState } from 'react';
import '../LandingPage.css';

interface CarFormProps {
  onSubmit: (formData: FormData) => void;
  initialData?: any;
}

interface FormData {
  brand: string;
  model: string;
  year: string;
  vin: string;
  kilometers: string;
}

const CarForm: React.FC<CarFormProps> = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState<FormData>({
    brand: initialData.brand || '',
    model: initialData.model || '',
    year: initialData.year || '',
    vin: initialData.vin || '',
    kilometers: initialData.kilometers || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    debugger;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#222831", minHeight: "100vh" }}>
      <div className="card p-5" style={{ maxWidth: '600px', width: "500px", backgroundColor: "#393E46", color: "#EEEEEE" }}>
        <h2 className="mb-4">Car Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="brand" className="form-label">
              Car Brand:
            </label>
            <select
              id="brand"
              className="form-control"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
            >
              <option value="">Select Brand</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="model" className="form-label">
              Car Model:
            </label>
            <input
              type="text"
              id="model"
              className="form-control"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Year of Production:
            </label>
            <input
              type="text"
              id="year"
              className="form-control"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="vin" className="form-label">
              VIN:
            </label>
            <input
              type="text"
              id="vin"
              className="form-control"
              name="vin"
              value={formData.vin}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="kilometers" className="form-label">
              Number of Kilometers:
            </label>
            <input
              type="text"
              id="kilometers"
              className="form-control"
              name="kilometers"
              value={formData.kilometers}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const validateVin = (vin: string): boolean => {
    // Simple VIN validation example
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/i;
    return vinRegex.test(vin);
  };

export default CarForm;
