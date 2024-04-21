import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Himanshu",
    age: 23
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      < Card username="ChaiAurCode" btnText="click me"/>
      < Card username="Sue" btnText="visit me"/>
      <Card />
      {/* < Card channel="chaiaurcode" cardObj={myObj} cardArr={newArr}/> */}
    </>
  )
}

export default App