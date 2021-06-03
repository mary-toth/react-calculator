import React from 'react'

export function App() {
  return (
    <main>
      <div className="calculator">
        <div className="display">0</div>
        <div className="buttons">
          <button className="button fn">AC</button>
          <button className="button fn">&plusmn;</button>
          <button className="button fn">%</button>
          <button className="button op">&divide;</button>
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button op">&times;</button>
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button op">&minus;</button>
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button op">+</button>
          <button className="button x2">0</button>
          <button className="button">.</button>
          <button className="button op">=</button>
        </div>
      </div>
    </main>
  )
}
