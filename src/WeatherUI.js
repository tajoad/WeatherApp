import React, { useState } from 'react';
import Weather from './weather';

const WeatherUI = () => {
    const [city, setCity] = useState('');
    const myElement = document.querySelector('.input');

    const handleSubmit = (e) => {
        // myElement.addEventListener(e)
        if (myElement !== document.activeElement) {
            setCity(e.target.value);
        } else if (e.target.value === '') {
            return city;
        }
    }
    return (
        <div className="weather-list">
            <h1 className="header">3 Hours Weather Forecast</h1>
            <form className="input">
                <input type="text"
                    style={{
                        margin: "0 auto", display: "flex", justifyContent: "center"
                        , boxShadow: "0 0 15px 4px rgba(0,0,0,0.06)", borderRadius: "10px"
                        , marginTop: "5px", width: "30%", textAlign: "center"
                    }}
                    placeholder="Type in your city"
                    required
                    value={city}
                    onChange={handleSubmit}
                />
                {/* <button>Submit</button> */}
            </form>
            <Weather city={city} />
        </div>
    );
}

export default WeatherUI;