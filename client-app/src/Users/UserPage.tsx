import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';
import axios from 'axios';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  password: string;
  review: string;
}

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const sampleUsers: User[] = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        email: 'john@example.com',
        phoneNumber: '123-456-7890',
        password: 'securePassword',
        review: 'Great user!',
      },
      {
        id: '2',
        firstName: 'Jane',
        lastName: 'Doe',
        dateOfBirth: '1992-05-15',
        email: 'jane@example.com',
        phoneNumber: '987-654-3210',
        password: 'strongPassword',
        review: 'Awesome person!',
      },
    ];

    setUsers(sampleUsers);
    // For actual API call using axios, replace the above setUsers with your axios logic
    // axios.get('your-api-endpoint')
    //   .then(response => {
    //     setUsers(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching users:', error);
    //   });
  }, []);

  // Specify the types for the functions
  const handleEdit = (userId: string): void => {
    // Add logic for editing user
    console.log('Edit user with ID:', userId);
  };

  const handleDelete = (userId: string): void => {
    // Add logic for deleting user
    console.log('Delete user with ID:', userId);
  };

  return (
    <div>
      <Link to="/AddUser">
        <button className='btn btn-primary my-5'>Add User</button>
      </Link>
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default UserPage;
