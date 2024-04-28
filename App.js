import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import Owners from './Owners'; 
import Volunteers from './Volunteers';

function App() {
  const [showOwners, setShowOwners] = useState(false); 
  const [showVolunteers, setShowVolunteers] = useState(false);
  const handleShowOwners = () => {
    setShowOwners(true);
    setShowVolunteers(false);
  };
  const handleShowVolunteers = () => {
    setShowOwners(false);
    setShowVolunteers(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          where's my waldo?
        </p>
      </header>
      
        
      {/* showowners state  and showvolunteers state based on the rendering */}
      {!showOwners && !showVolunteers &&(
        <div>
          <div id= "font">
            <p>Welcome to Where's your Waldo. We hope we can match and safely return your Waldo to you!</p>
          </div>
          <button id = "buttonstyle" className="Owners-button" onClick={handleShowOwners}>For dog owners</button>
          <p id="font">Our volunteers make finding Waldo's easier. If you think you spotted a Waldo on the run, click here.</p>
          <button id = "buttonstyle" className="App-button" onClick={handleShowVolunteers}>For volunteers</button>      
        </div>
      )}
      {showOwners && <Owners/>}
      {showVolunteers && <Volunteers />}

    </div>
  );
}

export default App;
