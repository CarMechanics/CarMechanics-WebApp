import React, { useState } from 'react';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://localhost:7053/Auth/Login', {
        email: email,
        password: password,
      });
      console.log('Login successful', response.data);
      window.sessionStorage.setItem('email', email);
      window.location.href = "/";

    } catch (error) {
      // Handle login error
      console.error('Login error', error);
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#222831", minHeight: "100vh",minWidth:"201vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="card" style={{minWidth:"500px", minHeight:"500px", padding:"70px" ,backgroundColor: "#393E46", color: "#EEEEEE" }}>
        <h2 className="mb-4">Login</h2>
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
              onClick={handleLogin}
            >
              Login
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

export default LoginPage;
