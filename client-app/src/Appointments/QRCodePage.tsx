// QRCodePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import QRCode from "react-qr-code";
import Navbar from '../Navbar';
const QRCodePage = () => {
    const { appointmentId } = useParams();
    const url = `http://localhost:3000/Appointments/${appointmentId}`;

    return (
        <div>
            <div className="qr-code-container fullscreen" style={{ backgroundColor: "rgb(34, 40, 49)", position: "fixed", left: "0px", top: '0px' }}>
                <Navbar />
                <div className='my-5'>
                    <h1 style={{ color: "white", }}>Appointment QR Code</h1>
                    <QRCode value={url} />
                </div>
            </div >
        </div>
    );
};

export default QRCodePage;
