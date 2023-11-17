import React from 'react';
import UserForm from './CreateUserForm'; 

const AddUserPage = () => {
  const onSubmit = () => {
    console.log('Form submitted');

    window.location.href = '/Users'; 
  };

  return (
    <div>
      <h1>Add User</h1>
      <UserForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddUserPage;
