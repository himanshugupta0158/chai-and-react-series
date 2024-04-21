import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // we need to use hooks to update UI based variable value updates or something liek that
  // below counter variable will not takes affect in UI even if we update its value
  // let counter = 5;

  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if((counter + 1) < 21){
      setCounter(counter + 1)
    }

  }

  let removeValue = () => {
    if ((counter - 1) > -1) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
