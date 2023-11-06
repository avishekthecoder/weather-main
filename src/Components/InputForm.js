import React, { useState } from 'react';
import './InputForm.css'

const InputForm = ({ city, onCityChange, onFetchData }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onFetchData();
    }

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={(e) => onCityChange(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    );
};

export default InputForm;

