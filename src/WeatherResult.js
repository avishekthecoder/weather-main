import React, { useState } from 'react';
import Card from './Card';

const WeatherResult = ({ data }) => {
    if (!data) {
        return null;
    }

    const cardLimit = 1; // Number of cards to display at a time
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % (data.list.length - cardLimit + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + data.list.length - cardLimit + 1) % (data.list.length - cardLimit + 1));
    };

    const visibleData = data.list.slice(currentIndex, currentIndex + cardLimit);

    return (
        <div>
            <h2>Weather for the Next 3 Days in {data.city.name}</h2>
            <div className="carousel-container">
                <div className="carousel">
                    {visibleData.map((day, index) => (
                        <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}>
                            <Card day={day} index={index} />
                        </div>
                    ))}
                </div>
                <button className="prev-button" onClick={prevSlide}>&#8249;</button>
                <button className="next-button" onClick={nextSlide}>&#8250;</button>
            </div>
        </div>
    );
}

export default WeatherResult;
