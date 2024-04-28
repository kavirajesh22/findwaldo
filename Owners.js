import React, { useState } from 'react';
import './Owners.css';
import Report from './Report'; 

function Owners() {
    const [showReport, setShowReport] = useState(false);
  //toggle showreport state
  const handleReport = () => {
    setShowReport(true);
  };
  

  return (
    <div>
      <p id="font">For pet owners. We hope to help you find your Waldo on the run! </p>
      {!showReport &&( 
      <div>
        <form>
            <input type="file" id="uploadInput">

            </input>
            <p  id= "italics">Don't have a photo? Search all pets here.</p>

        </form>
        <div>
            <p id='font'>Now, let's get some information about your Waldo.</p>
        </div>
        <div id = "information">
            <input id= "italics" type='text' placeholder='Enter time lost...'>
            </input>
            <input id = "italics" type='text' placeholder='Enter location last seen...'>
            </input>
        </div>
        <div id = "report">
            <button id="buttonstyle" onClick={handleReport}>Report.</button>
        </div>
      </div>)}
      {showReport && <Report/>}
      
      
    </div>
    
  );
}

export default Owners;
