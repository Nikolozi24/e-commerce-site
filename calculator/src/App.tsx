
import { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button.tsx';
import React from 'react';


const  App:React.FC = ()=> {
  const calculatorValues = [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '-'],
    [0, '.', '+', '='],
    ['c'],
  ];

  const [value, setValue] = useState<string>('');

  const handleHereClick = (e: string | number) => {
    if (typeof e === 'number') {
      // Append digits to current value
      const newValue = value + e.toString();
      setValue(newValue);
    } else {
      // Handle operators (+, -, *, /)
      if (['+', '-', '*', '/'].includes(e.toString())) {
        // Append the operator to the current value
        setValue(prev => prev + e.toString());
      } else if (e === '=') {
        try {
          // Evaluate the expression using eval (for simplicity, use caution with eval in production)
          const result = eval(value);
          setValue(result.toString());
        } catch (error) {
          console.error('Error in evaluation:', error);
          // Handle evaluation error, maybe clear the input or show an error message
        }
      } else if (e === '.') {
        // Handle decimal point
        if (!value.includes('.')) {
          setValue(prev => prev + '.');
        }
      }
      else if(e==='c'){
        setValue('')
      }
    }
  };

  return (
    <div className="App">
    

      <ul className="display-app">
        <h1 style={{marginBottom:'50px',color:"#2e8557", fontStyle:"bold", fontFamily:"monospace"}}>calculator</h1>
        <li>
          <input value={value} readOnly style={{paddingLeft:"20px",fontSize:"20px", width: '480px', height: '70px' , borderRadius:"20px", marginBottom:"40px"}} />
        </li>
         {/* <span style={{marginLeft:"50px"}}><Button value={"Clear"} handleClick={(e)=>{setValue('')}} ></Button></span> */}
        {calculatorValues.map((row, rowIndex) => (
          <ul className="column" key={rowIndex}>
            {row.map((element, columnIndex) => (
              <li key={`${rowIndex}-${columnIndex}`}>
                <Button value={element} handleClick={handleHereClick} />
              </li>
            ))}
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default App;