// WeatherResult.js

import React from 'react';
import Card from './Card';
import './WeatherResult.css';

const WeatherResult = ({ data }) => {
    if (!data) {
        return null;
    }

    return (
        <div className="weather-container">
            <h2>Weather for the Next 3 Days in {data.city.name}</h2>
            <div className="weather-cards-container">
                <div className="weather-cards">
                    {data.list.map((day, index) => (
                        <Card day={day} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeatherResult;
