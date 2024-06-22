//this is an initial test for volunteers.js
import React, { useEffect, useState } from 'react';
import './Volunteers.css';

function Volunteers(){
    const [map, setMap] = useState(null);
    useEffect(() => {
        // load google maps api dynamically bc we can't use html
        const script = document.createElement('script');
        //import google maps ai key
        //volunteers yay
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAMjjIAkcsJmVsQ0BqkqioekR0Foryqtgc&loading=async&libraries=geometry&callback=initMap";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () =>{
            document.body.removeChild(script);
        }
      }, []);
    
      //initialize map
    window.initMap = function() {
        var options = {
          zoom: 8,
          center: { lat: 42.3601, lng: -71.0589 }
        };
        var map = new window.google.maps.Map(document.getElementById('map'), options);
        setMap(map);
        var marker = new window.google.maps.Marker({
            position: {lat: 42.3601, lng: -71.0589},
            map: map,
            title: 'Your current location'
        });
    };

    //geocode location finder from google maps
    function locationSearch(){
        const input = document.getElementById('locationinput').value;
        const geocoder = new window.google.maps.Geocoder();
        //convert location into geographic coordinates
        geocoder.geocode({address: input}, function(results, status){
            if (status == 'OK'){
                if(results[0]){
                    const location = results[0].geometry.location;
                    map.setCenter(location);
                    new window.google.maps.Marker({
                        position: location,
                        map: map,
                    });
                }else{
                    alert("Location wasn't found.");
                }
            }else{
                alert("Geocode wasn't successful :(");
            }
            
        });
    }
    return (
        <div id="map-container">
            <div id = "volunteerstext">
                <p>For our volunteers.</p>
              
            </div>
            <button id = "buttonstyle">Upload a picture of a Waldo you think is on the run.</button>
            
            <div id = "locationinput">
                <button id = "buttonstyle" onClick={locationSearch}>Send your current location</button>
            </div>
            <div id = "map"></div>
            
        </div>

    
    );
  }

export default Volunteers;