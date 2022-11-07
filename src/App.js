import "./App.css"
import React, {useState} from "react"

function App() { 

const [calc, setCalc] = useState("");
const [result, setResult] = useState("");

const ops = ['+', '-', '*', '÷', ];

const updateCalc = (value) => {
  if(
    ops.includes(value) && calc === '' ||
    ops.includes(value) && ops.includes(calc.slice(-1))
  ){
    return
  }
  setCalc(calc + value);

  if(!ops.includes(value)){
    setResult(eval(calc + value).toString())
  }
}

const calculate = () => {
  setCalc(eval(calc).toString());
}


const createDigits = () => {
  const digits = [];

  for (let i = 1; i<10; i++){
    digits.push(
      <button  
      onClick={() => updateCalc(i.toString())} key = {i}> 
      {i} 
      </button>
    )
  }

  return digits
}

  return (
    <div className="calculator">
        <div className="panel">
        <p> {calc || "0"} </p>
          <div className="numbers" >
            { createDigits() }
            <button onClick={ () => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button>Clear</button>
          </div>
        </div>

        <div className="panel">
          <p></p>
          <div className="numbers">
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('/')}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{}</p>
          <div className="numbers">
            { createDigits() }
            <button>0</button>
            <button>.</button>
            <button>Clear</button>
          </div>
        </div>

        <div className="panel answer">
          <p> {result || 0} </p>
          <div>
            <button onClick={() => calculate}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
