// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Navbar = () => {
    return (
        <div style={{ position: 'absolute', left: '10px' }}>
            <Link to="/">
                <button className="btn btn-primary my-3 mx-1">Home</button>
            </Link>
            <Link to="/Cars">
                <button className="btn btn-primary my-3 mx-1">Cars</button>
            </Link>
            <Link to="/Appointments">
                <button className="btn btn-primary my-3 mx-1">Appointments</button>
            </Link>
        </div>
    );
};

export default Navbar;
