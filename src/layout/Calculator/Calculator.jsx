import './Calculator.css';

import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('0'); 

 
  const handleButtonClick = (value) => {
    setInput((prev) => (prev === '0' ? value : prev + value)); 
  };

  
  const handleClear = () => {
    setInput('0'); 
  };

  
  const handleClearEntry = () => {
    setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0')); 
  };

  
  const handleCalculate = () => {
    try {
      const computedResult = calculateResult(input);
      setInput(computedResult.toString()); 
    } catch (error) {
      setInput('Error'); 
    }
  };

  
  const calculateResult = (expression) => {
    const operators = expression.match(/[+\-*/]/g);
    const numbers = expression.split(/[+\-*/]/).map(Number);

    if (!operators || !numbers || numbers.length !== operators.length + 1) {
      throw new Error('Invalid Expression');
    }

    let result = numbers[0];

    operators.forEach((operator, index) => {
      const nextNumber = numbers[index + 1];
      if (operator === '+') result += nextNumber;
      if (operator === '-') result -= nextNumber;
      if (operator === '*') result *= nextNumber;
      if (operator === '/') {
        if (nextNumber === 0) {
          throw new Error('Division by zero');
        }
        result /= nextNumber;
      }
    });

    return result;
  };

  return (
    <div className="calculator">
      <h1>CALCULATOR</h1>
      <div className="display">
        <input type="text" value={input} readOnly placeholder="0" />
      </div>
      <div className="buttons">
        {['1', '2', '3', '+'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
        {['4', '5', '6', '-'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
        {['7', '8', '9', '*'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleClearEntry}>CE</button> 
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
