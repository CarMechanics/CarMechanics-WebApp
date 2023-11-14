import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to CarMechanics!</h1>
      </header>

      <section className="car-section">
        <img
          src="Masina1.png"
          alt="Car"
          className="car-image"
        />
      </section>

      <section className="interactive-section">
        <h2>Interactive Features</h2>
        <div className="buttons-container">
          <button className="register-button">Register as User</button>
          <button className="register-button">Register as Mechanic</button>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 CarMechanics Center</p>
      </footer>
    </div>
  );
};

export default LandingPage;
