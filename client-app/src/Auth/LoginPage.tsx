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
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url('/masinaaa.jpg')`, // Replace with the actual path to your background image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="card" style={{minWidth:"500px", minHeight:"500px", padding:"70px" ,backgroundColor: "rgba(57, 62, 70, 0.8)", color: "#EEEEEE" }}>
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
              style={{ backgroundColor: "green", color: "white", border:'none' }}
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ backgroundColor: "#8A2BE2", color: "white", border:'none' }}
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
