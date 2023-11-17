import React, { useState } from 'react';
interface UserFormProps {
  onSubmit: (userData: UserData) => void;
  initialData?: UserData; 

}

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  password: string;
  review: string;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [userData, setUserData] = useState<UserData>({
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    password: '',
    review: '',
  });

  const [errors, setErrors] = useState<Partial<UserData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(userData);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<UserData> = {};

    if (!userData.id.trim()) {
      newErrors.id = 'Please enter a valid ID.';
    }

    if (!userData.firstName.trim()) {
      newErrors.firstName = 'Please enter a valid first name.';
    }

    if (!userData.lastName.trim()) {
      newErrors.lastName = 'Please enter a valid last name.';
    }

    if (!userData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = 'Please enter a valid date of birth.';
    }

    if (!userData.email.trim()) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!userData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }

    if (!userData.password.trim()) {
      newErrors.password = 'Please enter a valid password.';
    }

    if (!userData.review.trim()) {
      newErrors.review = 'Please enter a review.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>ID:</label>
        <input
          type="text"
          className="form-control"
          name="id"
          value={userData.id}
          onChange={handleInputChange}
        />
        {errors.id && <div className="error-message">{errors.id}</div>}
      </div>

      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={userData.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && <div className="error-message">{errors.firstName}</div>}
      </div>

      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={userData.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <div className="error-message">{errors.lastName}</div>}
      </div>

      <div className="form-group">
        <label>Date of Birth:</label>
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          value={userData.dateOfBirth}
          onChange={handleInputChange}
        />
        {errors.dateOfBirth && <div className="error-message">{errors.dateOfBirth}</div>}
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          className="form-control"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleInputChange}
        />
        {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        {errors.password && <div className="error-message">{errors.password}</div>}
      </div>

      <div className="form-group">
        <label>Review:</label>
        <textarea
          className="form-control"
          name="review"
          value={userData.review}
          onChange={handleInputChange}
        />
        {errors.review && <div className="error-message">{errors.review}</div>}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
