import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const email = window.sessionStorage.getItem("email");
  console.log(email);

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const buttonsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px', 
  };


  if (email === null)
    return (
      <div className="landing-page">
        <header style={headerStyle}>
        
          <h1>Welcome to CarMechanics!</h1>
          <div className="buttons-container" style={buttonsContainerStyle}>
            <Link to="/login" className='btn btn-primary'>
              <button style={{ backgroundColor:"#0d6efd", color: "white", border: "none" }}>Login</button>
            </Link>
            <button className="btn btn-primary">Register</button>
          </div>
        </header>
        <footer style={{ position: 'fixed', bottom: 0, width: "100%" }}>
          <p>&copy; 2023 CarMechanics Center</p>
        </footer>
      </div>
    );

  return (
    <div className="landing-page">
      <header style={headerStyle}>
        
        <h1>CarMechanics</h1>
        <div className="buttons-container" style={buttonsContainerStyle}>
        <Link to="/Cars">
            <button className='btn btn-primary'>Cars</button>
          </Link>
          <Link to="/Appointments">
            <button className='btn btn-primary'>Appointments</button>
          </Link>
        </div>
      </header>
      
      <div className="buttons-container" style={buttonsContainerStyle}>
          </div>
      <footer style={{ position: 'fixed', bottom: 0, width: "100%" }}>
        <p>&copy; 2023 CarMechanics Center</p>
      </footer>
    </div>
  )
};

export default LandingPage;
