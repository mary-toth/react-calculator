// @ts-nocheck
import React, { useState } from 'react'

export function App() {
  const [display, setDisplay] = useState(0)
  const [firstNum, setFirstNum] = useState(0)
  const [operator, setOperator] = useState('')

  function handleACButton() {
    setDisplay(0)
    setFirstNum(0)
    setOperator('')
  }

  function percentageButton() {
    setDisplay(display / 100)
  }
  function handleClickNumber(event) {
    setDisplay(display + event.target.value)
  }

  function handleOperator(event) {
    setFirstNum(parseInt(display))
    setDisplay(0)
    setOperator(event.target.textContent)
  }
  function handleEqualButton() {
    if (display && firstNum) {
      switch (operator) {
        case '&divide;':
          setDisplay(parseInt(firstNum) / parseInt(display))
          break
        case '+':
          setDisplay(parseInt(firstNum) + parseInt(display))
          break
        case '-':
          setDisplay(parseInt(firstNum) - parseInt(display))
          break
        case 'x':
          setDisplay(parseInt(firstNum) * parseInt(display))
          break
        default:
          break
      }
    }
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
          <button className="button op" onClick={handleOperator}>
            &divide;
          </button>
          <button className="button" value={7} onClick={handleClickNumber}>
            7
          </button>
          <button className="button" value={8} onClick={handleClickNumber}>
            8
          </button>
          <button className="button" value={9} onClick={handleClickNumber}>
            9
          </button>
          <button className="button op" value="*" onClick={handleOperator}>
            x
          </button>
          <button className="button" value={4} onClick={handleClickNumber}>
            4
          </button>
          <button className="button" value={5} onClick={handleClickNumber}>
            5
          </button>
          <button className="button" value={6} onClick={handleClickNumber}>
            6
          </button>
          <button className="button op" onClick={handleOperator}>
            -
          </button>
          <button className="button" value={1} onClick={handleClickNumber}>
            1
          </button>
          <button className="button" value={2} onClick={handleClickNumber}>
            2
          </button>
          <button className="button" value={3} onClick={handleClickNumber}>
            3
          </button>
          <button className="button op" onClick={handleOperator}>
            +
          </button>
          <button className="button x2" value={0} onClick={handleClickNumber}>
            0
          </button>
          <button className="button">.</button>
          <button className="button op" onClick={handleEqualButton}>
            =
          </button>
        </div>
      </div>
    </main>
  )
}
