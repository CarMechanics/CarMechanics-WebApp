import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import AddCarPage from './Cars/AddCarPage';
import LoginPage from './Auth/LoginPage';
import CarsPage from './Cars/CarPage';
import UpdateCarPage from './Cars/UpdateCarPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="AddCar" element={<AddCarPage />}/>
          <Route path="/Login" element={<LoginPage />}/>
          <Route path="/Cars" element={<CarsPage/>}/>
          <Route path="/UpdateCar/:id" element={<UpdateCarPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
