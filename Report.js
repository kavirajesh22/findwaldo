import React, { useState } from 'react';
import dog from './dog.png';
import './Report.css';
function Report(){
    return(
    <div>
        <p id='font'>
           We added your missing dog to our list of Waldo's out there. Generating Matched Waldo's...:
        </p>
        <img src={dog} className="Report-dog" alt="dog"  />
        <div>
        <button id = "buttonstyle" >MATCH</button>
        <button id = "buttonstyle" >NOT  A MATCH</button>
        <button id="buttonstyle" > NEXT</button>
        </div>
              
    </div>
    
    );
}
export default Report;