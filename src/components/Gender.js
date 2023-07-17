import React, { useState } from 'react';

function Gender() {
    const [gender, setGender] = useState('');
    const [shirtSize, setShirtSize] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleShirtSizeChange = (event) => {
        setShirtSize(event.target.value);
    };

    return (
        <div>
            <h2>Select your gender:</h2>
            <input type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={handleGenderChange} />
            <label htmlFor="male">Male</label>

            <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={handleGenderChange} />
            <label htmlFor="female">Female</label>
            <h2>Select your dress size:</h2>

            {gender === "Male" &&(
                <div>
                    <label htmlFor="shirt-size">Shirt Size:</label>
                    <select id="shirt-size" value={shirtSize} onChange={handleShirtSizeChange}>
                        <option value="">Select size</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                    </select>
                </div>
            )}

            {gender === "Female" && (
                <div>
                <label htmlFor="shirt-size">Shirt Size:</label>
                <select id="shirt-size" value={shirtSize} onChange={handleShirtSizeChange}>
                    <option value="">Select size</option>
                    <option value="S">2</option>
                    <option value="M">4</option>
                    <option value="L">6</option>
                </select>
            </div>
            )}
        </div>
    );
}

export default Gender;
