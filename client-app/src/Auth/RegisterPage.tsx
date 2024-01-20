
import React, { useState } from 'react';
import axios from 'axios';


const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = async () => {
    try {
      const response = await axios.post('https://localhost:7053/Auth/Register', {
        email: email,
        password: password,
      });
      console.log('Registration successful', response.data);

      window.location.href = "/";
    } catch (error) {

      console.error('Registration error', error);
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#222831", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="card" style={{ minWidth: "500px", minHeight: "500px", padding: "70px", backgroundColor: "#393E46", color: "#EEEEEE" }}>
        <h2 className="mb-4">Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleRegister}
            >
              Register
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.location.href = "/"}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

