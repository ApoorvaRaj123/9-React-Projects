import { useState } from 'react'

import './App.css'



function App() {

  let [counter, setCounter] = useState(15)

  const addValue = function() {
    if (counter>=20) {
      setCounter(counter+0)
    }
    else{
      setCounter(counter + 1)
    }
  }

  const removeValue = function(){
    if (counter<=0) {
      setCounter(counter+0)
    }
    else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <h1>React Course</h1>
      <h2>Count Value : {counter}</h2>
      <button
        onClick={addValue}>
        Add Value {counter}</button>{" "}
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
