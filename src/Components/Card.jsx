// Card.js

import React, { useState } from 'react';
import './Card.css';
import { Cloudy } from 'lucide-react';
import { formatDateTime } from '../utils';

const Card = ({ day, onCardClick }) => {
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = () => {
        setExpanded(!expanded);
        onCardClick(day);
    };

    return (
        <div className={`weather-day ${expanded ? 'expanded' : ''}`} onClick={handleCardClick}>
            <h3>{formatDateTime(day.dt_txt).date}</h3>
            <h4>{formatDateTime(day.dt_txt).time}</h4>
            <Cloudy size={40} />
            <p>{day.main.temp_max}°C</p>
            <p>Conditions: {day.weather[0].description}</p>
            {day.wind.speed > 10 && <p>It's too windy, watch out!</p>}
            {day.weather[0].main === 'Thunderstorm' && <p>Don't step out! A Storm is brewing!</p>}
            {day.rain && day.rain['3h'] > 0 && <p>Carry an umbrella</p>}
            {day.main.temp_max > 40 && <p>Use sunscreen lotion</p>}
            {expanded && (
                <div className="expanded-details">
                    {/* Add more details here */}
                </div>
            )}
        </div>
    );
};

export default Card;
