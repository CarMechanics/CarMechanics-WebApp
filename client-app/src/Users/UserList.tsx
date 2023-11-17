
import React from 'react';

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

interface UserListProps {
  users: User[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
            <button onClick={() => onEdit(user.id)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
