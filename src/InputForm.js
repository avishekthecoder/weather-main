// InputForm.js

import React from 'react';

function InputForm({ city, onCityChange, onFetchData }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onFetchData();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={(e) => onCityChange(e.target.value)} />
            <button type="submit">Fetch Weather Data</button>
        </form>
    );
}

export default InputForm;
