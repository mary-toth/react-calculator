import React, { useState, useEffect } from 'react'

export function App() {
  // uddate this when user presses a digit:
  const [number, setNumber] = useState(0)

  // When the user presses an operator (like +) copy that value
  // into another state called "first number" - and record what operator they chose
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)

  const [total, setTotal] = useState(0)

  function setACButton() {
    setNumber(0)
    setFirstNum(0)
    setSecondNum(0)
    setTotal(0)
  }

  function percentageButton() {
    setNumber(number / 100)

    console.log({ number })
  }

  function divisionButton() {
    setFirstNum(number)
    setNumber(0)
  }
  function multiplyButton() {
    setFirstNum(number)
    setNumber(0)
  }

  function subtractButton() {
    setFirstNum(number)
    setNumber(0)
  }

  function addButton() {
    setFirstNum(number)
    setNumber(0)
  }

  function equalButton() {
    setTotal(firstNum + secondNum)
  }
  return (
    <main>
      <div className="calculator">
        <div className="display">{number}</div>
        <div className="buttons">
          <button className="button fn" onClick={setACButton}>
            AC
          </button>
          <button className="button fn">&plusmn;</button>
          <button className="button fn" onClick={percentageButton}>
            %
          </button>
          <button className="button op" onClick={divisionButton}>
            &divide;
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '7')
              console.log(number)
            }}
          >
            7
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '8')
              console.log(number)
            }}
          >
            8
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '9')
              console.log(number)
            }}
          >
            9
          </button>
          <button className="button op" onClick={multiplyButton}>
            &times;
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '4')
              console.log(number)
            }}
          >
            4
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '5')
              console.log(number)
            }}
          >
            5
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '6')
              console.log(number)
            }}
          >
            6
          </button>
          <button className="button op" onClick={subtractButton}>
            &minus;
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '1')
              console.log(number)
            }}
          >
            1
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '2')
              console.log(number)
            }}
          >
            2
          </button>
          <button
            className="button"
            onClick={function () {
              setNumber(number + '3')
              console.log(3)
            }}
          >
            3
          </button>
          <button className="button op" onClick={addButton}>
            +
          </button>
          <button
            className="button x2"
            onClick={function () {
              setNumber(number + '0')
              console.log(number)
            }}
          >
            0
          </button>
          <button className="button">.</button>
          <button className="button op">=</button>
        </div>
      </div>
    </main>
  )
}
