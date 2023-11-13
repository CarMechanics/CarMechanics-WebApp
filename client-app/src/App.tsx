import React from 'react';
import logo from './logo.svg';
import './App.css';
import CarForm from './Cars/CreateCarForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CarForm onSubmit={submitShit} />
      </header>
    </div>
  );
}

function submitShit(){
  console.log("Merge");
}

export default App;
