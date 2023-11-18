import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const initialUserInput = {
    enteredCurrentSavings: '',
    enteredYearlySavings: '',
    enteredExpectedInterest: '',
    enteredInvestmentDuration: '',
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const resetForm = () => {
    setUserInput(initialUserInput);
  };

  const calculateHandler = (event) => {
    event.preventDefault();

    const calculatedYearlyData = [];
    let currentSavings = +userInput.enteredCurrentSavings;
    const yearlyContribution = +userInput.enteredYearlySavings;
    const expectedReturn = +userInput.enteredExpectedInterest / 100;
    const duration = +userInput.enteredInvestmentDuration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      calculatedYearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        investedCapital: currentSavings - yearlyInterest,
      });
    }

    onSubmit(calculatedYearlyData);
  };

  const handleInputChange = (event, inputField) => {
    const newValue = event.target.value;

    setUserInput((prevState) => ({
      ...prevState,
      [inputField]: newValue !== '' ? parseInt(newValue, 10) : '',
    }));
  };

  return (
    <form className="form" onSubmit={calculateHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            min="0"
            value={userInput.enteredCurrentSavings}
            onChange={(event) => handleInputChange(event, 'enteredCurrentSavings')}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            min="0"
            value={userInput.enteredYearlySavings}
            onChange={(event) => handleInputChange(event, 'enteredYearlySavings')}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            type="number"
            id="expected-return"
            min="0"
            value={userInput.enteredExpectedInterest}
            onChange={(event) => handleInputChange(event, 'enteredExpectedInterest')}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            min="0"
            value={userInput.enteredInvestmentDuration}
            onChange={(event) => handleInputChange(event, 'enteredInvestmentDuration')}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetForm}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
