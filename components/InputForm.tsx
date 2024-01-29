"use client"

import React, { useState } from 'react';
import { UserInputProps } from './InputForm.types';

interface InputFormProps {
  inputSubmitCb: (input: UserInputProps) => void
}

const InputForm = ({inputSubmitCb}: InputFormProps) => {

  // State variables to store user inputs
  const [preferences, setPreferences] = useState('');
  const [lengthOfStay, setLengthOfStay] = useState('');
  const [budget, setBudget] = useState('');

  // Handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const userInput = {
      preferences: preferences,
      lengthOfStay: lengthOfStay,
      budget: budget,
    }

    inputSubmitCb(userInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Preferences input */}
        <label>
          Preferences:
          <input
            type="text"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="Enter preferences separated by commas"
          />
        </label>

        <br />

        {/* Length of stay input */}
        <label>
          Length of stay:
          <input
            type="number"
            value={lengthOfStay}
            onChange={(e) => setLengthOfStay(e.target.value)}
            placeholder="Enter the number of days"
          />
        </label>

        <br />

        {/* Budget input */}
        <label>
          Budget:
          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="">Select budget</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <br />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
