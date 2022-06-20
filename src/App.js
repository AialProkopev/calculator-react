import React, { useState } from "react"
import "./App.css"

function App() {
  return <Calculator />
}

function Calculator() {
  const [calc, setCalc] = useState({
    result: "0",
    number: "0",
    operator: "",
  })

  const handleClearInput = () => {
    setCalc({
      result: "0",
      number: "0",
      operator: "",
    })
  }

  const handleNumberInput = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML
    console.log(calc)
    setCalc({
      number:
        calc.number === "0" && value === "0"
          ? "0"
          : calc.number % 1 === 0 && value !== "0"
          ? Number(calc.number + value)
          : calc.number + value,
      result: calc.operator ? calc.result : "0",
      operator: calc.operator,
    })
  }

  const handleOperatorInput = (e) => {
    e.preventDefault()
    const operation = e.target.innerHTML
    setCalc({
      operator: operation,
      result: calc.number ? calc.number : calc.result,
      number: operation === "-" && calc.number === "0" ? "-" : "",
    })
  }

  const handleEqualInput = () => {
    let newResult = 0
    console.log(calc)
    switch (calc.operator) {
      case "+":
        newResult = calc.result + calc.number
        break
      case "-":
        newResult = calc.result - calc.number
        break
      case "*":
        newResult = calc.result * calc.number
        break
      case "/":
        newResult = calc.result / calc.number
        break
      default:
        newResult = calc.number ? calc.number : calc.result
    }
    console.log(newResult)
    setCalc({
      number: "",
      operator: "",
      result: Number(+parseFloat(newResult.toPrecision(12))),
    })
  }

  const handleCommaInput = () => {
    if (calc.number)
      setCalc({
        number: !calc.number.toString().includes(".")
          ? calc.number + "."
          : calc.number,
        result: calc.result,
        operator: calc.operator,
      })
  }

  return (
    <div className="calculator">
      <CalculatorDisplay
        output={calc.number ? calc.number : calc.result + calc.operator}
      />
      <div className="calculator-buttons">
        <CalculatorButton
          value="0"
          className="calc-number-btn"
          onClick={handleNumberInput}
        />
        <CalculatorButton
          value="1"
          className="calc-number-btn"
          onClick={handleNumberInput}
        />
        <CalculatorButton
          value="2"
          className="calc-number-btn"
          onClick={handleNumberInput}
        />
        <CalculatorButton
          value="3"
          className="calc-number-btn"
          onClick={handleNumberInput}
        />
        <CalculatorButton
          value="4"
          className="calc-number-btn"
          onClick={handleNumberInput}
        />
        <CalculatorButton
          value="5"
          className="calc-number-btn"
          onClick={handleNumberInput}
        />
        <CalculatorButton
          value="6"
          className="calc-number-btn"
          onClick={handleNumberInput}
        />
        <CalculatorButton
          value="7"
          className="calc-number-btn"
          onClick={handleNumberInput}
        />
        <CalculatorButton
          value="8"
          className="calc-number-btn"
          onClick={handleNumberInput}
        />
        <CalculatorButton
          value="9"
          className="calc-number-btn"
          onClick={handleNumberInput}
        />
        <CalculatorButton
          value=","
          className="calc-comma-btn"
          onClick={handleCommaInput}
        />
        <CalculatorButton
          value="+"
          className="calc-operator-btn"
          onClick={handleOperatorInput}
        />
        <CalculatorButton
          value="-"
          className="calc-operator-btn"
          onClick={handleOperatorInput}
        />
        <CalculatorButton
          value="*"
          className="calc-operator-btn"
          onClick={handleOperatorInput}
        />
        <CalculatorButton
          value="/"
          className="calc-operator-btn"
          onClick={handleOperatorInput}
        />
        <CalculatorButton
          value="C"
          className="calc-clear-btn"
          onClick={handleClearInput}
        />
        <CalculatorButton
          value="="
          className="calc-equal-btn"
          onClick={handleEqualInput}
        />

        {/* <CalculatorButton value="%" className="" onClick={handleOperatorInput}/> */}
        {/* <CalculatorButton value="+-" className="" onClick={handleOperatorInput}/> */}
      </div>
    </div>
  )
}

function CalculatorButton(props) {
  return (
    <button
      value={props.value}
      className={"calc-btn " + props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </button>
  )
}

function CalculatorDisplay(props) {
  return <div className="calc-display">{props.output}</div>
}

export default App
