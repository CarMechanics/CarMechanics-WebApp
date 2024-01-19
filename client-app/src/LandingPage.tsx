import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const LandingPage: React.FC = () => {
  const email = window.sessionStorage.getItem("email");
  console.log(email);

  const headerStyle: React.CSSProperties = {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/cara.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    color: "#EEEEEE",
  };
  const h1Style: React.CSSProperties = {
    fontSize: '5em', // Adjust the font size as needed
    letterSpacing: '8px', // Add letter-spacing for better visibility
    marginBottom: '20px', // Add margin to the bottom for spacing
    color:'#008080'
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
        <p style={{ fontStyle: 'italic', fontSize: '1.2em', color: '#008080' }}>
          "Your trusted partner in automotive care and service."
        </p>
        <header style={headerStyle}>
        
          <h1 style={h1Style}>Welcome to CarMechanics!</h1>
          <div className="App">
      <h1>Star Rating Example</h1>
      <StarRating totalStars={5} />
    </div>

          <div className="buttons-container" style={buttonsContainerStyle}>
            <Link to="/login" className='btn btn-primary'>
              <button style={{ backgroundColor:"#0d6efd", color: "white", border: "none" }}>Login</button>
            </Link>
            <Link to="/register" className='btn btn-primary'>
              <button style={{ backgroundColor:"#0d6efd", color: "white", border: "none" }}>Register</button>
            </Link>
          </div>
          <Link to="/reviews" className='btn btn-primary'>
              <button style={{ backgroundColor:"#0d6efd", color: "white", border: "none" }}>Reviews</button>
            </Link>
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
