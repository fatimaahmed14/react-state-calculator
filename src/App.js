import "./App.css"
import React, {useState} from "react"


function App() { 
  const [firstNum, setFirstNum] = useState(0)
  const [sign, setSign] = useState('+')
  const [secondNum, setSecondNum] = useState(0)

  
  
  function setFirstNumber (number) {
    firstNum = setFirstNum(number)
  }
  
  function setSecondNumber (number) {
    secondNum = setSecondNum(number)
  }

  function settingSign ( character) {
    sign = setSign(character)
  }

    return (
      <div className="calculator">

            <div className="panel">
              <p>{firstNum}</p>
              <div className="numbers" >
                <button onClick={() => setFirstNumber(1)}>1</button>
                <button onClick={() => setFirstNumber(2)}>2</button>
                <button onClick={() => setFirstNumber(3)}>3</button>
                <button onClick={() => setFirstNumber(4)}>4</button>
                <button onClick={() => setFirstNumber(5)}>5</button>
                <button onClick={() => setFirstNumber(6)}>6</button>
                <button onClick={() => setFirstNumber(7)}>7</button>
                <button onClick={() => setFirstNumber(8)}>8</button>
                <button onClick={() => setFirstNumber(9)}>9</button>
                <button onClick={() => setFirstNumber(0)}>0</button>
                <button onClick={() => setFirstNumber(0)}>Clear</button>
              </div>
            </div>
    
            <div className="panel">
              <p>{sign}</p>
              <div className="numbers">
                <button onClick={() => {settingSign("+")}}>+</button>
                <button onClick={() => {settingSign("-")}}>-</button>
                <button onClick={() => {settingSign("*")}}>*</button>
                <button onClick={() => {settingSign("÷")}}>÷</button>
              </div>
            </div>
    
            <div className="panel">
              <p>{secondNum}</p>
              <div className="numbers">
                <button onClick={() => {setSecondNumber(1)}}>1</button>
                <button onClick={() => {setSecondNumber(2)}}>2</button>
                <button onClick={() => {setSecondNumber(3)}}>3</button>
                <button onClick={() => {setSecondNumber(4)}}>4</button>
                <button onClick={() => {setSecondNumber(5)}}>5</button>
                <button onClick={() => {setSecondNumber(6)}}>6</button>
                <button onClick={() => {setSecondNumber(7)}}>7</button>
                <button onClick={() => {setSecondNumber(8)}}>8</button>
                <button onClick={() => {setSecondNumber(9)}}>9</button>
                <button onClick={() => {setSecondNumber(0)}}>0</button>
                <button onClick={() => {setSecondNumber(0)}}>Clear</button>
              </div>
            </div>

            <div className="panel answer">
              <p>0</p>
              <div>
                <button>=</button>
              </div>
            </div>
    </div>
  )
}

export default App
