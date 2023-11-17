import React from 'react';

interface UserProps {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phoneNumber: string;
    password: string;
    review: string;
  };
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

const User: React.FC<UserProps> = ({ user, onUpdate, onDelete }) => {
  return (
    <div>
      <span>{`Name: ${user.firstName} ${user.lastName}, DOB: ${user.dateOfBirth}, Email: ${user.email}, Phone: ${user.phoneNumber}`}</span>
      <button onClick={() => onUpdate(user.id)}>Update</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default User;
