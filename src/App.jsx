// @ts-nocheck
import React, { useState } from 'react'

export function App() {
  // uddate this when user presses a digit:
  const [display, setDisplay] = useState('')

  // When the user presses an operator (like +) copy that value
  // into another state called "first number" - and record what operator they chose
  const [firstNum, setFirstNum] = useState('')

  function handleACButton() {
    setDisplay(0)
    setFirstNum(0)
  }

  function percentageButton() {
    setDisplay(display / 100)

    console.log({ number: display })
  }

  function divisionButton() {
    setFirstNum(display)
    setDisplay(0)
  }
  function multiplyButton() {
    setFirstNum(display)
    setDisplay(0)
  }

  function subtractButton() {
    setFirstNum(display)
    setDisplay(0)
  }

  function addButton() {
    setFirstNum(display)
    setDisplay(0)
  }

  function handleClickNumber(event) {
    if (display[0] === '0') {
      setDisplay(event.target.value)
    }
    console.log(display + event.target.value)
    setDisplay(display + event.target.value)
    // setFirstNum(display + event.target.value)
  }

  function equalButton() {
    console.log(1)
    console.log(parseInt(firstNum) + parseInt(display))
    setDisplay(parseInt(firstNum) + parseInt(display))
  }
  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={handleACButton}>
            AC
          </button>
          <button className="button fn">&plusmn;</button>
          <button className="button fn" onClick={percentageButton}>
            %
          </button>
          <button className="button op" onClick={divisionButton}>
            &divide;
          </button>
          <button className="button" value={7} onClick={handleClickNumber}>
            7
          </button>
          <button className="button" value={8} onClick={handleClickNumber}>
            8
          </button>
          <button
            className="button"
            onClick={function () {
              setDisplay(display + '9')
              console.log(display)
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
              setDisplay(display + '4')
              console.log(display)
            }}
          >
            4
          </button>
          <button
            className="button"
            onClick={function () {
              setDisplay(display + '5')
              console.log(display)
            }}
          >
            5
          </button>
          <button
            className="button"
            onClick={function () {
              setDisplay(display + '6')
              console.log(display)
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
              setDisplay(display + '1')
              console.log(display)
            }}
          >
            1
          </button>
          <button
            className="button"
            onClick={function () {
              setDisplay(display + '2')
              console.log(display)
            }}
          >
            2
          </button>
          <button
            className="button"
            onClick={function () {
              setDisplay(display + '3')
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
              setDisplay(display + '0')
              console.log(display)
            }}
          >
            0
          </button>
          <button className="button">.</button>
          <button className="button op" onClick={equalButton}>
            =
          </button>
        </div>
      </div>
    </main>
  )
}
