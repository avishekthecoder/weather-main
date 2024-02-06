// InputForm.js

import React from 'react';
import './InputForm.css';

const InputForm = ({ city, onCityChange, onFetchData }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onFetchData();
    };

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search location"
                    value={city}
                    onChange={(e) => onCityChange(e.target.value)}
                />
                <button type="submit">
                    Search
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </form>
    );
};

export default InputForm;
