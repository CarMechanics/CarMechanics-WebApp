import React, { useState } from 'react';

interface CarFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  brand: string;
  model: string;
  year: number;
  vin: string;
  kilometers: number;
}

const CarForm: React.FC<CarFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    brand: '',
    model: '',
    year: 0,
    vin: '',
    kilometers: 0,
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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Car Brand:</label>
        <select className="form-control" name="brand" value={formData.brand} onChange={handleInputChange}>
          <option value="">Select Brand</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          {/* Add more brands as needed */}
        </select>
      </div>

      <div className="form-group">
        <label>Car Model:</label>
        <input type="text" className="form-control" name="model" value={formData.model} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>Year of Production:</label>
        <input type="number" className="form-control" name="year" value={formData.year} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>VIN:</label>
        <input type="text" className="form-control" name="vin" value={formData.vin} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>Number of Kilometers:</label>
        <input
          type="number"
          className="form-control"
          name="kilometers"
          value={formData.kilometers}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

const validateVin = (vin: string): boolean => {
    // Simple VIN validation example
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/i;
    return vinRegex.test(vin);
  };

export default CarForm;
