import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center p-2'>
      <h1>Learn about ReduxToolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
