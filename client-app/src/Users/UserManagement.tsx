import React, { useState } from 'react';
import UserForm from './CreateUserForm'; 
import UserList from './UserList';
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


const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const addUser = (userData: UserData) => {
    setUsers([...users, userData]);
    setSelectedUser(null);
  };

  const deleteUser = (id: string) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    setSelectedUser(null);
  };

  const editUser = (id: string) => {
    const userToEdit = users.find((user) => user.id === id);
    setSelectedUser(userToEdit || null);
  };

  const updateUser = (userData: UserData) => {
    const updatedUsers = users.map((user) => (user.id === userData.id ? userData : user));
    setUsers(updatedUsers);
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>User Management</h1>

      <UserForm onSubmit={addUser} />

      {selectedUser && (
        <div>
          <h2>Edit User</h2>
          <UserForm onSubmit={updateUser} initialData={selectedUser} />
        </div>
      )}

      <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
    </div>
  );
};

export default UserManagement;
