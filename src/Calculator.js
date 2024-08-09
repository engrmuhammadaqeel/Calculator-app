import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    setResult(result + parseFloat(input));
  };

  const handleSubtract = () => {
    setResult(result - parseFloat(input));
  };

  const handleMultiply = () => {
    setResult(result * parseFloat(input));
  };

  const handleDivide = () => {
    setResult(result / parseFloat(input));
  };

  const handleResetInput = () => {
    setInput('');
  };

  const handleResetResult = () => {
    setResult(0);
  };

  return (
    <div className="calculator">
      <h1>Simplest Working Calculator</h1>
      <div className="display">{result}</div>
      <input 
        type="number" 
        value={input} 
        onChange={handleInputChange} 
        placeholder="Enter a number"
      />
      <div className="buttons">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
        <button onClick={handleResetInput}>Reset Input</button>
        <button onClick={handleResetResult}>Reset Result</button>
      </div>
    </div>
  );
}

export default Calculator;
